import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from './containers/Home'
import dashboard from './containers/Dashboard'
import projects from './containers/Projects'

// App routes
const routes = [
  {path: '/', component: home},
  {path: '/dashboard', component: dashboard},
  {path: '/projects', component: projects}
]

// export router instance

export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
