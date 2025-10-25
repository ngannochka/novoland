<script setup lang="ts">
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
//
// gsap.registerPlugin(ScrollTrigger)
//
// onMounted(() => {
//   const animation = {
//     autoAlpha: 0,
//     duration: 0.6,
//     scale: 0.95,
//     y: 40,
//     ease: 'expo.out',
//   }
//
//   const heroTl = gsap.timeline()
//   heroTl
//     .from('.hero .hero__title--start', animation)
//     .from('.hero .hero__title--end', animation, '>-0.3')
//     .from('.hero .hero__description', animation, '>-0.2')
//     .from('.hero .hero__button', animation, '>')
//
//   const scrollTl = gsap.timeline()
//     .from('.services .services__title', animation, '>')
//     .from('.services .services__description', animation, '>-0.2')
//
//   ScrollTrigger.create({
//     animation: scrollTl,
//     trigger: '#app',
//     start: 'top top',
//     end: 'bottom bottom',
//     scrub: 1, // плавное связывание с прокруткой
//     pin: false,
//
//   })
// })
















// import { gsap } from 'gsap'

// plugins
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
//
// gsap.registerPlugin(ScrollTrigger)
//
// onMounted(() => {
//   const sections = document.querySelectorAll('.section')
//
//   sections.forEach(section => {
//     gsap.fromTo(
//       section,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: section,
//           start: 'top 80%',
//           toggleActions: 'play none none reverse', // можно убрать reverse, если хочешь, чтобы не исчезали при скролле назад
//         },
//       }
//     )
//   })
// })



// import { gsap } from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger"
// ScrollSmoother requires ScrollTrigger
// import { ScrollSmoother } from "gsap/ScrollSmoother"

// gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
//
// onMounted(() => {
//   ScrollSmoother.create({
//     wrapper: "#smooth-wrapper",
//     content: "#smooth-content",
//     smooth: 1,
//     effects: true,
//   })
// })

// const scrollToSection = (id: string) => {
//   const target = document.querySelector(id);
//   if (target && smoother) {
//     smoother.scrollTo(target, true); // true = с плавной анимацией
//   }
// };
//
// ScrollSmoother.create({
//   smooth: 1,
//   effects: true,
// })

const modal = ref(false)

const toggleCallbackModal = (value: boolean) => {
  modal.value = value
}

// const { data: authors } = await useAsyncData('authors', () => {
//   return queryCollection('authors')
//     .order('name', 'DESC')
//     .all()
// })
</script>

<template>
  <Header @openCallbackModal="toggleCallbackModal" />
  <UMain>
    <Hero @openCallbackModal="toggleCallbackModal" />
    <Services />

    <Catalog @toggle-callback-modal="toggleCallbackModal" class="section" />

    <Advantages class="section" />
    <About class="section" />
    <Partners class="section" />
    <Accomplishments class="section" />
    <Certificates class="section" />
    <News class="section" />
    <Contacts class="section" />
  </UMain>

  <Footer class="section"/>
  <CallbackModal :open="modal" @toggle-callback-modal="toggleCallbackModal"/>

</template>

<style scoped></style>
