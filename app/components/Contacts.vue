<script setup lang="ts">
// import { onMounted } from 'vue'
// import { load } from '@2gis/mapgl'
//
// onMounted(async () => {
//   const mapgl = await load()
//
//   const map = new mapgl.Map('map-container', {
//     center: [82.908111, 54.936694],
//     zoom: 16,
//     key: '29d16e77-da98-4ee9-911a-7adbaa4c2c94',
//   })
//
//   const marker = new mapgl.Marker(map, {
//     coordinates: [82.908111, 54.936694],
//   })
// })

const contacts = [
  {
    title: 'Адрес',
    description: 'г. Новосибирск, ул.Громова, 14'
  },
  {
    title: 'Адрес электронной почты',
    description: 'info@nvlnd.ru',
    to: 'mailto:info@nvlnd.ru'
  },
  {
    title: 'Телефон',
    description: '8 800 444 79 42',
    to: 'tel:+78004447942'
  },
  {
    title: 'График работы',
    description: 'Пн-пт с 9:00 до 18:00 (перерыв с 12:00 до 13:00)'
  },
]
</script>

<template>
  <client-only>
    <UPageSection
      id="contacts"
      title="Контакты"
      :ui="{
        title: 'text-left text-[#28445C]',
        body: 'xl:flex'
      }"
    >
      <template #body>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2292.067023394204!2d82.90536667716019!3d54.93684235454146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe766ce97176f%3A0xbb9f861e40e0a145!2z0YPQuy4g0JPRgNC-0LzQvtCy0LAsIDE0LCDQndC-0LLQvtGB0LjQsdC40YDRgdC6LCDQndC-0LLQvtGB0LjQsdC40YDRgdC60LDRjyDQvtCx0LsuLCDQoNC-0YHRgdC40Y8sIDYzMDA4OA!5e0!3m2!1sru!2suk!4v1760377548706!5m2!1sru!2suk"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-[400px] xl:h-[500px]"
          ></iframe>
  <!--        <div id="map-container" class="w-full h-[400px] xl:h-[500px]"></div>-->

        <UPageList>
          <UPageCard
            v-for="(contact, index) in contacts"
            :key="index"
            :title="contact.title"
            :description="contact.description"
            :to="contact.to"
            variant="ghost"
            :ui="{
            title: 'text-[#28445C]',
            description: 'text-[#28445C]',
          }"
          />
        </UPageList>
      </template>
    </UPageSection>
  </client-only>
</template>

<style scoped></style>
