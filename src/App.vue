<template>
  <div id="app">
    <div v-if="!$store.state.result">
      <div v-if="!start">
        <Top @play="play"/>
      </div>
      <div v-else>
        <Timer/>
        <div class="info">
          <Stage/>
          <Score/>
          <Combo/>
        </div>
      </div>
    </div>
    <div v-else>
      <Result/>
    </div>
  </div>
</template>

<script>
import Timer from '@/components/Timer'
import Result from '@/components/Result'
import Stage from '@/components/Stage'
import Score from '@/components/Score'
import Combo from '@/components/Combo'
import Top from '@/components/Top'

export default {
  name: 'app',
  data () {
    return {
      start: false
    }
  },
  methods: {
    play () {
      this.start = true
    }
  },
  components: {
    Timer,
    Result,
    Stage,
    Score,
    Combo,
    Top
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.info {
  display: flex;
  align-items: center;
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.info > * + * {
  margin-left: 1rem;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  border: 0;
  background-color: #2c3e50;
  color: #fff;
  max-width: 200px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
}
@keyframes fever {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rainbow {
  0% {
    color: #fece7a
  }
  12% {
    color: #7eff7a
  }
  24% {
    color: #7effff
  }
  36% {
    color: #7ba3fe
  }
  48% {
    color: #cb70fe
  }
  60% {
    color: #fc49f5
  }
  78% {
    color: #fc4ea7
  }
  90% {
    color: #fd5258
  }
}
</style>
