import Vue from 'vue'
import VueRouter from 'vue-router'
import Foot from '@/components/foot'
import Home from '@/components/home'
import Filters from '@/components/filters'
import Cart from '@/components/cart'
import Me from '@/components/me'
//引入沙发
import Shafa from '../components/luyou/shafa'
import Chuang from '../components/luyou/chuang'
import Chaji from '../components/luyou/chaji'
import Yideng from '../components/luyou/yideng'
import Dengju from '../components/luyou/dengju'
import Guijia from '../components/luyou/guijia'
import Jiaju from '../components/luyou/jiaju'
import Jiafang from '../components/luyou/jiafang'
import Fengge from '../components/luyou/fengge'
import Kongjian from '../components/luyou/kongjian'
//引入msg
import Msg from '../components/msg/msg'

Vue.use(VueRouter)

const routes = [
  {
    path:"/msg",
    name:"msg",
    component:Msg
  },
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
        component:Filters,
        children:[
          {
            path:"/",
            redirect:"/shafa"
          },
          {
            path:"/shafa",
            name:"shafa",
            component:Shafa
          },
          {
            path:"/chuang",
            name:"chuang",
            component:Chuang
          },
          {
            path:"/chaji",
            name:"chaji",
            component:Chaji
          },
          {
            path:"/yideng",
            name:"yideng",
            component:Yideng
          },
          {
            path:"/dengju",
            name:"dengju",
            component:Dengju
          },
          {
            path:"/guijia",
            name:"guijia",
            component:Guijia
          },
          {
            path:"/jiaju",
            name:"jiaju",
            component:Jiaju
          },
          {
            path:"/jiafang",
            name:"jiafang",
            component:Jiafang
          },
          {
            path:"/fengge",
            name:"fengge",
            component:Fengge
          },
          {
            path:"/kongjian",
            name:"kongjian",
            component:Kongjian
          },
          // {
          //   path:"/",
          //   redirect:"/shafa"
          // }

        ]
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
      }
    ]
  },

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
