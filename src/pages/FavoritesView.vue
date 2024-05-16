<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

import CardList from '../components/CardList.vue'
import InfoBlock from '@/components/InfoBlock.vue'

const favorites = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://01d2acbee66eeb3d.mokky.dev/favorites?_relations=items'
    )
    favorites.value = data.map((obj) => obj.item)

    console.log(favorites)
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold mb-8">Мои закладки</h2>

    <CardList v-if="favorites.length" :items="favorites" isFavorites v-auto-animate />
    <div v-else сlass="flex h-full items-center">
      <InfoBlock
        title="У вас еще нет закладок"
        description="Добавьте свои любимые кроссовки в избранное."
        image-url="/emoji-1.png"
      />
    </div>
    <router-link to="/" class="flex flex-col items-center">
      <button
        class="mt-4 transition bg-lime-500 w-1/4 rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700 cursor-pointer"
      >
        Вернуться к ассортименту
      </button>
    </router-link>
  </div>
</template>
