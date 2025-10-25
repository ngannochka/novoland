<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { vMaska } from 'maska/vue'
import * as z from 'zod'
import { Bot } from 'grammy'

const { open } = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleCallbackModal', value: boolean): void
}>()

const agreement = ref<boolean>(false)

const schema = z.object({
  name: z.string('*обязательное поле').min(2, 'Имя не валидно.'),
  phone: z.string('*обязательное поле').min(2, 'Номер телефона не валиден.'),
  email: z.email('*обязательное поле')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  name: undefined,
  phone: undefined,
  email: undefined
})

const toast = useToast()

const bot = new Bot('7570834719:AAFpduL2h3L0NuI6OsF69QTmtBQveKAnirc')

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  await bot.api.sendMessage('-1002981267402', `Имя: ${event.data.name}\nТелефон: ${event.data.phone}\nПочта: ${event.data.email}`)

  toast.add({
    title: 'Заявка получена!',
    description: 'Мы свяжемся с Вами в ближайшее время.',
    ui: {
      title: 'font-serif text-[#28445C]',
      description: 'font-sans text-[#28445C]',
    },
    progress: {
      ui: {
        indicator: 'bg-[#28445C]'
      }
    }
  })

  emit('toggleCallbackModal', false)
}
</script>

<template>
  <UModal
    :open="open"
    @update:open="$emit('toggleCallbackModal', false)"
    title="Заявка на обратный звонок"
    description="Пожалуйста, заполните форму и мы постараемся связаться с вами как можно скорее."
    :ui="{
      body: '',
      title: 'font-serif text-[#28445C]',
      description: 'font-sans text-[#212B23]',
    }"
  >
    <template #body>
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4 bg-[url(/modal/bgi.svg)] bg-no-repeat bg-top-right bg-size-[110px_auto]"
        @submit="onSubmit"
      >
        <UFormField
          label="Ваше имя"
          name="name"
          :ui="{
            label: 'font-sans',
            error: 'font-sans'
          }"
        >
          <UInput
            v-model="state.name"
            placeholder="Иван Иванов"
            color="neutral"
            :ui="{
              base: 'w-full rounded-full font-sans placeholder:font-sans'
            }"
          />
        </UFormField>

        <UFormField
          label="Номер телефона"
          name="phone"
          :ui="{
            label: 'font-sans',
            error: 'font-sans'
          }"
        >
          <UInput
            v-model="state.phone"
            placeholder="+7 000 000 00 00"
            color="neutral"
            v-maska="'+7 ### ### ## ##'"
            :ui="{
              base: 'w-full rounded-full font-sans placeholder:font-sans'
            }"
          />
        </UFormField>

        <UFormField
          label="Email"
          name="email"
          :ui="{
            label: 'font-sans',
            error: 'font-sans'
          }"
        >
          <UInput
            v-model="state.email"
            placeholder="ivanivanov@gmail.com"
            color="neutral"
            :ui="{
              base: 'rounded-full font-sans placeholder:font-sans'
            }"
          />
        </UFormField>

        <UCheckbox
          v-model="agreement"
          label="Я согласен(а) на обработку персональных данных"
          :ui="{
            indicator: 'bg-[#2A4A5D]'
          }"
        />

        <UButton :disabled="!state.name || !state.phone || !state.email || !agreement" type="submit" class="rounded-full font-sans disabled:bg-[#6E726E] bg-[#2A4A5D] hover:bg-[#223C52] focus:bg-[#223C52] active:bg-[#1D3448]">
          Отправить
        </UButton>
      </UForm>
    </template>
  </UModal>
</template>

<style scoped></style>
