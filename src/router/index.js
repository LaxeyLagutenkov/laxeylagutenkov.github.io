import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'basic'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'auth'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: {layout: 'auth'},
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {layout: 'basic'},
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: {layout: 'basic'},
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: {layout: 'basic'},
    component: () => import('../views/History.vue')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: {layout: 'basic'},
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'basic'},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/record',
    name: 'Record',
    meta: {layout: 'basic'},
    component: () => import('../views/Record.vue')
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
