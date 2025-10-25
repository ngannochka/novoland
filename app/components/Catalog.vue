<script setup lang="ts">
const { data: catalog } = await useAsyncData('catalog', () =>
  queryCollection('catalog')
    .first()
)

const emit = defineEmits<{
  (e: 'openCallbackModal', value: boolean): void
}>()

const handleCallbackButtonClick = () => {
  emit('openCallbackModal', true)
}

// select
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref(['Backlog', 'Todo'])
</script>

<template>
  <UPageSection
    id="catalog"
    :title="catalog?.title"
    :ui="{
      title: 'font-serif text-left text-[#28445C]',
    }"
  >
    <div class="flex gap-2">
      <USelect v-model="value" multiple :items="items" class="w-48" />

<!--      <USelect v-model="value" multiple :items="items" class="w-48" />-->

<!--      <USelect v-model="value" multiple :items="items" class="w-48" />-->
    </div>

    <UPageGrid>
      <template
        v-for="({ image, title, volume, material, filmColor }, index) in catalog?.items"
        :key="index"
      >
        <UCard
          variant="solid"
          :ui="{
            root: 'bg-transparent',
            header: '',
            body: '',
            footer: 'flex justify-end'
          }"
        >
          <template #header>
            <NuxtImg
              :src="image"
              :alt="title"
              class="w-full"
            />
          </template>

          <h3 class="font-sans text-base text-pretty font-semibold text-[#2A4A5D] mb-4">
            {{ title }}
          </h3>

          <dl class="grid grid-cols-[auto_1fr] gap-y-2 font-sans text-[15px] text-pretty text-black">
            <dt>
              Объем:
            </dt>
            <dd class="text-right">
              {{ volume }}
            </dd>

            <dt>
              Материал:
            </dt>
            <dd class="text-right">
              {{ material }}
            </dd>

            <dt>
              Цвет пленки:
            </dt>
            <dd class="text-right">
              {{ filmColor }}
            </dd>
          </dl>

          <template #footer>
            <UButton
              class="font-sans rounded-full bg-[#2A4A5D] hover:bg-[#223C52] focus:bg-[#223C52] active:bg-[#1D3448]"
              @click="handleCallbackButtonClick"
            >
              Заказать звонок
            </UButton>
          </template>
        </UCard>

        <USeparator
          :ui="{
            root: 'opacity-60 sm:hidden',
            border: 'border-[rgba(40,68,92,0.3)]'
          }"
        />
      </template>
    </UPageGrid>
  </UPageSection>
</template>

<style scoped></style>
