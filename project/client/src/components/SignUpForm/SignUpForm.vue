<template id="SignUpForm">
  <div class="login-form">
    <input type="text" v-model="login" placeholder="username">
    <input type="password" v-model="pass" placeholder="password">
    <input type="password" v-model="confirmPass" placeholder="confirm password">
    <div class="btn btn-ok" v-on:click="signMeUpPlease">
      Go!
    </div>
  </div>
</template>

<script src='./SignUpForm.js'></script>
<!-- reuse existing styles -->
<style src="../LoginForm/LoginForm.styl" lang="stylus"></style>
