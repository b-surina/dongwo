import Vue from 'vue'
import VueRouter from 'vue-router'
import Foot from '@/components/foot'
import Home from '@/components/home'
import Filters from '@/components/filters'
import Cart from '@/components/cart'
import Me from '@/components/me'

import OrderCom from '../pages/OrderCom'

import TabCom from '../pages/TabCom'

import AddressCom from '../pages/address'

import MessageCom from '../pages/message'

import SafeCom from '../pages/safe'



Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/foot"
  },
  {
    path:"/foot",
    name:"foot",
    component:Foot,
    children:[
      {
        path:"/",
        redirect:"/home"
      },
      {
        path:"/home",
        name:"home",
        component:Home
      },
      {
        path:"/filters",
        name:"filters",
        component:Filters
      },
      {
        path:"/cart",
        name:"cart",
        component:Cart
      },
      {
        path:"/me",
        name:"me",
        component:Me
      },
      {path:'/me/order',name:'order',component:OrderCom,meta:{title:"全部订单"}},
      {path:'/me/address',component:AddressCom},
      {path:'/me/message',component:MessageCom},
      {path:'/me/safe',component:SafeCom}

    ]
  },
  {path:'/me/:typeid',component:TabCom},


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) 

export default router
