import Vue from 'vue'
import App from './App.vue'

import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './static/css/reset.css'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  render: h => h(App)
}).$mount('#app')
