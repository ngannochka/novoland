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
  <UNavigationMenu
    :items="items"
    :ui="{
      list: 'flex flex-col items-center lg:flex-row',
      linkLabel: 'font-sans text-[#28445C]'
    }"
  />
</template>

<style scoped></style>
