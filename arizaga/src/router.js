import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Boring from './views/Boring.vue'
import Users from './views/Users'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/boring',
      name: 'boring',
      component: Boring
    },
    {
      path: '/users/:id',
      name: 'users',
      component: Users
    },
    {
      path: '/add',
      name: 'add',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Add.vue')
    }
  ]
})
