import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'
import router from './router/index'
Vue.use(VueCompositionAPI)
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  pinia,
  router,
  render: (h) => h(App)
}).$mount('#app')
