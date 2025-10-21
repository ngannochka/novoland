<script setup lang="ts">
const certificates = [
  'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/cert-1.jpg',
  'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/cert-2.jpg',
  'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/cert-3.jpg',
  'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/cert-4.jpg',
  'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/cert-5.jpg',
  'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/cert-6.jpg',
  'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/cert-7.jpg',
  'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/cert-8.jpg',
  'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/cert-9.jpg',
]
</script>

<template>
  <UPageSection
    id="certificates"
    title="Сертификаты"
    :ui="{
      title: 'font-serif text-left text-[#28445C]'
    }"
  >
    <UCarousel
      v-slot="{ item }"
      dots
      :items="certificates"
      :ui="{
        item: 'sm:basis-1/2 md:basis-1/2 lg:basis-1/3',
        dot: 'data-[state=active]:bg-[#28445C]'
      }"
      class="w-full max-w-sm mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
    >
      <NuxtImg :src="item" class="rounded-lg" />
    </UCarousel>
  </UPageSection>
</template>

<style scoped></style>
