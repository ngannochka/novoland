<script setup lang="ts">
const accomplishments = [
  {
    description: 'Являемся членами международного гуминового сообщества IHSS'
  },
  {
    description: 'Постоянные спонсоры Международной научно-практической конференции «Разработка лекарственных средств - традиции и перспективы»,'
  },
  {
    description: 'Дипломанты номинации «Достояние отрасли 2022» за вклад в развитие отрасли и эффективное использование ресурсов компании (производство биологических добавок к пище).'
  },
  {
    description: '﻿Дипломанты Международного фармацевтического форума-выставки «Аптека  2023» (Инновационный центр «Сколково») «Разработка и производство инновационного косметического средства с использованием уникального состава и внедрение на Российский рынок».'
  },
  {
    description: '﻿Участники и спонсоры Международных конференций СНГ МГО по гуминовым  инновационным технологиям (НІТ-2023) «Гуминовые вещества и фармация».'
  },
  {
    description: 'Постоянные участники и посетители российских и международных выставок.'
  },
]
</script>

<template>
  <UPageSection
    id="accomplishments"
    title="Достижения"
    :ui="{
      title: 'text-left text-[#28445C]',
    }"
  >
    <UPageGrid>
      <UPageCard
        v-for="(accomplishment, index) in accomplishments"
        :key="index"
        :description="accomplishment.description"
        variant="solid"
        icon="oui:check-in-circle-filled"
        :ui="{
          root: 'bg-[#314158]',
          description: 'text-white',
          leadingIcon: 'text-white',
        }"
      />
    </UPageGrid>
  </UPageSection>
</template>

<style scoped></style>
