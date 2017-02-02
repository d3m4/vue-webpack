<template lang="html">
  <button class="button" type="button" @click="addProject()">
    Add New Project
  </button>
</template>

<script>
  export default{
    name: 'addProject',
    methods: {
      addProject () {
        this.$store.dispatch('ADD_NEW_PROJECT')
      }
    }
  }
</script>
