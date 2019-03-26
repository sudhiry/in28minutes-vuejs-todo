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
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            <tr v-bind:key="todo.id" v-for="todo in todos">
                <td>{{todo.description}}</td>
                <td>{{todo.targetDate}}</td>
                <td>{{todo.done.toString()}}</td>
                <td><button class="btn btn-success" v-on:click="updateTodo(todo.id)">Update</button></td>
                <td><button class="btn btn-warning" v-on:click="deleteTodo(todo.id)">Delete</button></td>
            </tr>
        </tbody>
      </table>
      <div class="row">
        <button v-on:click="addTodo" class="btn btn-success">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import store from "../store";

export default {
  name: "Todos",
  data() {
    return {
      todos: [
        // {
        //   id: 1,
        //   description: "Learn to Dance",
        //   done: false,
        //   targetDate: moment()
        //     .format("MMM DD, YYYY")
        //     .toUpperCase()
        // },
        // {
        //   id: 2,
        //   description: "Become an Expert at Vue",
        //   done: false,
        //   targetDate: moment()
        //     .format("MMM DD, YYYY")
        //     .toUpperCase()
        // },
        // {
        //   id: 3,
        //   description: "Visit India",
        //   done: false,
        //   targetDate: moment()
        //     .format("MMM DD, YYYY")
        //     .toUpperCase()
        // }
      ],
      message: '',
      username: store.state.username
    };
  },
  methods: {
    refreshTodos() {
      axios.get(`http://in28minutes-restful-web-services.cfapps.io/users/${this.username}/todos`)
      .then(res => {
        this.todos = res.data.map(item => {
          return {
            ...item,
            targetDate: moment(item.targetDate).format("MMM DD, YYYY").toUpperCase()
          };
        });
      });
    },
    addTodo() {
      this.$router.push(`/todo/-1`);
    },
    updateTodo(id) {
      this.$router.push(`/todo/${id}`);
    },
    deleteTodo(id) {
      axios.delete(`http://in28minutes-restful-web-services.cfapps.io/users/${this.username}/todos/${id}`)
        .then(() => {
          this.refreshTodos();
        });
    }
  },
  created() {
    this.refreshTodos();
  }
};
</script>

<style scoped>
</style>
