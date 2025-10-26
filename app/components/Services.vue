<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { data: services } = await useAsyncData('services', () =>
  queryCollection('services')
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
      trigger: '#services',
      start: 'top 80%', // когда верх блока доходит до 80% экрана
      end: 'bottom 60%',
      toggleActions: 'play none none reverse', // можно поиграться с этим
      // scrub: 1, // включи, если хочешь, чтобы шло плавно вместе со скроллом
    }
  })
    .from('.services', animation)
    // .from('.services .services__description', animation, '>-0.15')
    // .from('.services .services__card', { ...animation, stagger: 0.3 }, '>')
})
</script>

<template>
  <UPageSection
    id="services"
    title="Каталог услуг"
    :description="services?.description"
    :ui="{
      title: 'services__title text-left font-serif text-[#28445C]',
      description: 'services__description text-left font-sans text-[#28445C]',
    }"
    class="services"
  >
    <UPricingPlans>
      <UPricingPlan
        v-for="(service, index) in services?.cards"
        :key="index"
        :title="service.title"
        :description="service.description"
        :features="service.features"
        :button="{
          label: service.callbackButton
        }"
        :ui="{
          root: `rounded-2xl bg-cover bg-center bg-no-repeat bg-black/50 bg-blend-multiply`,
          title: 'font-sans text-white',
          description: 'font-sans text-white/90',
          featureTitle: 'font-sans text-white',
          featureIcon: 'text-white',
          button: 'rounded-full bg-white font-sans text-[#28445C] hover:bg-[#D9D9D9] focus:bg-[#F2F2F2] active:bg-[#F2F2F2]',
        }"
        class="services__card"
        :style="{
          backgroundImage: `url(${service.backgroundImage})`
        }"
      />
    </UPricingPlans>
  </UPageSection>
</template>

<style scoped></style>
