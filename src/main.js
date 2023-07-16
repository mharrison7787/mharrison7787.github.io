import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import VueRouter from 'vue-router';
import VueYouTubeEmbed from 'vue-youtube-embed';
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueYouTubeEmbed);

new Vue({
  VueRouter,
  VueYouTubeEmbed,
  render: h => h(App),
}).$mount('#app')
