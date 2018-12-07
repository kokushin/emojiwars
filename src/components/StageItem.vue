<template>
  <div class="stage-item" :style="position">
    <a @click="scoreUp">
      <span>{{ emoji }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'StageItem',
  props: [
    'fever',
  ],
  data () {
    return {
      position: {
        top: 0,
        left: 0,
      },
      emoji: null,
      emojiList: {
        normal: [
          '😀',
          '😁',
          '😂',
          '🤣',
          '😃',
          '😄',
        ],
        fever: [
          '🤪'
        ]
      }
    }
  },
  methods: {
    scoreUp (e) {
      if (!this.fever) {
        this.$store.commit('incrementScoreCount', this.$store.state.point.default)
        this.$store.commit('incrementComboCount')
        this.regenerate()
      } else {
        const element = e.currentTarget
        this.$store.commit('incrementScoreCount', this.$store.state.point.fever)
        element.parentNode.removeChild(element);
      }
      // comboがmaxになったらfevermode突入🤪
      if (this.$store.state.comboCount > this.$store.state.comboCountLimit - 1) {
        this.$store.dispatch('fevermode')
      }
    },
    regenerate () {
      this.setEmoji()
      this.setPosition()
    },
    setEmoji () {
      this.emoji = !this.fever
        ? this.emojiList.normal[this._getRandomNum(0, this.emojiList.normal.length - 1)]
        : this.emojiList.fever[0]
    },
    setPosition () {
      this.position.top = `${this._getRandomNum(0, window.innerHeight - this.$store.state.emojiSize)}px`
      this.position.left = `${this._getRandomNum(0, window.innerWidth - this.$store.state.emojiSize)}px`
    },
    _getRandomNum (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  },
  mounted() {
    this.setEmoji()
    this.setPosition()
  },
}
</script>

<style scoped>
.stage-item {
  position: fixed;
}
.stage-item a {
  cursor: pointer;
  user-select: none;
  font-size: 80px;
}
.stage-item a span {
  display: block;
}
.stage-item.is-fever a span{
  animation: fever .5s linear 0s infinite normal;
}
</style>