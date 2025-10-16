<script setup lang="ts">
defineEmits<{
  (e: 'toggleCallbackModal', value: boolean): void
}>()
</script>

<template>
  <UPageHero
    description="«НовоЛэнд» — это современное производственное предприятие, специализирующееся на полном цикле от идеи и  разработки рецептуры  до упаковки"
    :ui="{
      description: 'text-[#28445C]'
    }"
  >
    <template #title>
      <h1 class="grid grid-cols-2 grid-rows-2 text-[16vw] xl:text-[14vw] text-[#28445C]">
        <span class="col-start-1 row-start-1 justify-self-end">
          НОВО
        </span>
        <span class="col-start-2 row-start-2 justify-self-start">
          ЛЭНД
        </span>
      </h1>
    </template>

    <template #links>
      <UButton size="xl" class="rounded-full bg-[#2A4A5D] hover:bg-[#223C52] focus:bg-[#223C52] active:bg-[#1D3448]" @click="$emit('toggleCallbackModal', true)">
        Заказать обратный звонок
      </UButton>
    </template>
  </UPageHero>
</template>

<style scoped></style>
