import Vue from 'vue'
import VueRouter from 'vue-router'

import Foot from '@/components/foot'
import Home from '@/components/home'
import Filters from '@/components/filters'
import Cart from '@/components/cart'
import Me from '@/components/me'
import One from "@/components/headone/One"

Vue.use(VueRouter)

const routes = [
  {
    path:"/foot",
    name:"foot",
    component:Foot,
    children:[
      {
        path:"home",
        name:"home",
        component:Home,
      },
      {
        path:"filters",
        name:"filters",
        component:Filters
      },
      {
        path:"cart",
        name:"cart",
        component:Cart
      },
      {
        path:"me",
        name:"me",
        component:Me
      },
     
      {
        path:"/",
        redirect:"home"
      }
    ]
  },
  {
    path: "/one",
    name: "One",
    component: One
  },
  {
    path:"/",
    redirect:"/foot"
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
