<template id="TimerPage">
  <div class="timer-page">
    <CurrentPomodoro v-if="pomodoro"></CurrentPomodoro>
    <NewPomodoro v-else></NewPomodoro>
    <PomodoroList></PomodoroList>
  </div>
</template>

<script src='./TimerPage.js'></script>
<style src="./TimerPage.styl" lang="stylus"></style>
