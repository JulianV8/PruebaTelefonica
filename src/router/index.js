import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'
import Home from '../views/Home.vue'
import HojaDeVida from '../views/HojaDeVida.vue'
import Cuadratica from '../views/Cuadratica.vue'
import fibonacci from '../views/fibonacci.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hv',
    name: 'Hoja de vida',
    component: HojaDeVida
  },
  {
    path: '/Cuadratica',
    name: 'Cuadratica',
    component: Cuadratica
  },
  {
    path: '/fibonacci',
    name: 'fibonacci',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: fibonacci
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
