<template>
  <div>
    <h1>Todo</h1>
    <div class="container">
      <form @submit="validateAndSubmit">
        <div v-if="errors.length">
            <div v-bind:key="index" v-for="(error, index) in errors"> {{error}} </div>
        </div>
        <fieldset class="form-group">
          <label>Description</label>
          <input type="text" class="form-control" v-model="todo.description">
        </fieldset>
        <fieldset class="form-group">
          <label>Target Date</label>
          <input type="date" class="form-control" v-model="todo.targetDate">
        </fieldset>
        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import moment from "moment";
import axios from "axios";
import store from "../store";

export default {
  name: "Todo",
  data() {
    return {
      todo: {
        description: "",
        targetDate: null
      },
      username: store.state.username,
      errors: []
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    getTodo(id) {
      axios
        .get(`http://in28minutes-restful-web-services.cfapps.io/users/${this.username}/todos/${id}`)
        .then(res => {
            this.todo = {
              ...res.data,
              targetDate: moment(res.data.targetDate).format("YYYY-MM-DD")
            };
        });
    },
    validateAndSubmit(e) {
        e.preventDefault();
        this.errors = [];
        if(!this.todo.description) {
            this.errors.push("Enter valid values");
        } else if(this.todo.description.length < 5) {
            this.errors.push("Enter atleast 5 characters in Description");
        }
        if(!moment(this.todo.targetDate).isValid()) {
            this.errors.push("Enter valid Target Date");
        }

        if(this.errors.length === 0) {
            if (this.id === -1) {
                axios.post(`http://in28minutes-restful-web-services.cfapps.io/users/${this.username}/todos`, {  
                    description: this.todo.description,
                    targetDate: this.todo.targetDate
                }).then(() => {
                    this.$router.push('/todos');
                });
            } else {
                axios.put(`http://in28minutes-restful-web-services.cfapps.io/users/${this.username}/todos/${this.id}`, {
                    id: this.id,
                    description: this.todo.description,
                    targetDate: this.todo.targetDate
                }).then(() => {
                    this.$router.push('/todos');
                });
            }
        }
    },
  },
  created() {
    this.getTodo(this.id);
  }
};
</script>

<style scoped>
</style>
