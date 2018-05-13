<template id="ModalContainer">
  <div class="modal-container">
    <div class="modal-overlay" v-if="modal">
      <div class="modal">
        <div class="modal-header">
          <span>{{ modal.title }}</span>
          <span class="btn btn-bordered" v-on:click="close">Dismiss</span>
        </div>
        <div class="modal-body">
          <p>{{ modal.message }}</p>
          <div class="modal-body-errors" v-if="modal.errors">
            <ul v-for="(errors, field, index) in modal.errors" :key="index">
              <li class="error-field">{{ field }}</li>
              <li v-for="(error, index) in errors" :key="index">
                {{ error }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Modal.js"></script>
<style src="./Modal.styl" lang="stylus"></style>
