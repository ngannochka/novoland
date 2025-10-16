<script setup lang="ts">
defineEmits<{
  (e: 'toggleCallbackModal', value: boolean): void
}>()

const products = [
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-1.jpg',
    title: 'Cтрип-монодозы',
    volume: '2-3 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, прозрачный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-2.png',
    title: 'Плоско-выпуклая ампула Ф 1/1',
    volume: '2 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, возможен собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-3.png',
    title: 'Плоско-выпуклая ампула Ф 2/1',
    volume: '1 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, возможен собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-4.png',
    title: 'Плоско-выпуклая ампула Ф 3/1',
    volume: '1-1,5 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, возможен собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-5.png',
    title: 'Плоско-выпуклая ампула Ф 4/1',
    volume: '2-3 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, возможен собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-6.png',
    title: 'Плоско-выпуклая ампула Ф 5/1',
    volume: '9-10 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, возможен собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-7.png',
    title: 'Двояковыпуклая ампула Ф 6/2',
    volume: '40 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, возможен собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-8.png',
    title: 'Двояковыпуклая ампула Ф 7/2',
    volume: '18 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, возможен собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-9.png',
    title: 'Двояковыпуклая ампула Ф 8/2',
    volume: '25 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, возможен собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-10.png',
    title: 'Двояковыпуклая ампула Ф 9/2',
    volume: '50 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, возможен собственный'
  },
]
</script>

<template>
  <UPageSection
    id="catalog"
    title="Каталог ампул"
    :ui="{
      title: 'text-left text-[#28445C]',
    }"
  >
    <UPageGrid>
      <UBlogPost
        v-for="(product, index) in products"
        :key="index"
        :title="product.title"
        :image="product.src"
        variant="ghost"
        :ui="{
          description: 'flex flex-col'
        }"
      >
        <template #description>
          <dl class="mb-5 grid grid-cols-2">
            <dt>
              Объем:
            </dt>
            <dd class="text-right">
              {{ product.volume }}
            </dd>

            <dt>
              Материал:
            </dt>
            <dd class="text-right">
              {{ product.material }}
            </dd>

            <dt>
              Цвет пленки:
            </dt>
            <dd class="text-right">
              {{ product.filmColor }}
            </dd>
          </dl>

          <UButton class="self-end bg-[#28445C] hover:bg-[#223C52] focus:bg-[#223C52] active:bg-[#1D3448]" @click="$emit('toggleCallbackModal', true)">
            Заказать звонок
          </UButton>
        </template>

        footer
      </UBlogPost>

    </UPageGrid>
  </UPageSection>
</template>

<style scoped></style>
