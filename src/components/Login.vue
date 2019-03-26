<template>
  <div>
    <h1>Login!</h1>
    <div class="container">
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
export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    onSubmit(username, password) {
      console.info(username, password); // eslint-disable-line
    }
  }
};
</script>

<style scoped>
</style>
