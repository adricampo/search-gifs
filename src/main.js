import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BestGifs from './components/BestGifs/BestGifs.vue'
import Header from './components/Header/Header.vue'
import SearchForm from './components/SearchForm/SearchForm.vue'
import Results from './components/Results/Results.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    components: [App, BestGifs, Header, SearchForm, Results],
    props: true
  }]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
