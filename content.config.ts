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
    })
  }
})
