import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import qupao from '@/pages/qupao/index'
import count from '@/pages/qupao/count'
import map from '@/pages/qupao/map'
import result from '@/pages/qupao/result'
import message from '@/pages/message/index'
import user from '@/pages/user/index'
import week from '@/pages/user/week'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/qupao',
      name: 'qupao',
      component: qupao
    },
    {
      path: '/qupao/map',
      name: 'map',
      component: map
    },
    {
      path: '/qupao/result',
      name: 'result',
      component: result
    },
    {
      path: '/qupao/count',
      name: 'count',
      component: count
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/user/week',
      name: 'week',
      component: week
    }
  ]
})
