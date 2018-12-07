<template>
  <div class="top">
    <div>
      <h1>Emoji Wars</h1>
      <p>迫りくるEmojiをクリックしてぶっ倒すゲーム。<br>
      コンボゲージがMaxになるとフィーバーモードに突入するぞ！<br>
      制限時間は30秒、みんなでスコアを競い合おう！</p>
      <button class="button" @click="play">スタート</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  methods: {
    play () {
      this.$emit('play')
      this.$store.dispatch('countdownTimer')
    }
  }
}
</script>

<style scoped>
.top {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  margin-top: 2rem;
}
</style>