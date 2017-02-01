<template lang="html">
  <div id="home">
    Home content will go here

  <button type="button" class="button" @click="testSecured()">
    Test API - Secured
  </button>

  </div>
</template>

<script>
  import axios from 'axios'

  export default{
    name: 'home',
    methods: {
      testSecured: function () {
        console.log('sending secured test call to api ...')
        axios.get('/secured/ping').then((response) => {
          console.log(response)
        }, (response) => {
          console.log(response)
        })
      }
    }
  }
</script>
