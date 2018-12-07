<template>
  <div class="stage">
    <div v-if="!$store.state.fever">
      <StageItem/>
    </div>
    <div v-else>
      <StageItem
        v-for="(item, i) in $store.state.feverMaxShowCount"
        :fever="true"
        :key="i"
        :class="{'is-fever':true}"
      />
      <div class="fever">
        <img src="../assets/parrot.gif">
        <span>Fever!!!!!</span>
        <img src="../assets/parrot.gif">
      </div>
    </div>
  </div>
</template>

<script>
import StageItem from '@/components/StageItem'

export default {
  name: 'Stage',
  components: {
    StageItem
  },
}
</script>

<style scoped>
.stage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.fever {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.fever img {
  width: 15vw;
  height: auto;
}
.fever span {
  margin: 0 1rem;
  font-size: 15vw;
  font-weight: bold;
  animation: rainbow 1s ease 0s infinite alternate;
}
</style>