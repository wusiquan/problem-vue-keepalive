import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main/Main'

Vue.use(Router)

export default new Router({
  // TODO: 这里有一个隐形的规则，path和name一致，具体再看Menu组件
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
      children: [
        {
          path: 'a-page',
          name: 'a-page',
          meta: {
            title: 'a页面',
            keepAlive: true
          },
          component: () => import(/* webpackChunkName: "mypage" */ '@/views/a-page/a-page')
        },
        {
          path: 'a-child-page',
          name: 'a-child-page',
          meta: {
            title: 'a子页面'
          },
          component: () => import(/* webpackChunkName: "mypage" */ '@/views/a-child-page/a-child-page')
        },
        {
          path: 'a-parent-page',
          name: 'a-parent-page',
          meta: {
            title: 'a父页面',
            keepAlive: true
          },
          component: () => import(/* webpackChunkName: "mypage" */ '@/views/a-parent-page/a-parent-page')
        },
        {
          path: 'b-page',
          name: 'b-page',
          meta: {
            title: 'b页面'
          },
          component: () => import(/* webpackChunkName: "mypage" */ '@/views/b-page/b-page')
        },
      ]
    }
  ]
})
