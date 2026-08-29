'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { publicPath } from '@/lib/media'
import { SITE } from '@/lib/constants'

type BrandLogoProps = {
  className?: string
  priority?: boolean
}

export function BrandLogo({
  className = '',
  priority = false,
}: BrandLogoProps) {
  const pathname = usePathname()

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${className}`}
      aria-label={`${SITE.name} — Home`}
      onClick={(e) => {
        if (pathname === '/') {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }}
    >
      <Image
        src={publicPath('metanoia-mark.png')}
        alt=""
        width={80}
        height={124}
        className="h-10 w-auto object-contain mix-blend-screen sm:h-11"
        priority={priority}
      />
      <span className="flex flex-col items-start leading-none">
        <span className="font-display text-[15px] font-semibold tracking-[0.04em] text-brand-gold sm:text-base">
          Metanoia
        </span>
        <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-brand-cream/80 sm:text-[10px]">
          Events Collective
        </span>
      </span>
    </Link>
  )
}
