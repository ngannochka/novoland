<script setup lang="ts">
defineEmits<{
  (e: 'toggleCallbackModal', value: boolean): void
}>()

const { data: hero } = await useAsyncData('hero', () =>
  queryCollection('hero')
    .first()
)
</script>

<template>
  <UPageHero
    :description="hero?.description"
    :ui="{
      title: 'font-serif text-[20vw] text-[#28445C] uppercase',
      description: 'font-sans text-[#28445C]'
    }"
  >
    <template #title>
      <h1 class="flex flex-col">
        <span class="self-start">
          ново
        </span>
        <span class="self-end">
          лэнд
        </span>
      </h1>
    </template>

    <template #links>
      <UButton
        :label="hero?.callbackBtn"
        size="xl"
        class="font-sans rounded-full bg-[#2A4A5D] hover:bg-[#223C52] focus:bg-[#223C52] active:bg-[#1D3448]"
        @click="$emit('toggleCallbackModal', true)"
      />
    </template>
  </UPageHero>
</template>

<style scoped></style>
