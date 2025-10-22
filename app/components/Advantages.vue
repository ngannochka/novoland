<script setup lang="ts">
const advantages = [
  {
    title: 'Полный спектр услуг',
    description: 'Мы предоставляем полный спектр услуг — от разработки продукта и розлива до доставки готовой продукции клиенту...',
    icon: 'lucide:layers'
  },
  {
    title: 'Многоформатная линейка упаковки',
    description: 'Пластиковые ампулы, стрип-монодозы, тубы, флаконы...',
    icon: 'lucide:package-check'
  },
  {
    title: 'Широкий технологический профиль',
    description: 'Наше производство позволяет работать с продуктами различной консистенции...',
    icon: 'lucide:beaker'
  },
  {
    title: 'Преимущество пластиковых ампул и монодоз',
    description: 'Возможность мелкого дозирования от 1 мл, простота вскрытия...',
    icon: 'lucide:test-tube-diagonal'
  },
  {
    title: 'Система менеджмента',
    description: 'Производство соответствует требованиям системы менеджмента безопасности...',
    icon: 'lucide:user-check-2'
  },
  {
    title: 'Логистика',
    description: 'Выгодное географическое расположение производства обеспечивает...',
    icon: 'lucide:truck'
  },
]
</script>

<template>
  <UPageSection
    id="advantages"
    title="Наши преимущества"
    :ui="{
      title: 'font-serif text-left text-[#28445C]',
    }"
  >
    <UPageGrid>
      <UPageCard
        v-for="(advantage, index) in advantages"
        :key="index"
        v-bind="advantage"
        variant="solid"
        :ui="{
          root: 'rounded-2xl bg-[#314158]',
          leadingIcon: 'text-white',
          title: 'font-sans',
          description: 'font-sans text-white',
        }"
      />
    </UPageGrid>
  </UPageSection>
</template>

<style scoped></style>
