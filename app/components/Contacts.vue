<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { data: contacts } = await useAsyncData('contacts', () =>
  queryCollection('contacts')
    .first()
)

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
      trigger: '#contacts',
      start: 'top 80%', // когда верх блока доходит до 80% экрана
      end: 'bottom 60%',
      toggleActions: 'play none none reverse', // можно поиграться с этим
      // scrub: 1, // включи, если хочешь, чтобы шло плавно вместе со скроллом
    }
  })
    .from('.contacts .contacts__title', animation)
    // .from('.contacts .services__description', animation, '>-0.2')

})
</script>

<template>
    <UPageSection
      id="contacts"
      :title="contacts?.title"
      :ui="{
        title: 'contacts__title text-left font-serif text-[#28445C]',
        body: 'flex flex-col gap-8 md:flex-row ',
      }"
      class="contacts"
    >
      <template #body>
        <client-only>
          <iframe
            id="map_705864409"
            frameborder="0"
            width="100%"
            src="https://makemap.2gis.ru/widget?data=eJxtUm1vmzAQ_i_ex6D2CK9G6ofMaDQTYiFqtbKpH7LgUiqCmXGS0Sj_fXdm-9ZIkdE9L_eczxemdC21rDOpDtLoVo4s-XlhZhokS9gXuTNHLZnDBq0GqY3FL2yvOqUR_wTL2H1ZIm5a05ECvnrlyYgJ8qg88KyA3CvN6u4OKbUc97odTKt6JG7uV4vz71PZ12IBeU6iX1ChuBZw1mPjK_G4LtCgQqxNt83M2zaFcCF_L00tOJmjzl0X4haqlL59yF_K0RD3ATWZIO-PuFgDyG_Jz4cKT6t9HLHnZ6wjnmWQv5VjISI6DSce5uDZN6h60rtQ3W_fppQyn60vDn3k1CsqTyLdvlpPTTXqu4Bq3VgvO0PT0B_7rSDHPHw-R5oTZz6idsaeyMe1WU2WUoZ2WqH2Yb4XTn1T4tt7JN1G8POmsZf-vu5r-YclLvz_XR3WzMueaJX_Nr1RbW-Qv1f4INp-Z-xDiJc3HGLXdZ3Av-FeGHL_GfVtzZIYltdnhx12w0aN7bzUC-t2hiUz1_eiIIr8KIwjh3UEz24hDzwf3CAMQoyn1AHDxWiKj0N13fdXKbsftmr0UV7_AlLczMs"
            sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
            class="rounded-lg h-[400px] md:h-[500px]"
          ></iframe>
        </client-only>

        <UPageList class="gap-5">
          <UPageCard
            v-for="({ title, description, to }, index) in contacts?.cards"
            :key="index"
            :title
            :description
            :to
            variant="naked"
            :ui="{
              title: 'font-serif text-[#28445C]',
              description: 'font-sans text-[#28445C]',
            }"
          />
        </UPageList>
      </template>
    </UPageSection>
</template>

<style scoped></style>
