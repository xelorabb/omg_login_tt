<template>
  <div class="pt-12 w-screen h-screen bg-white"
       :style="{'background-image': 'url(' + require('../assets/img/abstract.jpg') + ')'}">
    <div class="mx-auto h-1/2 w-96 bg-gradient-to-b from-gray-100 to-white
                border-0 rounded-2xl shadow-lg " style="height: 56%">
      <div class="bg-gradient-to-b from-purple-900 to-purple-500 border-0 rounded-t-2xl">
        <h1 class="text-4xl p-8 text-center text-white">Login</h1>
      </div>

      <div class="text-center pt-12 px-10">
          <input class="pl-4 py-3 mb-4 border-2 border-gray-300 rounded-full w-full"
                 placeholder="Name"/>
          <input class="pl-4 py-3 border-2 border-gray-300 rounded-full w-full"
                 placeholder="Password"/>
      </div>

      <div class="flex justify-center pt-4">
        <div class="px-2">
          <button class="bg-black w-12 h-12 text-white rounded-full">
            <fa :icon="['fab','github']" size="lg"></fa>
          </button>
        </div>
        <div class="px-2">
          <button class="bg-red-500  w-12 h-12 text-white rounded-full">
            <fa :icon="['fab','google']" size="lg"></fa>
          </button>
        </div>
        <div class="px-2">
          <button class="bg-blue-500 w-12 h-12 text-white rounded-full">
            <fa :icon="['fab','twitter']" size="lg"></fa>
          </button>
        </div>
      </div>

      <div class="w-full text-center pt-6 px-10">
        <button class="bg-gradient-to-b from-purple-900 to-purple-500 w-full
                       px-16 py-3 text-xl border-0 rounded-full text-white">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Simple'
  }
</script>
