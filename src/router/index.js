import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
      children: [
        {
          path: 'a-page',
          name: 'a_page',
          component: () => import(/* webpackChunkName: "a-page" */ '@/views/a-page/index')
        }
      ]
    }
  ]
})
