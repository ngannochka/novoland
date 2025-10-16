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
      title: 'text-left text-[#28445C]',
      body: 'flex justify-center'
    }"
  >
    <!--    <template #body>-->
    <UCarousel
      v-slot="{ item }"
      dots
      :items="certificates"
      :ui="{
        item: 'lg:basis-1/3'
      }"
    >
      <!--      class="w-full max-w-xs mx-auto"-->
      <NuxtImg :src="item" class="rounded-lg" />
    </UCarousel>
    <!--    </template>-->
  </UPageSection>
</template>

<style scoped></style>
