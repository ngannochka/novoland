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

    contacts: defineCollection({
      type: 'data',
      source: 'contacts/*.json',
      schema: z.object({
        title: z.string().describe('Заголовок секции'),
        cards: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            to: z.string().optional(),
          })
        )
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
    })
  }
})
