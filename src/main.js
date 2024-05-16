import './assets/main.css'

import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import FavoritesView from './pages/FavoritesView.vue'
import ProfileView from './pages/ProfileView.vue'

const app = createApp(App)

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/favorites', name: 'Favorites', component: FavoritesView },
  { path: '/profile', name: 'Profile', component: ProfileView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
