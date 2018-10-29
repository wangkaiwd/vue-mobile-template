import { getComponent } from './lazyComponent'
export default [
  { path: '/', exact: true, name: 'home', component: getComponent('home') },
  { path: '/mine', name: 'mine', component: getComponent('mine') }
]