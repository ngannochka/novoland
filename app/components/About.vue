<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { data: about } = await useAsyncData('about', () =>
  queryCollection('about')
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
      trigger: '#about',
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    }
  })
    .from('.about .about__title', animation)
    .from('.about .about__description', animation, '>-0.15')
})
</script>

<template>
  <UPageSection
    id="about"
    title="О компании"
    description="Компания «НовоЛэнд», основанная в 2019 году, является надежным партнером в сфере контрактного производства. Мы — единственный производитель на территории Сибири и Дальнего Востока, специализирующийся на выпуске пластиковых ампул и ламинатных туб. Полная автономия и контроль всех этапов производства — наш ключевой принцип: в нашем распоряжении собственные производственные цеха, современная лаборатория и складские помещения. Это позволяет управлять процессом от приемки сырья до отгрузки готовой продукции, обеспечивая стабильное качество и соответствие высоким стандартам. Мы предлагаем клиентам не просто услуги розлива, а комплексное решение, основанное на глубокой технологической экспертизе и безупречном контроле на каждом этапе производства."
    :ui="{
      root: 'bg-[url(/aboutTransparentBgi.svg)] bg-no-repeat bg-right md:bg-none',
      wrapper: 'md:bg-[url(/aboutBgi.svg)] md:bg-no-repeat md:bg-[90%_center]',
      title: 'about__title text-left font-serif text-[#28445C]',
      description: 'about__description text-left font-sans text-[#28445C] md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl',
    }"
    class="about"
  />
</template>

<style scoped></style>
