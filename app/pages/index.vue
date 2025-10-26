<script setup lang="ts">
useHead({
  title: 'НовоЛэнд',
  meta: [
    { property: 'og:title', content: 'НовоЛэнд' },
    { property: 'og:description', content: '«НовоЛэнд» — это современное производственное предприятие, специализирующееся на полном цикле от идеи и разработки рецептуры до упаковки' },
    { property: 'og:image', content: '/ogImage.png' },
    { property: 'og:url', content: 'https://ngannochka-novoland.nuxt.space/' },
  ]
})

const modal = ref(false)

const toggleCallbackModal = (value: boolean) => {
  modal.value = value
}
</script>

<template>
  <Header @openCallbackModal="toggleCallbackModal" />
  <UMain>
    <Hero @openCallbackModal="toggleCallbackModal" />
    <Services />
    <Catalog @openCallbackModal="toggleCallbackModal" class="section" />
    <Advantages class="section" />
    <About class="section" />
    <Partners class="section" />
    <Accomplishments class="section" />
    <Certificates class="section" />
    <News class="section" />
    <Contacts class="section" />
  </UMain>
  <Footer @openCallbackModal="toggleCallbackModal" />
  <CallbackModal :open="modal" @toggle-callback-modal="toggleCallbackModal"/>
</template>

<style scoped></style>
