<template>
  <div class="pt-12 bg-gray-100 w-screen h-screen">
    <div class="mx-auto h-3/4 w-96 bg-blue-300 border rounded-3xl">
      <h1 class="w-full text-center text-6xl pt-4 text-white">Login</h1>
      <input id="name" placeholder="Name"
             class="rot-center top w-96 bg-white border rounded-full pl-2 py-1"/>
      <input id="pw" placeholder="Password"
             class="rot-center middle w-96 bg-white border rounded-full pl-2 py-1"/>
      <button id="login"
              class="rot-center bottom w-96 bg-white border px-6 py-1 rounded-full">
        Login
    </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Wheel',
    mounted() {
      const vm = this
      const but = document.getElementById('login')
      const name = document.getElementById('name')
      const pw = document.getElementById('pw')

      vm.interval = setInterval(function () {
        but.style.cssText = 'transform: rotate(' + vm.rot + 'deg)'
        pw.style.cssText = 'transform: rotate(' + (vm.rot - 60) + 'deg)'
        name.style.cssText = 'transform: rotate(' + (vm.rot + 60) + 'deg)'
        vm.rot += 1
      }, 10);
    },
    beforeUnmount() {
      clearInterval(this.interval)
    },
    data() {
      return {
        interval: null,
        rot: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .rot-center {
      position: relative;
      left: 0px;

      &.top { top: 240px; }
      &.middle { top: 206px; }
      &.bottom { top: 171px; }
  }
  // .rot-center {
  //     position: relative;
  //     left: 100px;
  //     top: 350px;
  // }
</style>
