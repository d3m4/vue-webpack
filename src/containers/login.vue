<template>
  <div id="login">
    <div class="columns">
      <div class="column is-one-quarter">
        <form @submit.prevent=login>
          <p class="control">
            <input type="email" class="input" placeholder="email" v-model="email">
          </p>
          <p class="control">
            <input type="password" class="input" placeholder="email" v-model="pass">
          </p>
          <p>
            <button class="button" type="submit">
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import auth from '../auth'

  export default {
    name: 'login',
    data () {
      return {
        email: '',
        pass: ''
      }
    },
    methods: {
      login () {
        auth.login(this.email, this.pass)
      }
    }
  }
</script>
