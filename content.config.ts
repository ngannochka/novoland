import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    header: defineCollection({
      type: 'data',
      source: 'header/*.json',
      schema: z.object({
        callbackButton: z.string(),
      })
    }),

    hero: defineCollection({
      type: 'data',
      source: 'hero/*.json',
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
          title: z.string(),
          description: z.string(),
          features: z.array(z.string()),
          callbackButton: z.string()
        })),
      })
    }),

    advantages: defineCollection({
      type: 'data',
      source: 'advantages/**.json',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
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
        src: z.string(),
        to: z.string()
      })
    }),

    accomplishments: defineCollection({
      type: 'data',
      source: 'accomplishments/**.json',
      schema: z.object({
        description: z.string(),
        icon: z.string()
      })
    }),

    certificates: defineCollection({
      type: 'data',
      source: 'certificates/**.json',
      schema: z.object({
        src: z.string()
      })
    }),

    news: defineCollection({
      type: 'data',
      source: 'news/**.json',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        date: z.string(),
      })
    }),

    contacts: defineCollection({
      type: 'data',
      source: 'contacts/**.json',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        to: z.string().optional(),
      })
    }),
  }
})
