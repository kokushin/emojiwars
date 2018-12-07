<template>
  <div class="result">
    <h2>結果</h2>
    <div class="count">💰 {{ scoreCount }}</div>
    <div class="share">
      <a :href="`https://twitter.com/share?url=${_getUrl()}&text=%23Emoji_Wars%20で💰${scoreCount}ポイント獲得しました！`" target="_blank" class="button">結果をシェアする</a>
    </div>
    <p class="retry"><a :href="_getUrl()">リトライ</a></p>
  </div>
</template>

<script>
export default {
  name: 'Result',
  computed: {
    scoreCount () {
      return this.$store.state.scoreCount
    }
  },
  methods: {
    _getUrl () {
      return location.href
    }
  }
}
</script>

<style scoped>
.count{
  font-size: 3rem;
  margin-top: 3rem;
}
.share {
  margin-top: 3rem;
}
.retry {
  margin-top: 2rem;
}
</style>