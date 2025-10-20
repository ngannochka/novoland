<script setup lang="ts">
// import { gsap } from "gsap";

const { data: header } = await useAsyncData('header', () =>
  queryCollection('header')
    .first()
)

const emit = defineEmits<{
  (e: 'toggleCallbackModal', value: boolean): void
}>()

// todo: ref
const isBurgerOpen = ref<boolean>(false)

const onClick = () => {
  isBurgerOpen.value = false

  emit('toggleCallbackModal', true)
}

// watch(isBurgerOpen, async (value) => {
//   await nextTick()
//
//   if (value) {
//     gsap.fromTo(
//       '.test',
//       { opacity: 0, y: -40 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.9,
//         ease: 'power2.out' //
//       }
//     )
//
//     return
//   }
//
//   gsap.fromTo(
//     '.test',
//     {
//       opacity: 1,
//       y: 0,
//       duration: 0.9,
//       ease: 'power2.out' //
//     },
//     { opacity: 0, y: -40 },
//
//   )
// })

// const test = async (value) => {
//   await nextTick()
//
//   gsap.fromTo(
//     '.test',
//     { opacity: 0, y: -40 },
//     {
//       opacity: 1,
//       y: 0,
//       duration: 0.9,
//       ease: 'power2.out' //
//     }
//   )
// }
</script>

<template>
  <UHeader
    v-model:open="isBurgerOpen"
    :ui="{
      right: 'lg:hidden',
      body: 'flex flex-col items-center gap-10 test',
    }"
  >
    <template #title>
      <NuxtImg
        src="/headerLogo.svg"
        alt="Логотип компании Novoland"
        class="h-8"
      />
    </template>

    <NavMenu />

    <template #body>
      <NavMenu />

      <UButton
        :label="header?.callbackBtn"
        size="xl"
        class="font-sans rounded-full bg-[#2A4A5D] hover:bg-[#223C52] focus:bg-[#223C52] active:bg-[#1D3448]"
        @click="onClick"
      />
    </template>
  </UHeader>
</template>

<style scoped></style>
