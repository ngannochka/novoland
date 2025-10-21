<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

// const items = ref([
//   {
//     title: 'Розлив и фасовка',
//   },
//   {
//     title: 'Этикетирование и маркировка',
//   },
//   {
//     title: 'Упаковка',
//   }
// ])

const items = ref<AccordionItem[]>([
  {
    label: 'Is Nuxt UI free to use?',
    content: 'Yes! Nuxt UI is completely free and open source under the MIT license. All 100+ components are available to everyone.'
  },
  {
    label: 'Can I use Nuxt UI with Vue without Nuxt?',
    content: 'Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.'
  },
  {
    label: 'Is Nuxt UI production-ready?',
    content: 'Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.'
  }
])

</script>

<template>
  <UPageSection
    id="services"
    title="Каталог услуг"
    description="Разрабатываем рецептуры и составы, изготавливаем и разливаем жидкие, полужидкие, геле- и желеобразные продукты. Фасуем в пластиковые ампулы, стрипы, монодозы, стики, тубы, флаконы и банки. Предоставляем услуги по упаковке готовой продукции с возможностью полного цикла производства — от идеи до готового продукта."
    :ui="{
      title: 'text-left font-serif text-[#28445C]',
      description: 'text-left font-sans text-[#28445C]',
    }"
  >
    <UAccordion :items="items">
      <template #leading>
        test
      </template>

      <template #default>
        fsfdsfsdf
      </template>

      <template #trailing>
        test2
      </template>
    </UAccordion>

    <!--    <UPageList-->
<!--      :ui="{-->
<!--        root: 'flex gap-4'-->
<!--      }"-->
<!--    >-->
<!--      <UStepper-->
<!--        disabled-->
<!--        :default-value="-1"-->
<!--        :items="items"-->
<!--        :ui="{-->
<!--          trigger: 'bg-[#314158]',-->
<!--          indicator: 'text-white',-->
<!--          separator: 'bg-[#314158]'-->
<!--        }"-->
<!--      />-->
<!--    </UPageList>-->
  </UPageSection>
</template>

<style scoped></style>
