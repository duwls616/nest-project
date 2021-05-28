import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/mrPath';
import axios from 'axios'

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

window.Kakao.init('5d3c28c356903cf178b0ff3f1554d59b');

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
