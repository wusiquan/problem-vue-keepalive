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
          meta: {
            title: 'a页面'
          },
          component: () => import(/* webpackChunkName: "mypage" */ '@/views/a-page/index')
        },
        {
          path: 'a-child-page',
          name: 'a_child_page',
          meta: {
            title: 'a子页面'
          },
          component: () => import(/* webpackChunkName: "mypage" */ '@/views/a-child-page/index')
        },
        {
          path: 'a-parent-page',
          name: 'a_parent_page',
          meta: {
            title: 'a父页面'
          },
          component: () => import(/* webpackChunkName: "mypage" */ '@/views/a-parent-page/index')
        },
        {
          path: 'b-page',
          name: 'b_page',
          meta: {
            title: 'b页面'
          },
          component: () => import(/* webpackChunkName: "mypage" */ '@/views/b-page/index')
        },
      ]
    }
  ]
})
