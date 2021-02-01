<template>
  <div class="main">
    <h1>{{ msg }}</h1>

    <div class="form">
      <input id="InputText">
      <button id="btn" v-on:click="onButton">Click</button>
    </div>

    <event-js />

  </div>
</template>

<script>
import EventJs from "../event"

export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  components: {
    EventJs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1 {
    color: #2c3e50;
  }

  .form {
    display: flex;
    justify-content: center;
  }

  #InputText {
    margin: 10px;
  }

  #btn {
    margin: 10px;
  }
</style>
