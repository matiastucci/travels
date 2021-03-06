// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VModal from 'vue-js-modal'
import config from '@/services/config'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: config.map.key,
    libraries: 'places'
  }
})

Vue.use(VModal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
