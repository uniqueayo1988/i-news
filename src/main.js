import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import { URL } from './utils/utils'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.http.options.root = URL

Vue.filter('snippet', function (value) {
  return value.slice(0, 120) + '...'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
