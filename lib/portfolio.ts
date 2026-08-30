export type PortfolioCategory =
  | 'weddings'
  | 'birthdays'
  | 'braai'
  | 'cinema'

export type PortfolioItem = {
  src: string
  category: PortfolioCategory
  label: string
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  ...[1, 2, 3, 4, 5, 6].map((n) => ({
    src: `wedding (${n}).jpeg`,
    category: 'weddings' as const,
    label: n === 1 ? 'Cape Town Wedding' : `Wedding Celebration ${n}`,
  })),
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => ({
    src: `Kids_birthday (${n}).jpeg`,
    category: 'birthdays' as const,
    label: `Birthday & celebration ${n}`,
  })),
  ...[1, 2, 3].map((n) => ({
    src: `braai (${n}).jpeg`,
    category: 'braai' as const,
    label: `Braai experience ${n}`,
  })),
  ...[1, 2, 3, 4].map((n) => ({
    src: `food (${n}).jpeg`,
    category: 'braai' as const,
    label: `Food & gathering ${n}`,
  })),
  {
    src: 'open_air_theatre.jpeg',
    category: 'cinema',
    label: 'Open-air cinema',
  },
  ...[1, 2, 3, 4, 5, 6].map((n) => ({
    src: `custom (${n}).jpeg`,
    category: 'cinema' as const,
    label: `Outdoor & bespoke ${n}`,
  })),
]

export const CATEGORY_LABELS: Record<PortfolioCategory | 'all', string> = {
  all: 'All',
  weddings: 'Weddings',
  birthdays: 'Birthdays',
  braai: 'Braai Events',
  cinema: 'Outdoor Cinema',
}

/** Home gallery preview — one highlight per service type */
export const GALLERY_PREVIEW_ITEMS: PortfolioItem[] = [
  { src: 'wedding (2).jpeg', category: 'weddings', label: 'Cape Town Wedding' },
  {
    src: 'Kids_birthday (3).jpeg',
    category: 'birthdays',
    label: 'Kids party setup',
  },
  { src: 'food (2).jpeg', category: 'braai', label: 'Fire & gather' },
  {
    src: 'open_air_theatre.jpeg',
    category: 'cinema',
    label: 'Open-air cinema',
  },
]
