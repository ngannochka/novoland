<script setup lang="ts">
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger"
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother"

gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

onMounted(() => {
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true,
  })
})

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
<!--  {{ authors }}-->

  <Header @toggle-callback-modal="toggleCallbackModal" />
  <div id="smooth-wrapper">
    <div id="smooth-content">
  <UMain>
    <Hero @toggle-callback-modal="toggleCallbackModal" />
    <Services />
    <Catalog @toggle-callback-modal="toggleCallbackModal" />
    <Advantages />
    <About />
    <Partners />
    <Accomplishments />
    <Certificates />
    <News />
    <Contacts />
  </UMain>
  <Footer />
    </div>
  </div>
  <CallbackModal :open="modal" @toggle-callback-modal="toggleCallbackModal"/>
</template>

<style scoped></style>
