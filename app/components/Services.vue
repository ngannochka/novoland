<script setup lang="ts">
const items = ref([
  {
    title: 'Розлив и фасовка',
  },
  {
    title: 'Этикетирование и маркировка',
  },
  {
    title: 'Упаковка',
  }
])
</script>

<template>
  <UPageSection
    id="services"
    title="Каталог услуг"
    description="Разрабатываем рецептуры и составы, изготавливаем и разливаем жидкие, полужидкие, геле- и желеобразные продукты. Фасуем в пластиковые ампулы, стрипы, монодозы, стики, тубы, флаконы и банки. Предоставляем услуги по упаковке готовой продукции с возможностью полного цикла производства — от идеи до готового продукта."
    :ui="{
      title: 'text-left text-[#28445C]',
      description: 'text-left text-[#28445C]',
    }"
  >
    <UPageList
      :ui="{
        root: 'flex gap-4'
      }"
    >
      <UStepper
        disabled
        :default-value="-1"
        :items="items"
        :ui="{
          trigger: 'bg-[#314158]',
          indicator: 'text-white',
          separator: 'bg-[#314158]'
        }"
      />
    </UPageList>
  </UPageSection>
</template>

<style scoped></style>
