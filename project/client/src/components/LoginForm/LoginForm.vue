<template id="LoginForm">
  <div class="login-form">
    <input type="text" v-model="login" placeholder="username">
    <input type="password" v-model="pass" placeholder="password">
    <div class="btn btn-ok" v-on:click="logMeInPlease">
      Go!
    </div>
  </div>
</template>

<script src='./LoginForm.js'></script>
<style src="./LoginForm.styl" lang="stylus"></style>
