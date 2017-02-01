/* eslint no-undef: "off" */

import axios from 'axios'

// set auth header on start up if token is present
if (localStorage.getItem('id_token')) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
}

const auth0 = new Auth0({
  domain: 'd3m4.auth0.com',
  clientID: '90tlZAlxZOIqqH5ABgEZ2FkbhGRQ5hMI',
  responseType: 'token',
  callbackUrl: window.location.origin + '/'
})

let login = (username, password) => {
  auth0.login({
    connection: 'Username-Password-Authentication',
    responseType: 'token',
    email: username,
    password: password,
    scope: 'openid email'
  },
  function (err) {
    if (err) alert('something went wrong: ' + err.message)
  }
)
}

let logout = () => {
  localStorage.removeItem('id_token')
  localStorage.removeItem('profile')
}

let checkAuth = () => {
  if (localStorage.getItem('id_token')) return true
  else return false
}

let requireAuth = (to, from, next) => {
  if (!checkAuth()) {
    console.log('auth fail...')

    let path = '/login'
    let result = auth0.parseHash(window.location.hash)

    if (result && result.idToken) {
      // set token in local storage
      localStorage.setItem('id_token', result.idToken)

      // set auth header on start up if token is present
      if (localStorage.getItem('id_token')) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
      }

      // redirect to home page
      path = '/'

      // get the user profile data
      auth0.getProfile(result.idToken, function (err, profile) {
        if (err) {
          // handle error
          alert(err)
        }
        let user = JSON.stringify(profile)
        localStorage.setItem('profile', user)
      })
    }
    next({
      path: path
    })
  } else {
    next()
  }
}

export default {
  checkAuth,
  login,
  logout,
  requireAuth
}
