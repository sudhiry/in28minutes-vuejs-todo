<template>
  <div>
    <h1>Welcome!</h1>
    <div class="container">
      Welcome {{ username }}. You can manage your todos
      <router-link to="/todos">here</router-link>
    </div>
    <div class="container">
      Click here to get a customized welcome message
      <button v-on:click="getWelcomeMessageWithParameter" class="btn btn-success">Get Welcome Message</button>
    </div>
    <div className="container">
      <h2>Your Customized Welcome Message</h2>
      <div>{{message}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Welcome",
  data() {
    return {
      message: ""
    };
  },
  computed: {
    username() {
      return this.$route.params.username;
    }
  },
  methods: {
    getWelcomeMessageWithParameter() {
      axios.get("http://in28minutes-restful-web-services.cfapps.io/hello-world-bean")
        .then(res => {
          this.message = res.data.message;
        })
        .catch(err => {
          this.message = err.message;
        });
    }
  }
};
</script>

<style scoped>
</style>
