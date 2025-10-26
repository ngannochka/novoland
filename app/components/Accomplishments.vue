<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { data: accomplishments } = await useAsyncData('accomplishments', () =>
  queryCollection('accomplishments')
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
      trigger: '#accomplishments',
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    }
  })
    .from('.accomplishments', animation)
    // .from('.accomplishment', { ...animation, stagger: 0.3 }, '>-0.15')
})
</script>

<template>
  <UPageSection
    id="accomplishments"
    title="Достижения"
    :ui="{
      title: 'accomplishments__title font-serif text-left text-[#28445C]',
    }"
    class="accomplishments"
  >
    <UPageGrid>
      <UPageCard
        v-for="(accomplishment, index) in accomplishments?.items"
        :key="index"
        v-bind="accomplishment"
        variant="solid"
        :ui="{
          root: 'rounded-2xl bg-[#314158] mb-3',
          leadingIcon: 'text-white',
          description: 'font-sans text-white'
        }"
        class="accomplishment"
      />
    </UPageGrid>
  </UPageSection>
</template>

<style scoped></style>
