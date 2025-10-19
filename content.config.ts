import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    hero: defineCollection({
      type: 'data',
      source: 'hero/*.json',
      schema: z.object({
        description: z.string(),
        callbackBtn: z.string(),
        // avatar: z.string(),
        // url: z.string()
      })
    })
  }
})
