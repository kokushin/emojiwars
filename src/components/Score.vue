<template>
  <div class="score">💰 {{ scoreCount }}</div>
</template>

<script>
  export default {
    name: 'Score',
    computed: {
      scoreCount () {
        return this.$store.state.scoreCount
      }
    }
  }
</script>