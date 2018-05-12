<template id="LoginForm">
  <div class="login-form">
    <div class="input-container">
      <input type="text" v-model="login">
      <input type="password" v-model="pass">
      <div class="btn btn-success" v-on:click="logMeInPlease">
        Go!
      </div>
    </div>
  </div>
</template>

<script src='./LoginForm.js'></script>
<style src="./LoginForm.styl" lang="stylus"></style>
