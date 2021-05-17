import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('views/Main.vue')
const Home = () => import('views/home/Home.vue')
const Article = () => import('views/Article.vue')
const Hero = () => import('views/hero/Hero.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/main' },
  {
    path: '/main',
    component: Main,
    children: [
      { path: '/', redirect: '/home' },
      { path: '/home', name: 'Home', component: Home },
      { path: '/articles/:id', name: 'Article', component: Article, props: true }
    ]
  },
  { path: '/heroes/:id', name: 'Hero', component: Hero, props: true }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
