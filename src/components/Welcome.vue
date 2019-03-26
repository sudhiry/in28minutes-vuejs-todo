<template>
  <div>
    <h1>Welcome!</h1>
    <div class="container">
      Welcome {{ username }}. You can manage your todos <a href="/todos">here</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  computed: {
    username() {
      return this.$route.params.username;
    }
  }
};
</script>

<style scoped>
</style>
