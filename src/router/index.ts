import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '@/views/AboutView.vue'
import ContactViewVue from '@/views/ContactView.vue';
import ServicesViewVue from '@/views/ServicesView.vue';
import BlogViewVue from '@/views/BlogView.vue';
import PostViewVue from '@/views/PostView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/blog',
      name: 'blog',
      component: BlogViewVue
    },
    {
      path: '/blog/:id',
      name: 'post',
      component: PostViewVue
    },
    {
      path: '/home',
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
    },
    {
      path: '/',
      redirect: to => { return {name: 'blog'} }
    }
  ]
})

export default router
