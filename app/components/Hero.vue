<script setup lang="ts">
import { gsap } from 'gsap'

const emit = defineEmits<{
  (e: 'openCallbackModal', value: true): void
}>()

const { data: hero } = await useAsyncData('hero', () =>
  queryCollection('hero')
    .first()
)

const handleCallbackButtonClick = () => {
  emit('openCallbackModal', true)
}

onMounted(() => {
  const animation = {
    autoAlpha: 0,
    duration: 0.6,
    scale: 0.95,
    y: 40,
    ease: 'expo.out',
  }

  gsap.timeline()
    .from('.hero .hero__title--start', animation)
    .from('.hero .hero__title--end', animation, '>-0.3')
    .from('.hero .hero__description', animation, '>-0.2')
    .from('.hero .hero__button', animation, '>')
})
</script>

<template>
  <UPageHero
    :description="hero?.description"
    :ui="{
      description: 'hero__description font-sans text-[#28445C]'
    }"
    class="hero"
  >
    <template #title>
      <h1 class="flex flex-col font-serif text-[clamp(90px,calc(36.49px+12.16vw),270px)] uppercase text-[#28445C]">
        <span class="hero__title--start self-start">
          ново
        </span>
        <span class="hero__title--end self-end">
          лэнд
        </span>
      </h1>
    </template>

    <template #links>
      <UButton
        :label="hero?.callbackButton"
        size="xl"
        class="hero__button font-sans rounded-full bg-[#2A4A5D] hover:bg-[#223C52] focus:bg-[#223C52] active:bg-[#1D3448]"
        @click="handleCallbackButtonClick"
      />
    </template>
  </UPageHero>
</template>

<style scoped></style>
