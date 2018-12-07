import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: false,
    point: {
      default: 100,
      fever: 1000,
    },
    scoreCount: 0,
    comboCount: 0,
    comboCountLimit: 5,
    timer: null,
    timerLimit: 30,
    fever: null,
    feverLimit: 5,
    feverMaxShowCount: 50,
    emojiSize: 80,
  },
  mutations: {
    incrementScoreCount: (state, point) => state.scoreCount += Number(point),
    incrementComboCount: state => state.comboCount++,
    decrementTimerLimit: state => state.timerLimit--,
    decrementFeverLimit: state => state.feverLimit--,
  },
  actions: {
    countdownTimer ({ commit }) {
      if (!this.state.timer) {
        this.state.timer = setInterval(() => {
          if (this.state.timerLimit > 1) {
            commit('decrementTimerLimit')
          } else {
            clearInterval(this.state.timer)
            this.state.timer = null
            this.state.result = true
          }
        }, 1000);
      }
    },
    fevermode ({ commit }) {
      if (!this.state.fever) {
        const currentFeverLimit = this.state.feverLimit

        this.state.fever = setInterval(() => {
          if (this.state.feverLimit > 1) {
            commit('decrementFeverLimit')
          } else {
            clearInterval(this.state.fever)
            this.state.fever = null
            this.state.comboCount = 0
            this.state.feverLimit = currentFeverLimit
          }
        }, 1000);
      }
    }
  }
})
