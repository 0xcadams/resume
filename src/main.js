// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// eslint-disable-next-line
import wpt from '../resume/wpt.png';
// eslint-disable-next-line
import asr from '../resume/asr.png';
// eslint-disable-next-line
import iqzone from '../resume/iqzone.png';
// eslint-disable-next-line
import lieuu from '../resume/lieuu.png';
// eslint-disable-next-line
import infor from '../resume/infor.png';

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
