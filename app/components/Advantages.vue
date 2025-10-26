<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { data: advantages } = await useAsyncData('advantages', () =>
  queryCollection('advantages')
    .first()
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
      trigger: '#advantages',
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    }
  })
    .from('.advantages', animation)
    // .from('.advantage', { ...animation, stagger: 0.3 }, '>-0.15')
})
</script>

<template>
  <UPageSection
    id="advantages"
    title="Наши преимущества"
    :ui="{
      title: 'advantages__title font-serif text-left text-[#28445C]',
    }"
    class="advantages"
  >
    <UPageGrid>
      <UPageCard
        v-for="(advantage, index) in advantages?.items"
        :key="index"
        v-bind="advantage"
        variant="solid"
        :ui="{
          root: 'rounded-2xl bg-[#314158]',
          leadingIcon: 'text-white',
          title: 'font-sans',
          description: 'font-sans text-white',
        }"
        class="advantage"
      />
    </UPageGrid>
  </UPageSection>
</template>

<style scoped></style>
