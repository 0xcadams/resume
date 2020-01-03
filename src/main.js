// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '../resume/wpt.png';
import '../resume/asr.png';
import '../resume/iq.png';
import '../resume/lieuu.png';
import '../resume/infor.png';
import '../resume/luminosity.png';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
