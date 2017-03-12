// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import mainStore from './store'
import App from './App'
import router from './router'
import io from 'socket.io-client'

import axios from 'axios'
// import authStore from './authStore'

let api = axios.create({
  baseURL: 'https://shuffle-app-1.herokuapp.com/api/',
  timeout: 2000,
  withCredentials: true
})



let socket = io('https://shuffle-app-1.herokuapp.com/')

socket.on('CONNECTED', function (data) {
  console.log(data)
})


Vue.use(Vuetify)
Vue.use(Vuex)

let store = new Vuex.Store(mainStore)
/* eslint-disable no-new */


new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
