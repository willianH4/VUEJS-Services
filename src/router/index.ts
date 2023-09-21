import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '@/views/AboutView.vue'
import ContactViewVue from '@/views/ContactView.vue';
import ServicesViewVue from '@/views/ServicesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactViewVue
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesViewVue
    }
  ]
})

export default router
