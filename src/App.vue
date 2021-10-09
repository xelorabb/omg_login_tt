<template>
  <div>
    <Simple v-if="view == 0"/>
    <Matrix v-if="view == 1"/>
    <Clouds v-if="view == 2"/>
    <OldSchool v-if="view == 3"/>
    <Colorful v-if="view == 4"/>
    <Wheel v-if="view == 5"/>
  </div>
  <div class="px-2 flex justify-center">
    <button @click="view = 0">Simple</button> |
    <button @click="view = 1">Matrix</button> |
    <button @click="view = 2">Clouds</button> |
    <button @click="view = 3">OldSchool</button> |
    <button @click="view = 4">Colorful</button> |
    <button @click="view = 5">Wheel</button>
  </div>
</template>

<script>
  import Simple from './components/Simple.vue'
  import Matrix from './components/Matrix.vue'
  import Clouds from './components/Clouds.vue'
  import OldSchool from './components/OldSchool.vue'
  import Colorful from './components/Colorful.vue'
  import Wheel from './components/Wheel.vue'

  export default {
    name: 'App',
    components: {
      Simple,
      Matrix,
      Clouds,
      OldSchool,
      Colorful,
      Wheel
    },
    data() {
      return {
        view: 0
      }
    }
  }
</script>
