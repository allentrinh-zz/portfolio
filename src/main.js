import 'bulma/css/bulma.css';
import 'font-awesome/scss/font-awesome.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;
Vue.use(VueAnalytics, {
  id: 'UA-49186432-1',
  router,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
