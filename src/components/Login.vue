<template>
  <div>
    <h1>Login!</h1>
    <div class="container">
      <div v-if="invalidLogin" class="alert alert-warning">{{errorMessage}}</div>
      <form v-on:submit.prevent="onSubmit(username, password);">
        <fieldset class="form-group">
          <input
            class="form-control form-control-lg"
            type="text"
            v-model="username"
            placeholder="Username"
          >
        </fieldset>
        <fieldset class="form-group">
          <input
            class="form-control form-control-lg"
            type="password"
            v-model="password"
            placeholder="Password"
          >
        </fieldset>
        <button class="btn btn-lg btn-primary pull-xs-right">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: "Login",
  data() {
    return {
      username: "in28minutes",
      password: "",
      invalidLogin: false,
      errorMessage: "Invalid Credentials"
    };
  },
  methods: {
    onSubmit(username, password) {
      if(username === "in28minutes" && password === "dummy") {
        store.login({
          username,
          isAuthenticated: true
        });
        this.$router.push(`/welcome/${username}`)
      } else {
        this.invalidLogin = true;
      }
    }
  }
};
</script>

<style scoped>
</style>
