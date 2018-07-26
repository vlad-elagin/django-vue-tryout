<template id="pomodoro_list">
  <div class="pomodoro-list">
    <div class="pomodoro-list-heading">
      Your pomodoros:
      <a class="btn btn-bordered" v-on:click="getPomodoros">Refresh</a>
    </div>
    <div class="pomodoro-list-body">
      <ul v-for="(poms, date) in pomodoros" :key="date">
        <li class="pomodoro-list-date">{{ date }}</li>
        <li class="pomodoro-list-item" v-for="(pom) in poms" :key="pom.id">
          <span class="duration">Duration: {{ pom.duration }} minutes</span>
          <span class="started-at">Started: {{ pom.started_at | tinytime }}</span>
          <span class="finished" v-if="pom.status === 'finished'">Finished</span>
          <span class="in-progress" v-else-if="pom.status === 'In progress'">In progress</span>
          <span class="failed" v-else>Failed</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./PomodoroList.js"></script>
<style src="./PomodoroList.styl" lang="stylus"></style>
