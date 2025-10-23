<script setup lang="ts">
const plans = ref([
  {
    title: 'Розлив & фасовка',
    description:
      'Производим жидкие и полужидкие БАДы, косметику и wellness-продукты под вашим брендом. Контрактный розлив на современном оборудовании.',
    // price: 'от $249',
    features: [
      'Розлив в пластиковые ампулы и монодозы',
      'Фасовка в стики, тубы, флаконы, банки',
      'Контроль объёма и герметичности'
    ],
    button: {
      label: 'Заказать розлив'
    },
    ui: {
      root: 'rounded-2xl bg-[url(/service-1.svg)] bg-cover bg-center bg-no-repeat bg-black/50 bg-blend-multiply',
      title: 'font-sans text-white',
      description: 'font-sans text-white/90 mb-6',
      featureTitle: 'font-sans text-white',
      featureIcon: 'text-white',
      button: 'rounded-full bg-white font-sans text-[#28445C]'
    }
  },
  {
    title: 'Этикетирование & маркировка',
    description:
      'Поможем с оформлением и идентификацией вашей продукции. От нанесения этикеток до обязательной маркировки и сертификации.',
    // price: 'от $499',
    features: [
      'Нанесение бренд-этикеток любой формы и размера',
      'Маркировка DataMatrix / Честный Знак',
      'Печать QR-кодов и серийных номеров'
    ],
    button: {
      label: 'Заказать маркировку'
    },
    ui: {
      root: 'rounded-2xl bg-[url(/service-2.svg)] bg-cover bg-center bg-no-repeat bg-black/60 bg-blend-multiply',
      title: 'font-sans text-white',
      description: 'font-sans text-white/90 mb-6',
      featureTitle: 'font-sans text-white',
      featureIcon: 'text-white',
      button: 'rounded-full bg-white font-sans text-[#28445C]'
    }
  },
  {
    title: 'Упаковка',
    description:
      'Финальный этап, где продукт получает завершённый вид. Бережно упаковываем и готовим к отгрузке или продаже.',
    // price: 'от $999',
    features: [
      'Индивидуальная и групповая упаковка',
      'Термоусадочная, картонная и flow-pack упаковка',
      'Формирование транспортных коробов и паллет'
    ],
    button: {
      label: 'Заказать упаковку'
    },
    ui: {
      root: 'rounded-2xl bg-[url(/service-3.svg)] bg-cover bg-center bg-no-repeat bg-black/60 bg-blend-multiply',
      title: 'font-sans text-white',
      description: 'font-sans text-white/90 mb-6',
      featureTitle: 'font-sans text-white',
      featureIcon: 'text-white',
      button: 'rounded-full bg-white font-sans text-[#28445C]'
    }
  }
])
</script>

<template>
  <UPageSection
    id="services"
    title="Каталог услуг"
    description="Разрабатываем рецептуры и составы, изготавливаем и разливаем жидкие, полужидкие, геле- и желеобразные продукты. Фасуем в пластиковые ампулы, стрипы, монодозы, стики, тубы, флаконы и банки. Предоставляем услуги по упаковке готовой продукции с возможностью полного цикла производства — от идеи до готового продукта."
    :ui="{
      title: 'text-left font-serif text-[#28445C]',
      description: 'text-left font-sans text-[#28445C]',
    }"
  >
    <UPricingPlans :plans="plans" />
  </UPageSection>
</template>

<style scoped></style>
