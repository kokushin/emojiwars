<template>
  <div class="timer">⏰ {{ timerLimit }}</div>
</template>

<script>
  export default {
    name: 'Timer',
    computed: {
      timerLimit () {
        return this.$store.state.timerLimit
      }
    }
  }
</script>

<style scoped>
.timer {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
</style>