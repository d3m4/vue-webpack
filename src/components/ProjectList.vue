<template lang="html">
  <div>
    <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Assigned To</th>
          <th>Priority</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in projects">
          <td>{{item.name}}</td>
          <td>{{item.assignedTo}}</td>
          <td>{{item.priority}}</td>
          <td>
            <i v-if="item.completed" class="fa fa-check"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'projectList',
    computed: mapState([
      'projects'
    ])
  }

</script>

<style lang="css">

</style>
