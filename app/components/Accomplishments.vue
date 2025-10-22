<script setup lang="ts">
const accomplishments = [
  {
    description: 'Являемся членами международного гуминового сообщества IHSS',
    icon: 'lucide:globe'
  },
  {
    description: 'Постоянные спонсоры Международной научно-практической конференции «Разработка лекарственных средств - традиции и перспективы»',
    icon: 'lucide:graduation-cap'
  },
  {
    description: 'Дипломанты номинации «Достояние отрасли 2022» за вклад в развитие отрасли и эффективное использование ресурсов компании',
    icon: 'lucide:award'
  },
  {
    description: 'Дипломанты Международного фармацевтического форума-выставки «Аптека 2023» («Сколково») «Разработка и производство инновационного косметического средства…»',
    icon: 'lucide:flask-conical'
  },
  {
    description: 'Участники и спонсоры Международных конференций СНГ МГО по гуминовым инновационным технологиям (НІТ-2023) «Гуминовые вещества и фармация»',
    icon: 'lucide:dna'
  },
  {
    description: 'Постоянные участники и посетители российских и международных выставок.',
    icon: 'lucide:map-pin'
  },
]
</script>

<template>
  <UPageSection
    id="accomplishments"
    title="Достижения"
    :ui="{
      title: 'font-serif text-left text-[#28445C]',
    }"
  >
    <UPageGrid>
      <UPageCard
        v-for="(accomplishment, index) in accomplishments"
        :key="index"
        v-bind="accomplishment"
        variant="solid"
        :ui="{
          root: 'rounded-2xl bg-[#314158] mb-3',
          leadingIcon: 'text-white',
          description: 'font-sans text-white'
        }"
      />
    </UPageGrid>
  </UPageSection>
</template>

<style scoped></style>
