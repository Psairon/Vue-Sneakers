<script setup>
import { computed, provide, ref, watch } from 'vue'

import HeaderItems from './components/HeaderItems.vue'
import DrawerItems from './components/DrawerItems.vue'

const cart = ref([])
const drawerOpen = ref(false)

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))
const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100))

const openDrawer = () => {
  drawerOpen.value = true
}
const closeDrawer = () => {
  drawerOpen.value = false
}

const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true }
)

provide('cart', { cart, closeDrawer, openDrawer, addToCart, removeFromCart })
</script>

<template>
  <DrawerItems
    v-if="drawerOpen"
    @close-Drawer="closeDrawer"
    :total-price="totalPrice"
    :vat-price="vatPrice"
  />

  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14 h-fit">
    <HeaderItems :total-price="totalPrice" @open-drawer="openDrawer" />

    <div class="p-10">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
