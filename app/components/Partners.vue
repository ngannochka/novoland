<script setup lang="ts">
const partners = [
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/partner-1.png',
    to: 'https://google.com/',
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/partner-2.png',
    to: 'https://google.com/',
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/partner-3.png',
    to: 'https://google.com/',
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/partner-4.png',
    to: 'https://google.com/',
  },
]
</script>

<template>
  <UPageSection
    id="partners"
    title="Наши партнеры"
    :ui="{
      title: 'font-serif text-left text-[#28445C]',
    }"
  >
    <UMarquee>
      <NuxtLink v-for="(partner, index) in partners" :key="index" :to="partner.to" target="_blank">
        <NuxtImg :src="partner.src" />
      </NuxtLink>
    </UMarquee>
  </UPageSection>
</template>

<style scoped></style>
