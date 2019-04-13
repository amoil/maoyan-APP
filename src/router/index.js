import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/pages/start/Start'
import Home from '@/pages/home/Home'
import Cinema from "@/pages/cinema/Cinema"
import My from "@/pages/my/My"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/cinema",
      name: "cinema",
      component: Cinema
    },
    {
      path: "/my",
      name: "my",
      component: My
    }
  ]
})
