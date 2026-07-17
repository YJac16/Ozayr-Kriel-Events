'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { publicPath } from '@/lib/media'
import { SITE } from '@/lib/constants'

type BrandLogoProps = {
  className?: string
  imageClassName?: string
  width?: number
  height?: number
  priority?: boolean
}

export function BrandLogo({
  className = 'inline-flex shrink-0 items-center',
  imageClassName = 'h-9 w-auto sm:h-10',
  width = 180,
  height = 48,
  priority = false,
}: BrandLogoProps) {
  const pathname = usePathname()

  return (
    <Link
      href="/"
      className={`rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${className}`}
      aria-label={`${SITE.name} — Home`}
      onClick={(e) => {
        if (pathname === '/') {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }}
    >
      <Image
        src={publicPath('Metanoia Events Collective Logo.png')}
        alt={SITE.name}
        width={width}
        height={height}
        className={imageClassName}
        priority={priority}
      />
    </Link>
  )
}
