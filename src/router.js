import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from './containers/login'
import home from './containers/Home'
import dashboard from './containers/Dashboard'
import projects from './containers/Projects'
import auth from './auth'

// App routes
const routes = [
  { path: '/', component: home, beforeEnter: auth.requireAuth },
  { path: '/login', component: login },
  { path: '/dashboard', component: dashboard, beforeEnter: auth.requireAuth },
  { path: '/projects', component: projects, beforeEnter: auth.requireAuth }
]

// export router instance

export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
