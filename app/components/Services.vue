<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const animation = {
    autoAlpha: 0,
    duration: 0.6,
    scale: 0.95,
    y: 40,
    ease: 'expo.out',
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#services',
      start: 'top 80%', // когда верх блока доходит до 80% экрана
      end: 'bottom 60%',
      toggleActions: 'play none none reverse', // можно поиграться с этим
      // scrub: 1, // включи, если хочешь, чтобы шло плавно вместе со скроллом
    }
  })
    .from('.services .services__title', animation)
    .from('.services .services__description', animation, '>-0.2')

})

const services = [
  {
    title: 'Розлив & фасовка',
    description: 'Производим жидкие и полужидкие БАДы, косметику и wellness-продукты под вашим брендом. Контрактный розлив на современном оборудовании.',
    features: [
      'Розлив в пластиковые ампулы и монодозы',
      'Фасовка в стики, тубы, флаконы, банки',
      'Контроль объёма и герметичности',
    ],
    button: {
      label: 'Заказать розлив'
    },
  },
  {
    title: 'Этикетирование & маркировка',
    description: 'Поможем с оформлением и идентификацией вашей продукции. От нанесения этикеток до обязательной маркировки и сертификации.',
    features: [
      'Нанесение бренд-этикеток любой формы и размера',
      'Маркировка DataMatrix / Честный Знак',
      'Печать QR-кодов и серийных номеров'
    ],
    button: {
      label: 'Заказать маркировку'
    },
  },
  {
    title: 'Упаковка',
    description:
      'Финальный этап, где продукт получает завершённый вид. Бережно упаковываем и готовим к отгрузке или продаже.',
    features: [
      'Индивидуальная и групповая упаковка',
      'Термоусадочная, картонная и flow-pack упаковка',
      'Формирование транспортных коробов и паллет'
    ],
    button: {
      label: 'Заказать упаковку'
    },
  },
]

// const plans = ref([
//   {
//     title: 'Розлив & фасовка',
//     description:
//       'Производим жидкие и полужидкие БАДы, косметику и wellness-продукты под вашим брендом. Контрактный розлив на современном оборудовании.',
//     features: [
//       'Розлив в пластиковые ампулы и монодозы',
//       'Фасовка в стики, тубы, флаконы, банки',
//       'Контроль объёма и герметичности'
//     ],
//     button: {
//       label: 'Заказать розлив'
//     },
//     ui: {
//       root: 'rounded-2xl bg-[url(/service-1.svg)] bg-cover bg-center bg-no-repeat bg-black/50 bg-blend-multiply',
//       title: 'font-sans text-white',
//       description: 'font-sans text-white/90 mb-6',
//       featureTitle: 'font-sans text-white',
//       featureIcon: 'text-white',
//       button: 'rounded-full bg-white font-sans text-[#28445C]'
//     }
//   },
//   {
//     title: 'Этикетирование & маркировка',
//     description:
//       'Поможем с оформлением и идентификацией вашей продукции. От нанесения этикеток до обязательной маркировки и сертификации.',
//     features: [
//       'Нанесение бренд-этикеток любой формы и размера',
//       'Маркировка DataMatrix / Честный Знак',
//       'Печать QR-кодов и серийных номеров'
//     ],
//     button: {
//       label: 'Заказать маркировку'
//     },
//     ui: {
//       root: 'rounded-2xl bg-[url(/service-2.svg)] bg-cover bg-center bg-no-repeat bg-black/60 bg-blend-multiply',
//       title: 'font-sans text-white',
//       description: 'font-sans text-white/90 mb-6',
//       featureTitle: 'font-sans text-white',
//       featureIcon: 'text-white',
//       button: 'rounded-full bg-white font-sans text-[#28445C]'
//     }
//   },
//   {
//     title: 'Упаковка',
//     description:
//       'Финальный этап, где продукт получает завершённый вид. Бережно упаковываем и готовим к отгрузке или продаже.',
//     features: [
//       'Индивидуальная и групповая упаковка',
//       'Термоусадочная, картонная и flow-pack упаковка',
//       'Формирование транспортных коробов и паллет'
//     ],
//     button: {
//       label: 'Заказать упаковку'
//     },
//     ui: {
//       root: 'rounded-2xl bg-[url(/service-3.svg)] bg-cover bg-center bg-no-repeat bg-black/60 bg-blend-multiply',
//       title: 'font-sans text-white',
//       description: 'font-sans text-white/90 mb-6',
//       featureTitle: 'font-sans text-white',
//       featureIcon: 'text-white',
//       button: 'rounded-full bg-white font-sans text-[#28445C]'
//     }
//   }
// ])
</script>

<template>
  <UPageSection
    id="services"
    title="Каталог услуг"
    description="Разрабатываем рецептуры и составы, изготавливаем и разливаем жидкие, полужидкие, геле- и желеобразные продукты. Фасуем в пластиковые ампулы, стрипы, монодозы, стики, тубы, флаконы и банки. Предоставляем услуги по упаковке готовой продукции с возможностью полного цикла производства — от идеи до готового продукта."
    :ui="{
      title: 'services__title text-left font-serif text-[#28445C]',
      description: 'services__description text-left font-sans text-[#28445C]',
    }"
    class="services"
  >
    <UPricingPlans>
      <UPricingPlan
        v-for="(service, index) in services"
        :key="index"
        :title="service.title"
        :description="service.description"
        :features="service.features"
        :button="service.button"
        :ui="{
          root: `rounded-2xl bg-[url(/service-${index + 1}.svg)] bg-cover bg-center bg-no-repeat ${index + 1 === 1 ? 'bg-black/50' : 'bg-black/60'} bg-blend-multiply`,
          title: 'font-sans text-white',
          description: 'font-sans text-white/90',
          featureTitle: 'font-sans text-white',
          featureIcon: 'text-white',
          button: 'rounded-full bg-white font-sans text-[#28445C]',
        }"
      />
    </UPricingPlans>
  </UPageSection>
</template>

<style scoped></style>
