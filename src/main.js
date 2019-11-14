import Vue from 'vue'
import Vuikit from 'vuikit'
// import VuikitIcons from '@vuikit/icons'
import '@vuikit/theme'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import createPersistedState from 'vuex-persistedstate'
import VueFlashMessage from 'vue-flash-message'
import VueCarousel from 'vue-carousel'
// import VueCarousel from '@chenfengyuan/vue-carousel'
import BackToTop from 'vue-backtotop'
import VueAgile from 'vue-agile'

require('vue-flash-message/dist/vue-flash-message.min.css')
require('vue-agile/dist/VueAgile.css')

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuikit)
// Vue.use(VuikitIcons)
Vue.use(VueFlashMessage)
Vue.use(VueCarousel)
Vue.use(BackToTop)
Vue.use(VueAgile)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
