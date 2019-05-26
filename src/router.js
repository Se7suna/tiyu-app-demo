import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages'
import sport from '@/pages/sport'
import count from '@/pages/sport/count'
import map from '@/pages/sport/map'
import result from '@/pages/sport/result'
import message from '@/pages/message'
import user from '@/pages/user'
import rank from '@/pages/user/rank'
import week from '@/pages/user/week'
import record from '@/pages/user/record'
import data from '@/pages/user/data'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/sport',
      name: 'sport',
      component: sport
    },
    {
      path: '/sport/map',
      name: 'map',
      component: map
    },
    {
      path: '/sport/result',
      name: 'result',
      component: result
    },
    {
      path: '/sport/count',
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
      path: '/user/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/user/week',
      name: 'week',
      component: week
    },
    {
      path: '/user/record',
      name: 'record',
      component: record
    },
    {
      path: '/user/data',
      name: 'data',
      component: data
    }
  ]
})
