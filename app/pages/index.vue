<script setup lang="ts">
const modal = ref(false)

const toggleCallbackModal = (value: boolean) => {
  modal.value = value
}
</script>

<template>
  <Header @toggle-callback-modal="toggleCallbackModal" />
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
  <CallbackModal :open="modal" @toggle-callback-modal="toggleCallbackModal"/>
</template>

<style scoped></style>
