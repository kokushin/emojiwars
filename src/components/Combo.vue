<template>
  <div class="combo">👊
    <div class="combo-bar">
      <span :style="`width: ${comboCount}%`"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Combo',
    computed: {
      comboCount () {
        return this.$store.state.comboCount / this.$store.state.comboCountLimit * 100
      }
    }
  }
</script>

<style scoped>
.combo {
  display: flex;
  align-items: center;
}
.combo-bar {
  width: 100px;
  height: 10px;
  background-color: #eee;
  margin-left: 10px;
}
.combo-bar span {
  display: block;
  width: 0;
  height: 10px;
  background-color: red;
}
</style>