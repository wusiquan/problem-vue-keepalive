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
          path: 'phase-manage',
          name: 'phase_manage',
          component: () => import(/* webpackChunkName: "phase-manage" */ '@/views/phase-manage/index')
        }
      ]
    }
  ]
})
