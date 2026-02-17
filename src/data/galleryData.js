export const galleryImages = [
  'wedding (1).jpeg',
  'wedding (2).jpeg',
  'wedding (3).jpeg',
  'wedding (4).jpeg',
  'wedding (5).jpeg',
  'wedding (6).jpeg',
  'Kids_birthday (1).jpeg',
  'Kids_birthday (2).jpeg',
  'Kids_birthday (3).jpeg',
  'Kids_birthday (4).jpeg',
  'Kids_birthday (5).jpeg',
  'Kids_birthday (6).jpeg',
  'Kids_birthday (7).jpeg',
  'Kids_birthday (8).jpeg',
  'Kids_birthday (9).jpeg',
  'Kids_birthday (10).jpeg',
  'Kids_birthday (11).jpeg',
  'braai (1).jpeg',
  'braai (2).jpeg',
  'braai (3).jpeg',
  'custom (1).jpeg',
  'custom (2).jpeg',
  'custom (3).jpeg',
  'custom (4).jpeg',
  'custom (5).jpeg',
  'custom (6).jpeg',
  'food (1).jpeg',
  'food (2).jpeg',
  'food (3).jpeg',
  'food (4).jpeg',
  'open_air_theatre.jpeg',
]

export const galleryTitles = [
  'Elegant Wedding Setup', 'Special Day', 'Table Setting', 'Wedding Bliss', 'Beautiful Ceremony', 'Memorable Moments',
  'Kids Birthday Party', 'Birthday Fun', 'Party Time', 'Sweet Moments', 'Kids Party', 'Family Celebration',
  'Joyful Celebration', 'Festive Gathering', 'Celebration Vibes', 'Happy Guests', 'Our Work',
  'Braai & Outdoor', 'Guest Experience', 'Event Highlights',
  'Custom Celebration', 'Intimate Gathering', 'Decor & Styling', 'Event Styling', 'Party Setup', 'Grand Celebration',
  'Cake & Treats', 'Beautiful Details', 'Venue View', 'Event Day',
  'Open Air Theatre',
]

export const categories = ['Weddings', 'Birthdays', 'Corporate', 'Kids Parties', 'Baby Showers', 'Custom']

export const galleryVideos = [
  'Kids_birthday (1).mp4',
  'Kids_birthday (2).mp4',
  'Kids_birthday (3).mp4',
  'braai (1).mp4',
  'custom (1).mp4',
  'custom (2).mp4',
  'food (1).mp4',
]

export const getGalleryItems = () =>
  galleryImages.map((image, i) => ({
    id: i + 1,
    title: galleryTitles[i] || 'Event',
    category: categories[i % categories.length],
    image,
  }))
