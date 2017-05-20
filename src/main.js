// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import config from '@/config';

import Vue from 'vue';
import VueConfig from 'vue-config';
import App from './App';
import router from './router';

Vue.use(VueConfig, config);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
