// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import navbar from './components/Navbar'
import router from './router'
import store from './store'

import auth from './auth'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

// Response interceptor
axios.interceptors.response.use((response) => {
  return response
}, function (error) {
  // Do something with response errors
  if (error.response.status === 401) {
    console.log('unauthorized, logging out ...')
    auth.logout()
    router.replace('/login')
  }
  return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
  template: `
    <div>
      <navbar />
      <section class="section">
        <div class="container is-fluid">
          <router-view></router-view>
        </div>
      </section>
    </div>
  `,
  router,
  store,
  components: { navbar }
}).$mount('#app')
