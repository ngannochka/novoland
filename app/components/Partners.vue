<script setup lang="ts">
const partners = [
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/partner-1.png'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/partner-2.png'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/partner-3.png'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/partner-4.png'
  },
]
</script>

<template>
  <UPageSection
    id="partners"
    title="Наши партнеры"
    :ui="{
      title: 'text-left text-[#28445C]',
    }"
  >
    <UMarquee>
      <NuxtImg v-for="partner in partners" :src="partner.src" />
    </UMarquee>
  </UPageSection>
</template>

<style scoped></style>
