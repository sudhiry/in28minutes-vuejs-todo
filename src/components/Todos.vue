<template>
  <div>
    <h1>My Todo's</h1>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Target Date</th>
            <th>is Completed?</th>
          </tr>
        </thead>
        <tbody>
            <tr v-bind:key="todo.id" v-for="todo in todos">
                <td>{{todo.description}}</td>
                <td>{{todo.targetDate}}</td>
                <td>{{todo.done.toString()}}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import moment from "moment";


export default {
  name: "Todos",
  data() {
    return {
      todos: [
        {
          id: 1,
          description: "Learn to Dance",
          done: false,
          targetDate: moment()
            .format("MMM DD, YYYY")
            .toUpperCase()
        },
        {
          id: 2,
          description: "Become an Expert at Vue",
          done: false,
          targetDate: moment()
            .format("MMM DD, YYYY")
            .toUpperCase()
        },
        {
          id: 3,
          description: "Visit India",
          done: false,
          targetDate: moment()
            .format("MMM DD, YYYY")
            .toUpperCase()
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
