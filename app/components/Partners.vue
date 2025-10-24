<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { data: partners } = await useAsyncData('partners', () =>
  queryCollection('partners')
    .all()
)

onMounted(() => {
  const animation = {
    autoAlpha: 0,
    duration: 0.3,
    scale: 0.95,
    y: 40,
    ease: 'expo.out',
  }

  gsap.timeline({
    scrollTrigger: {
      trigger: '#partners',
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    }
  })
    .from('.partners .partners__title', animation)
    .from('.partners .partners__marquee', animation, '>-0.15')
})
</script>

<template>
  <UPageSection
    id="partners"
    title="Наши партнеры"
    :ui="{
      title: 'partners__title font-serif text-left text-[#28445C]',
    }"
    class="partners"
  >
    <UMarquee class="partners__marquee">
      <NuxtLink v-for="(partner, index) in partners" :key="index" :to="partner.to" target="_blank">
        <NuxtImg :src="partner.src" />
      </NuxtLink>
    </UMarquee>
  </UPageSection>
</template>

<style scoped></style>
