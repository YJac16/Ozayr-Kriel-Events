import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse weddings, birthdays, braais, and outdoor cinema events by Metanoia Events Collective (Pty) Ltd.',
}

export default function GalleryPage() {
  return <GalleryClient />
}
