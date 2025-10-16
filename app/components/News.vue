<script setup lang="ts">
const posts = ref([
  {
    title: 'Новая автоматическая линия — быстрее и точнее!',
    description: 'Запущена новая линия для фасовка в стики с возможность розлива гелевых,желеобразных составов. ',
    image: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/n.png',
    date: '30 декабря 2024'
  },

])
</script>

<template>
  <UPageSection
    id="news"
    title="Новости"
    :ui="{
      title: 'text-left text-[#28445C]',
    }"
  >
    <UBlogPosts>
      <UBlogPost
        v-for="(post, index) in posts"
        :key="index"
        v-bind="post"
        variant="ghost"
        :ui="{
          date: 'text-[#212B23] opacity-80',
          title: 'text-[#212B23]',
          description: 'text-[#28445C]'
        }"
      />
    </UBlogPosts>
  </UPageSection>
</template>

<style scoped></style>
