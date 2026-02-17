export const galleryImages = [
  'WhatsApp Image 2026-02-05 at 15.43.42 (1).jpeg',
  'WhatsApp Image 2026-02-05 at 15.43.42.jpeg',
  'WhatsApp Image 2026-02-05 at 15.43.44.jpeg',
  'WhatsApp Image 2026-02-05 at 15.43.45.jpeg',
  'WhatsApp Image 2026-02-05 at 15.44.00.jpeg',
  'WhatsApp Image 2026-02-05 at 15.44.12 (1).jpeg',
  'WhatsApp Image 2026-02-05 at 15.44.12 (2).jpeg',
  'WhatsApp Image 2026-02-05 at 15.44.12.jpeg',
  'WhatsApp Image 2026-02-05 at 15.44.33.jpeg',
  'WhatsApp Image 2026-02-12 at 11.32.03 (1).jpeg',
  'WhatsApp Image 2026-02-12 at 11.32.03 (2).jpeg',
  'WhatsApp Image 2026-02-12 at 11.32.03.jpeg',
  'WhatsApp Image 2026-02-12 at 11.32.11.jpeg',
  'WhatsApp Image 2026-02-12 at 11.32.13 (1).jpeg',
  'WhatsApp Image 2026-02-12 at 11.32.13 (2).jpeg',
  'WhatsApp Image 2026-02-12 at 11.32.13.jpeg',
  'WhatsApp Image 2026-02-12 at 11.32.14 (1).jpeg',
  'WhatsApp Image 2026-02-12 at 11.32.14 (2).jpeg',
  'WhatsApp Image 2026-02-12 at 11.32.14 (3).jpeg',
  'WhatsApp Image 2026-02-12 at 11.32.14.jpeg',
  'WhatsApp Image 2026-02-12 at 11.32.15 (1).jpeg',
  'WhatsApp Image 2026-02-12 at 11.32.15.jpeg',
  'WhatsApp Image 2026-02-12 at 11.51.56.jpeg',
  'WhatsApp Image 2026-02-12 at 11.51.57 (1).jpeg',
  'WhatsApp Image 2026-02-12 at 11.51.57 (2).jpeg',
  'WhatsApp Image 2026-02-12 at 11.51.57 (3).jpeg',
  'WhatsApp Image 2026-02-12 at 11.51.57.jpeg',
  'WhatsApp Image 2026-02-12 at 11.51.58 (1).jpeg',
  'WhatsApp Image 2026-02-12 at 11.51.58 (2).jpeg',
  'WhatsApp Image 2026-02-12 at 11.51.58 (3).jpeg',
  'WhatsApp Image 2026-02-12 at 11.51.58.jpeg',
  'WhatsApp Image 2026-02-12 at 11.51.59.jpeg',
]

export const galleryTitles = [
  'Elegant Wedding Setup', 'Birthday Celebration', 'Corporate Event', 'Kids Birthday Party', 'Baby Shower Bliss', 'Custom Celebration', 'Intimate Gathering', 'Grand Celebration', 'Team Building', 'Event Highlights', 'Celebration Moments', 'Special Day', 'Party Setup', 'Guest Experience', 'Decor & Styling', 'Cake & Treats', 'Venue View', 'Memorable Moments', 'Festive Gathering', 'Birthday Fun', 'Kids Party', 'Family Celebration', 'Table Setting', 'Event Styling', 'Moments to Remember', 'Joyful Celebration', 'Beautiful Details', 'Happy Guests', 'Event Day', 'Celebration Vibes', 'Sweet Moments', 'Party Time', 'Our Work',
]

export const categories = ['Weddings', 'Birthdays', 'Corporate', 'Kids Parties', 'Baby Showers', 'Custom']

export const galleryVideos = [
  'WhatsApp Video 2026-02-05 at 15.43.53.mp4',
  'WhatsApp Video 2026-02-05 at 15.44.04.mp4',
  'WhatsApp Video 2026-02-05 at 15.44.10.mp4',
  'WhatsApp Video 2026-02-05 at 15.44.19.mp4',
  'WhatsApp Video 2026-02-05 at 15.44.28.mp4',
  'WhatsApp Video 2026-02-05 at 15.44.32.mp4',
  'WhatsApp Video 2026-02-12 at 11.32.09.mp4',
]

export const getGalleryItems = () =>
  galleryImages.map((image, i) => ({
    id: i + 1,
    title: galleryTitles[i] || 'Event',
    category: categories[i % categories.length],
    image,
  }))
