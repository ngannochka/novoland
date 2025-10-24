<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { data: news } = await useAsyncData('news', () =>
  queryCollection('news')
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
      trigger: '#news',
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    }
  })
    .from('.news .news__title', animation)
    .from('.news .news__carousel', animation, '>-0.15')
})
</script>

<template>
  <UPageSection
    id="news"
    title="Новости"
    :ui="{
      title: 'news__title font-serif text-left text-[#28445C]',
    }"
    class="news"
  >
    <UCarousel
      v-slot="{ item }"
      dots
      :items="news"
      :ui="{
        item: 'sm:basis-1/2 md:basis-1/2 lg:basis-1/3',
        dot: 'data-[state=active]:bg-[#28445C]'
      }"
      class="news__carousel w-full max-w-sm mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
    >
      <UBlogPost
        variant="ghost"
        v-bind="item"
        :ui="{
          date: 'fonts-sans text-[#28445C] opacity-80',
          title: 'fonts-sans text-[#28445C]',
          description: 'fonts-sans text-[#28445C]'
        }"
      />
    </UCarousel>
  </UPageSection>
</template>

<style scoped></style>
