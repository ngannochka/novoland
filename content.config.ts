import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    header: defineCollection({
      type: 'data',
      source: 'header/*.json',
      schema: z.object({
        callbackBtn: z.string(),
      })
    }),

    hero: defineCollection({
      type: 'data',
      source: 'hero/*.json',
      schema: z.object({
        description: z.string(),
        callbackBtn: z.string(),
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
  }
})
