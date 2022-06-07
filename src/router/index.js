import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import('@/view/index.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
