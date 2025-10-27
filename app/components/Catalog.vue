<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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

const volumesSelectItems = computed<SelectItem[]>(() => {
  const volumes = catalog.value?.filters.volumes ?? []

  return volumes.map(volume => ({
    label: `${volume} мл`,
    value: volume
  }))
})
const materialsSelectItems = ref(catalog.value?.filters.materials ?? [])
const productsSelectItems = ref(catalog.value?.filters.products ?? [])

const volumesSelectValue = ref<number[]>([])
const materialsSelectValue = ref<string[]>([])
const productsSelectValue = ref<string[]>([])

const filteredCatalog = computed(() => {
  return catalog.value?.items.filter(item => {
    const matchesVolume =
      volumesSelectValue.value.length === 0 ||
      item.volumes.some(volume =>
        volumesSelectValue.value.includes(volume)
      )

    const matchesMaterial =
      materialsSelectValue.value.length === 0 ||
      item.materials.some(material =>
        materialsSelectValue.value.includes(material)
      )

    const matchesProduct =
      productsSelectValue.value.length === 0 ||
      productsSelectValue.value.some(selectedTitle =>
        item.title.toLowerCase().includes(selectedTitle.toLowerCase().trim())
      )

    return matchesMaterial && matchesVolume && matchesProduct
  })
})

const page = ref(1)
const itemsPerPage = 6

const paginatedCatalog = computed(() => {
  if (!filteredCatalog.value) return []

  const start = (page.value - 1) * itemsPerPage
  const end = start + itemsPerPage

  return filteredCatalog.value.slice(start, end)
})

watch(
  [materialsSelectValue, volumesSelectValue, productsSelectValue],
  () => {
    page.value = 1
  }
)

// onMounted(() => {
//   const animation = {
//     autoAlpha: 0,
//     duration: 0.3,
//     scale: 0.95,
//     y: 40,
//     ease: 'expo.out',
//   }
//
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: '#catalog',
//       start: 'top 80%', // когда верх блока доходит до 80% экрана
//       end: 'bottom 60%',
//       toggleActions: 'play none none reverse', // можно поиграться с этим
//       // scrub: 1, // включи, если хочешь, чтобы шло плавно вместе со скроллом
//     }
//   })
//     .from('.catalog', animation)
// })
</script>

<template>
  <UPageSection
    id="catalog"
    :title="catalog?.title"
    :ui="{
      title: 'font-serif text-left text-[#28445C]',
      body: 'flex flex-col'
    }"
    class="catalog"
  >
    <div>
      <p class="mb-3 font-sans text-[#28445C]">
        Фильтры:
      </p>
      <div class="flex gap-2">
        <USelect
          v-model="volumesSelectValue"
          multiple
          placeholder="Объем"
          :items="volumesSelectItems"
          class="w-30"
          :ui="{
            base: 'font-sans text-primary',
          }"
        />

        <USelect
          v-model="materialsSelectValue"
          multiple
          placeholder="Материал"
          :items="materialsSelectItems"
          class="w-30"
          :ui="{
            base: 'font-sans text-primary',
          }"
        />

        <USelect
          v-model="productsSelectValue"
          multiple
          placeholder="Продукт"
          :items="productsSelectItems"
          class="w-30"
          :ui="{
            base: 'font-sans text-primary',
          }"
        />
      </div>
    </div>

    <UPageGrid v-if="filteredCatalog?.length">
      <template
        v-for="({ image, title, volumes, materials, filmColor }, index) in paginatedCatalog"
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
              {{ volumes.length === 1
              ? `${volumes[0]}`
              : `${volumes[0]}–${volumes[volumes.length - 1]}` }} мл
            </dd>

            <dt>
              Материал:
            </dt>
            <dd class="text-right">
              {{ materials.join(', ') }}
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
          v-if="index < paginatedCatalog.length - 1"
          :ui="{
            root: 'opacity-60 sm:hidden',
            border: 'border-[rgba(40,68,92,0.3)]'
          }"
        />
      </template>
    </UPageGrid>

    <div
      v-else
      class="self-center py-16 flex items-center gap-2 text-[#28445C]/70 lg:justify-self-center"
    >
      <UIcon name="lucide:search-x" class="size-5" />
      <p class="font-sans">
        Ничего не найдено
      </p>
    </div>

    <UPagination
      v-if="filteredCatalog?.length"
      v-model:page="page"
      :items-per-page="itemsPerPage"
      :total="filteredCatalog?.length"
      show-edges
      :sibling-count="1"
      class="self-center lg:justify-self-center"
    />
  </UPageSection>
</template>

<style scoped></style>
