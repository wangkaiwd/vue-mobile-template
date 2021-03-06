import {
  getComponent
} from './lazyComponent'
export default [{
    path: '/',
    exact: true,
    name: 'home',
    component: getComponent('home'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: getComponent('mine'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/404',
    name: '404',
    component: getComponent('notFound')
  },
  {
    path: '*',
    redirect: '/404'
  } // 404页面
]
