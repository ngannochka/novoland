<script setup lang="ts">
const posts = [
  {
    title: '1Новая автоматическая линия — быстрее и точнее!',
    description: 'Запущена новая линия для фасовка в стики с возможность розлива гелевых,желеобразных составов. ',
    image: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/n.png',
    date: '30 декабря 2024'
  },
{
    title: '2Новая автоматическая линия — быстрее и точнее!',
    description: 'Запущена новая линия для фасовка в стики с возможность розлива гелевых,желеобразных составов. ',
    image: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/n.png',
    date: '30 декабря 2024'
  },
{
    title: '3Новая автоматическая линия — быстрее и точнее!',
    description: 'Запущена новая линия для фасовка в стики с возможность розлива гелевых,желеобразных составов. ',
    image: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/n.png',
    date: '30 декабря 2024'
  },
{
    title: '4Новая автоматическая линия — быстрее и точнее!',
    description: 'Запущена новая линия для фасовка в стики с возможность розлива гелевых,желеобразных составов. ',
    image: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/n.png',
    date: '30 декабря 2024'
  },
{
    title: '5Новая автоматическая линия — быстрее и точнее!',
    description: 'Запущена новая линия для фасовка в стики с возможность розлива гелевых,желеобразных составов. ',
    image: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/n.png',
    date: '30 декабря 2024'
  },
{
    title: '6Новая автоматическая линия — быстрее и точнее!',
    description: 'Запущена новая линия для фасовка в стики с возможность розлива гелевых,желеобразных составов. ',
    image: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/n.png',
    date: '30 декабря 2024'
  },
]
</script>

<template>
  <UPageSection
    id="news"
    title="Новости"
    :ui="{
      title: 'font-serif text-left text-[#28445C]',
    }"
  >
    <UCarousel
      v-slot="{ item }"
      dots
      :items="posts"
      :ui="{
        item: 'sm:basis-1/2 md:basis-1/2 lg:basis-1/3',
        dot: 'data-[state=active]:bg-[#28445C]'
      }"
      class="w-full max-w-sm mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
    >
      <UBlogPost
        variant="ghost"
        v-bind="item"
        :ui="{
          date: 'fonts-sans text-[#28445C] opacity-80',
          title: 'fonts-sans text-[#28445C]',
          description: 'fonts-sans text-[#28445C]'
        }"
      />
    </UCarousel>
  </UPageSection>
</template>

<style scoped></style>
