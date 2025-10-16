<script setup lang="ts">
const partners = [
  {
    src: '/partner-1.png'
  },
  {
    src: '/partner-2.png'
  },
  {
    src: '/partner-3.png'
  },
  {
    src: '/partner-4.png'
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
