<script setup>
import InfoBlock from '@/components/InfoBlock.vue'
import CardList from '@/components/CardList.vue'

import { onMounted, ref } from 'vue'
import axios from 'axios'

const orders = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('https://01d2acbee66eeb3d.mokky.dev/orders')
    orders.value = data.pop().items
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <h2 class="text-3xl font-bold mb-8">Мои покупки</h2>

  <CardList v-if="orders.length" :items="orders" isFavorites v-auto-animate />

  <div v-else>
    <InfoBlock
      title="У вас нет заказов"
      description="Оформите хотя бы один заказ, чтобы посмотреть информацию."
      image-url="/emoji-2.png"
    />
  </div>
  <router-link to="/" class="flex flex-col items-center">
    <button
      class="mt-4 transition bg-lime-500 w-1/4 rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700 cursor-pointer"
    >
      Вернуться к ассортименту
    </button>
  </router-link>
</template>
