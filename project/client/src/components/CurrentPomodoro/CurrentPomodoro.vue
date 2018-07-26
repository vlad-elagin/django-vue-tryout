<template id="current_pomodoro">
  <div class="current-pomodoro">
    <div class="progress-bar">
      <span class="progress-bar-time">{{ duration | duration }}</span>
      <div
        class="progress-bar-inner"
        v-bind:style="{ width: progress + '%' }"
      >
        <span class="progress-bar-time">{{ duration | duration }}</span>
      </div>
    </div>
    <a class="btn btn-bordered" v-on:click="onPomodoroStop">Stop!</a>
  </div>
</template>

<script src="./CurrentPomodoro.js"></script>
<style src="./CurrentPomodoro.styl" lang="stylus"></style>
