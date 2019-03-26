<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div>
        <a href="https://www.in28minutes.com" class="navbar-brand">in28minutes</a>
      </div>

      <ul class="navbar-nav">
        <li>
          <!-- <a href="/welcome/in28minutes" class="nav-link">Home</a> -->
          <router-link to="/welcome/in28minutes" class="nav-link">Home</router-link>
        </li>
        <li>
          <!-- <a v-if="authState.isAuthenticated" href="/todos" class="nav-link">Todos</a> -->
          <router-link v-if="authState.isAuthenticated" to="/todos" class="nav-link">Todos</router-link>
        </li>
      </ul>

      <ul class="navbar-nav navbar-collapse justify-content-end">
        <li>
          <!-- <a v-if="!authState.isAuthenticated" href="/login" class="nav-link">Login</a> -->
          <router-link v-if="!authState.isAuthenticated" to="/login" class="nav-link">Login</router-link>
        </li>
        <li>
          <!-- <a v-if="authState.isAuthenticated" href="/logout" class="nav-link" >Logout</a> -->
          <router-link v-if="authState.isAuthenticated" to="/logout" class="nav-link">Logout</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import store from '../store';

export default {
  name: "Menu",
  data() {
    return {
      authState: store.state
    };
  }
};
</script>

