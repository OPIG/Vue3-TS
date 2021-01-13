import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'homepage'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'about me'
    }
  },
  {
    path: '/pref',
    alias: '/ref',
    component: () => import(/* webpachChunkName: 'practice' */ '@/views/Practices-ref.vue')
  },
  {
    path: '/preactive',
    alias: '/reactive',
    component: () => import(/* webpackChunkName 'preactive' */ '@/views/Practices-reactive.vue')
  },
  {
    path: '/prtorefs',
    alias: '/torefs',
    component: () => import (/* webpackChunkName 'torefs' */ '@/views/Practices-reactive-toRefs.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to: any, from: any, next: any) => {
  console.log(document.title)
  if(to.meta.title) {
     document.title = to.meta.title
  } else {
    document.title = 'Vue3'
  }
  next()
})

export default router
