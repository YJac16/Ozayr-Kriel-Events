const BASE = 'https://wa.link/r450xo?text='

export const WHATSAPP_HREF =
  BASE +
  encodeURIComponent(
    "Hi, I'd like to book an event with Metanoia Events Collective"
  )

export const SERVICE_WHATSAPP = {
  weddings:
    BASE +
    encodeURIComponent(
      "Hi, I'd like to enquire about wedding planning with Metanoia Events Collective"
    ),
  birthdays:
    BASE +
    encodeURIComponent(
      "Hi, I'd like to enquire about a birthday or private event with Metanoia Events Collective"
    ),
  braai:
    BASE +
    encodeURIComponent(
      "Hi, I'd like to enquire about a braai experience with Metanoia Events Collective"
    ),
  cinema:
    BASE +
    encodeURIComponent(
      "Hi, I'd like to enquire about an outdoor movie night with Metanoia Events Collective"
    ),
} as const

export type ServiceWhatsAppKey = keyof typeof SERVICE_WHATSAPP
