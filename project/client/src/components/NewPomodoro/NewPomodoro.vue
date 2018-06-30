<template id="new_pomodoro">
  <div class="new-pomodoro">
    <div class="left-side">
      <span>Pomodoro duration:</span>
      <v-select
        :options="durations"
        :value="duration"
        :searchable="false"
        :onChange="onDurationSelect"
      ></v-select>
      <span>minutes</span>
    </div>
    <a class="btn btn-bordered" v-on:click="onPomodoroStart">Start!</a>
  </div>
</template>

<script src="./NewPomodoro.js"></script>
<style src="./NewPomodoro.styl" lang="stylus"></style>
