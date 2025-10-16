<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

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
</script>

<template>
  <UFooter
    :ui="{
      root: 'pb-[12vw] bg-[#28445C] bg-[url(https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/footer-bgi.svg)] bg-no-repeat bg-bottom bg-size-[60vw_auto]',
      left: 'flex flex-col',
      right: 'flex flex-col gap-3',
      center: 'self-center'
    }"
  >
    <template #left>
      <p class="text-white">
        © 2022, ООО "НОВОЛЭНД"
      </p>
      <p class="text-white">
        ОГРН 1195476063507
      </p>
      <p class="text-white">
        Все права защищены
      </p>
    </template>

    <template #default>
      <UNavigationMenu
        :items="items"
        :ui="{
          list: 'flex flex-col xl:flex-row',
          link: 'text-white'
        }"
      />
    </template>

    <template #right>
      <NuxtLink to="/">
        <NuxtImg src="https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/footer-logo.svg" class="h-7" />
      </NuxtLink>

      <NuxtLink to="mailto:info@nvlnd.ru" class="flex items-center gap-1 text-white">
        <UIcon name="ic:outline-email" class="size-5" />
        info@nvlnd.ru
      </NuxtLink>

      <NuxtLink to="tel:+78004447942" class="flex items-center gap-1 text-white ">
        <UIcon name="ic:round-phone" class="size-5" />
        8 800 444 79 42
      </NuxtLink>
    </template>
  </UFooter>
</template>

<style scoped></style>
