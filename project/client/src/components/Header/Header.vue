<template id="header">
  <header>
    <span class="heading">Pomodoro Timer</span>
    <div v-if="user">
      <span class="heading">Hello, {{ user }}</span>
      <a v-on:click="logMeOutPlease" class="btn btn-bordered">Log Out</a>
    </div>
    <div v-else>
      <router-link to="/login" class="btn btn-bordered">Log In</router-link>
      <router-link to="/signup" class="btn btn-bordered">Sign Up</router-link>
    </div>
  </header>
</template>

<script src="./Header.js"></script>
<style src="./Header.styl" lang="stylus"></style>
