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
    filmColor: 'белый, прозрачный, белый, прозрачный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-2.png',
    title: 'Плоско-выпуклая ампула Ф 1/1',
    volume: '2 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-3.png',
    title: 'Плоско-выпуклая ампула Ф 2/1',
    volume: '1 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-4.png',
    title: 'Плоско-выпуклая ампула Ф 3/1',
    volume: '1-1,5 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-5.png',
    title: 'Плоско-выпуклая ампула Ф 4/1',
    volume: '2-3 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-6.png',
    title: 'Плоско-выпуклая ампула Ф 5/1',
    volume: '9-10 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-7.png',
    title: 'Двояковыпуклая ампула Ф 6/2',
    volume: '40 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-8.png',
    title: 'Двояковыпуклая ампула Ф 7/2',
    volume: '18 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-9.png',
    title: 'Двояковыпуклая ампула Ф 8/2',
    volume: '25 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, собственный'
  },
  {
    src: 'https://s3.twcstorage.ru/f2f0a35f-e48e7736-24c2-4274-88c1-0854b97bbed7/catalog-10.png',
    title: 'Двояковыпуклая ампула Ф 9/2',
    volume: '50 мл',
    material: 'ПВХ, ПЭ, EVOH',
    filmColor: 'белый, коричневый, собственный'
  },
]
</script>

<template>
  <UPageSection
    id="catalog"
    title="Каталог ампул"
    :ui="{
      title: 'font-serif text-left text-[#28445C]',
    }"
  >
    <UPageGrid>
      <template
        v-for="(product, index) in products"
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
              :src="product.src"
              :alt="product.title"
              class="w-full"
            />
          </template>

          <h3 class="font-sans text-base text-pretty font-semibold text-[#2A4A5D] mb-4">
            {{ product.title }}
          </h3>

          <dl class="grid grid-cols-[auto_1fr] gap-y-2 font-sans text-[15px] text-pretty text-black">
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

          <template #footer>
            <UButton class="font-sans rounded-full bg-[#2A4A5D] hover:bg-[#223C52] focus:bg-[#223C52] active:bg-[#1D3448]">
              Заказать звонок
            </UButton>
          </template>
        </UCard>

        <USeparator
          :ui="{
            root: 'opacity-60',
            border: 'border-[rgba(40,68,92,0.3)]'
          }"
        />
      </template>
    </UPageGrid>
  </UPageSection>
</template>

<style scoped></style>
