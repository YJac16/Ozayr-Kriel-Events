'use client'

import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/cn'

type SnapCoverflowProps = {
  children: ReactNode
  dwellMs?: number
  slideMs?: number
  activeScale?: number
  sideScale?: number
  className?: string
  trackClassName?: string
  ariaLabel?: string
  compact?: boolean
  onActiveChange?: (index: number) => void
}

export function SnapCoverflow({
  children,
  dwellMs = 1800,
  slideMs = 620,
  activeScale = 1.12,
  sideScale = 0.88,
  className,
  trackClassName,
  ariaLabel = 'Gallery',
  compact = false,
  onActiveChange,
}: SnapCoverflowProps) {
  const items = Children.toArray(children)
  const count = items.length
  const origin = count > 1 ? count : 0
  const trackRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<Array<HTMLDivElement | null>>([])
  const dwellTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const paused = useRef(false)
  const inView = useRef(true)
  const reducedMotion = useRef(false)
  const logicalIndex = useRef(origin)
  const dragOffset = useRef(0)
  const stepPx = useRef(280)
  const didDrag = useRef(false)
  const dwellRef = useRef<() => void>(() => {})
  const pointer = useRef<{
    pointerId: number
    startX: number
    originIndex: number
  } | null>(null)

  const [visualIndex, setVisualIndex] = useState(origin)
  const [dragPx, setDragPx] = useState(0)
  const [motionEnabled, setMotionEnabled] = useState(true)
  const [step, setStep] = useState(280)
  const [animating, setAnimating] = useState(false)

  const clearDwell = () => {
    if (dwellTimer.current) {
      clearTimeout(dwellTimer.current)
      dwellTimer.current = null
    }
  }

  const clearResume = () => {
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current)
      resumeTimer.current = null
    }
  }

  const pause = useCallback(() => {
    paused.current = true
    clearDwell()
    clearResume()
  }, [])

  const measureStep = useCallback(() => {
    const first = slideRefs.current[0]
    const second = slideRefs.current[1]
    if (first && second) {
      const gap = second.offsetLeft - first.offsetLeft
      if (gap > 0) {
        stepPx.current = gap
        setStep(gap)
        return gap
      }
    }
    if (first) {
      const fallback = first.offsetWidth + 16
      stepPx.current = fallback
      setStep(fallback)
      return fallback
    }
    return stepPx.current
  }, [])

  const setActive = useCallback(
    (index: number, animate: boolean) => {
      if (count === 0) return
      logicalIndex.current = index
      setAnimating(animate && !reducedMotion.current)
      setVisualIndex(index)
      setDragPx(0)
      dragOffset.current = 0
    },
    [count]
  )

  const wrapJump = useCallback(
    (target: number, visual: number) => {
      setAnimating(false)
      logicalIndex.current = target
      setVisualIndex(target)
      setDragPx(0)
      dragOffset.current = 0
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setActive(visual, true)
        })
      })
    },
    [setActive]
  )

  const goTo = useCallback(
    (index: number, animate = true) => {
      if (count < 2) {
        setActive(0, true)
        return
      }
      const max = count * 2 - 2
      const current = logicalIndex.current
      if (index <= 0) wrapJump(current + count, index + count)
      else if (index >= max + 1) wrapJump(current - count, index - count)
      else setActive(index, animate)
    },
    [count, setActive, wrapJump]
  )

  const stepBy = useCallback(
    (delta: number) => {
      if (count < 1) return
      goTo(logicalIndex.current + delta)
    },
    [count, goTo]
  )

  const scheduleDwell = useCallback(() => {
    clearDwell()
    if (paused.current || reducedMotion.current || !inView.current || count < 2)
      return
    dwellTimer.current = setTimeout(() => {
      if (paused.current || reducedMotion.current || !inView.current) return
      stepBy(1)
      dwellTimer.current = setTimeout(() => {
        dwellRef.current()
      }, slideMs + 50)
    }, dwellMs)
  }, [count, dwellMs, slideMs, stepBy])

  useEffect(() => {
    dwellRef.current = scheduleDwell
  }, [scheduleDwell])

  const resume = useCallback(() => {
    clearResume()
    if (reducedMotion.current) return
    resumeTimer.current = setTimeout(() => {
      paused.current = false
      dwellRef.current()
    }, 650)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      reducedMotion.current = media.matches
      setMotionEnabled(!media.matches)
      if (media.matches) pause()
    }
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [pause])

  useEffect(() => {
    const node = viewportRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting
        if (entry.isIntersecting && !paused.current) dwellRef.current()
        else clearDwell()
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useLayoutEffect(() => {
    measureStep()
    const node = viewportRef.current
    if (!node) return
    const ro = new ResizeObserver(() => measureStep())
    ro.observe(node)
    if (trackRef.current) ro.observe(trackRef.current)
    return () => ro.disconnect()
  }, [measureStep, count])

  useEffect(() => {
    if (!paused.current && motionEnabled) scheduleDwell()
    return () => {
      clearDwell()
      clearResume()
    }
  }, [scheduleDwell, motionEnabled])

  const activeLogical =
    visualIndex >= count ? visualIndex - count : visualIndex

  useEffect(() => {
    onActiveChange?.(activeLogical)
  }, [activeLogical, onActiveChange])

  const endPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    const active = pointer.current
    if (!active || active.pointerId !== event.pointerId) return
    pointer.current = null
    try {
      event.currentTarget.releasePointerCapture(event.pointerId)
    } catch {
      /* ignore */
    }
    const threshold = Math.max(48, stepPx.current * 0.22)
    let next = active.originIndex
    if (dragOffset.current <= -threshold) next += 1
    else if (dragOffset.current >= threshold) next -= 1
    goTo(next)
    resume()
  }

  if (count === 0) return null

  const activeInSet = visualIndex >= count ? visualIndex - count : visualIndex
  const setOffset = visualIndex >= count ? 1 : 0

  const renderSet = (setIndex: number) =>
    items.map((child, itemIndex) => {
      if (!isValidElement(child)) return child
      const isActive = setIndex === setOffset && itemIndex === activeInSet
      const distance = Math.min(
        Math.abs(itemIndex - activeInSet),
        count - Math.abs(itemIndex - activeInSet)
      )
      const scale = motionEnabled
        ? isActive
          ? activeScale
          : distance === 1
            ? sideScale
            : sideScale * 0.92
        : 1

      const element = child as ReactElement<{ className?: string; draggable?: boolean }>
      return (
        <div
          key={`${setIndex}-${element.key ?? itemIndex}`}
          ref={(node) => {
            if (setIndex === 0) slideRefs.current[itemIndex] = node
          }}
          className={cn(
            'shrink-0 origin-center rounded-2xl',
            motionEnabled ? 'transition-[transform,opacity] duration-500 ease-out' : '',
            isActive && motionEnabled
              ? 'shadow-[0_22px_50px_rgba(0,0,0,0.45)]'
              : 'shadow-[0_10px_28px_rgba(0,0,0,0.25)]'
          )}
          style={{
            transform: `scale(${scale})`,
            opacity: motionEnabled ? (isActive ? 1 : distance === 1 ? 0.97 : 0.9) : 1,
            zIndex: isActive ? 3 : distance === 1 ? 2 : 1,
          }}
          aria-hidden={!isActive}
        >
          {cloneElement(element, {
            className: cn(
              typeof element.props.className === 'string'
                ? element.props.className
                : undefined,
              'select-none'
            ),
            draggable: false,
          })}
        </div>
      )
    })

  return (
    <div
      ref={viewportRef}
      className={cn(
        'relative [mask-image:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)]',
        className
      )}
      onPointerEnter={() => motionEnabled && pause()}
      onPointerLeave={() => {
        if (motionEnabled && !pointer.current) resume()
      }}
    >
      <div
        role="region"
        aria-label={ariaLabel}
        aria-roledescription="carousel"
        tabIndex={0}
        className={cn(
          'overflow-hidden touch-pan-y',
          compact ? 'py-6 sm:py-8' : 'py-8 sm:py-10',
          motionEnabled ? 'cursor-grab active:cursor-grabbing' : ''
        )}
        onPointerDown={(event) => {
          if (!motionEnabled) return
          if (event.pointerType === 'mouse' && event.button !== 0) return
          pause()
          didDrag.current = false
          pointer.current = {
            pointerId: event.pointerId,
            startX: event.clientX,
            originIndex: logicalIndex.current,
          }
          setAnimating(false)
          event.currentTarget.setPointerCapture(event.pointerId)
        }}
        onPointerMove={(event) => {
          const active = pointer.current
          if (!active || active.pointerId !== event.pointerId) return
          const delta = event.clientX - active.startX
          if (Math.abs(delta) > 6) didDrag.current = true
          dragOffset.current = delta
          setDragPx(delta)
        }}
        onPointerUp={endPointer}
        onPointerCancel={endPointer}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault()
            pause()
            stepBy(1)
            resume()
          } else if (event.key === 'ArrowLeft') {
            event.preventDefault()
            pause()
            stepBy(-1)
            resume()
          }
        }}
        onClickCapture={(event) => {
          if (didDrag.current) {
            event.preventDefault()
            event.stopPropagation()
            didDrag.current = false
          }
        }}
        onFocus={pause}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null))
            resume()
        }}
      >
        <div
          ref={trackRef}
          className={cn(
            'flex w-max flex-row items-center gap-3 sm:gap-4',
            'px-[max(0.75rem,calc(50%-min(38vw,9rem)))]',
            'sm:px-[max(0.75rem,calc(50%-10rem))]',
            trackClassName
          )}
          style={{
            transform: `translate3d(${-visualIndex * step + dragPx}px, 0, 0)`,
            transition:
              animating && motionEnabled
                ? `transform ${slideMs}ms cubic-bezier(0.22, 1, 0.36, 1)`
                : 'none',
            willChange: 'transform',
          }}
        >
          {renderSet(0)}
          {renderSet(1)}
        </div>
      </div>
    </div>
  )
}
