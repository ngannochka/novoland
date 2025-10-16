<script setup lang="ts">
const certificates = [
  '/cert-1.jpg',
  '/cert-2.jpg',
  '/cert-3.jpg',
  '/cert-4.jpg',
  '/cert-5.jpg',
  '/cert-6.jpg',
  '/cert-7.jpg',
  '/cert-8.jpg',
  '/cert-9.jpg',
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
