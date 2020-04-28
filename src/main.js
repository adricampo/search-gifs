import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BestGifs from './components/BestGifs/BestGifs.vue'
import Header from './components/Header/Header.vue'
import SearchForm from './components/SearchForm/SearchForm.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'gif',
    components: [App, BestGifs, Header, SearchForm],
    props: true
  }]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
