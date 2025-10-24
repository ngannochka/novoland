<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { data: certificates } = await useAsyncData('certificates', () =>
  queryCollection('certificates')
    .all()
)

onMounted(() => {
  const animation = {
    autoAlpha: 0,
    duration: 0.6,
    scale: 0.95,
    y: 40,
    ease: 'expo.out',
  }

  gsap.timeline({
    scrollTrigger: {
      trigger: '#certificates',
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    }
  })
    .from('.certificates .certificates__title', animation)
    .from('.certificates .certificates__carousel', animation, '>-0.2')
})
</script>

<template>
  <UPageSection
    id="certificates"
    title="Сертификаты"
    :ui="{
      title: 'certificates__title font-serif text-left text-[#28445C]'
    }"
    class="certificates"
  >
    <UCarousel
      v-slot="{ item }"
      dots
      :items="certificates"
      :ui="{
        item: 'sm:basis-1/2 md:basis-1/2 lg:basis-1/3',
        dot: 'data-[state=active]:bg-[#28445C]'
      }"
      class="certificates__carousel w-full max-w-sm mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
    >
      <NuxtImg :src="item.src" class="rounded-lg" />
    </UCarousel>
  </UPageSection>
</template>

<style scoped></style>
