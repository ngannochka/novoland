<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const emit = defineEmits<{
  (e: 'toggleCallbackModal', value: boolean): void
}>()

const items: NavigationMenuItem[] = [
  {
    label: 'Каталог услуг',
    to: '#services',
  },
  {
    label: 'Каталог ампул',
    to: '#catalog',
  },
  {
    label: 'О компании',
    to: '#about',
  },
  {
    label: 'Партнеры',
    to: '#partners',
  },
  {
    label: 'Достижения',
    to: '#accomplishments',
  },
  {
    label: 'Сертификаты',
    to: '#certificates',
  },
  {
    label: 'Новости',
    to: '#news',
  },
  {
    label: 'Контакты',
    to: '#contacts',
  },
]

const isBurgerOpen = ref<boolean>(false)

const onClick = () => {
  isBurgerOpen.value = false

  emit('toggleCallbackModal', true)
}
</script>

<template>
  <UHeader
    v-model:open="isBurgerOpen"
    :ui="{
      right: 'lg:hidden',
      body: 'flex flex-col items-center gap-10',
    }"
  >
    <template #title>
      <NuxtImg
        src="https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/logo.svg"
        alt="Логотип компании Novoland"
        class="h-8"
      />
    </template>

    <UNavigationMenu
      :items="items"
      :ui="{
        link: 'text-[#28445C]'
      }"
    />

    <template #body>
      <UNavigationMenu
        :items="items"
        :ui="{
          list: 'flex flex-col items-center',
          link: 'text-[#28445C]'
        }"
      />

      <UButton class="bg-[#2A4A5D] active:bg-[#1D3448]" @click="onClick">
        Заказать обратный звонок
      </UButton>
    </template>
  </UHeader>
</template>

<style scoped></style>
