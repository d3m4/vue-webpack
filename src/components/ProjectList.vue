<template lang="html">
  <div class="">
    <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Assigned To</th>
          <th>Priority</th>
          <th>Completed</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in projects">
         <td><span :class="{'completed': item.completed}">{{item.name}}</span></td>
          <td><span :class="{'completed': item.completed}">{{item.assignedTo}}</span></td>
          <td><span :class="{'completed': item.completed}">{{item.priority}}</span></td>
          <td><i v-if="item.completed" class="fa fa-check"></i></td>
          <td><complete-toggle :item="item" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import completeToggle from './CompleteToggle'

  export default {
    name: 'projectList',
    components: {
      completeToggle
    },
    computed: {
      projects () {
        return this.$store.state.projects
      }
    }
  }

</script>

<style lang="css">
  .completed {
    text-decoration: line-through;
  }
</style>

<!--
  import {mapState} from 'vuex'

  computed: {
    mapState(['proejcts'])
  }

  ===

  computed: {
    projects () {
      return this.$store.state.projects
    }
  }

-->
