import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/section',
    name: 'Section',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Section.vue')
  }, 
  {
    path: '/nosotros',
    name: 'Nosotros',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue')
  },
  {
    path: '/pedido',
    name: 'Pedido',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedido.vue')
  }, 
  {
    path: '/productos',
    name: 'Productos',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Productos.vue')
  },
  {
    path: '/contactanos',
    name: 'Contactanos',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Contactanos.vue')
  },
  {
    path: '/resenas',
    name: 'Resenas',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Resenas.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
