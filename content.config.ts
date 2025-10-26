import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    header: defineCollection({
      type: 'data',
      source: 'header/**.json',
      schema: z.object({
        callbackButton: z.string(),
      })
    }),

    hero: defineCollection({
      type: 'data',
      source: 'hero/**.json',
      schema: z.object({
        description: z.string(),
        callbackButton: z.string(),
      })
    }),

    services: defineCollection({
      type: 'data',
      source: 'services/**.json',
      schema: z.object({
        description: z.string(),
        cards: z.array(z.object({
          backgroundImage: z.string(),
          title: z.string(),
          description: z.string(),
          features: z.array(z.string()),
          callbackButton: z.string()
        })),
      })
    }),

    catalog: defineCollection({
      type: 'data',
      source: 'catalog/**.json',
      schema: z.object({
        title: z.string(),
        filters: z.object({
          volumes: z.array(z.number()),
          materials: z.array(z.string()),
          products: z.array(z.string()),
        }),
        items: z.array(z.object({
          image: z.string(),
          title: z.string(),
          volumes: z.array(z.number()),
          materials: z.array(z.string()),
          filmColor: z.string()
        }))
      })
    }),

    advantages: defineCollection({
      type: 'data',
      source: 'advantages/**.json',
      schema: z.object({
        items: z.array(z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
        }))
      })
    }),

    about: defineCollection({
      type: 'data',
      source: 'about/**.json',
      schema: z.object({
        description: z.string(),
      })
    }),

    partners: defineCollection({
      type: 'data',
      source: 'partners/**.json',
      schema: z.object({
        items: z.array(z.object({
          image: z.string(),
          link: z.string()
        }))
      })
    }),

    accomplishments: defineCollection({
      type: 'data',
      source: 'accomplishments/**.json',
      schema: z.object({
        items: z.array(z.object({
          icon: z.string(),
          description: z.string()
        }))
      })
    }),

    certificates: defineCollection({
      type: 'data',
      source: 'certificates/**.json',
      schema: z.object({
        items: z.array(z.object({
          image: z.string()
        }))
      })
    }),

    news: defineCollection({
      type: 'data',
      source: 'news/**.json',
      schema: z.object({
        items: z.array(z.object({
          image: z.string(),
          date: z.string(),
          title: z.string(),
          description: z.string(),
        }))
      })
    }),

    contacts: defineCollection({
      type: 'data',
      source: 'contacts/**.json',
      schema: z.object({
        items: z.array(z.object({
          title: z.string(),
          description: z.string(),
          link: z.string().optional(),
        }))
      })
    }),

    footer: defineCollection({
      type: 'data',
      source: 'footer/**.json',
      schema: z.object({
        items: z.array(z.object({
          icon: z.string(),
          text: z.string(),
          link: z.string()
        }))
      })
    }),
  }
})
