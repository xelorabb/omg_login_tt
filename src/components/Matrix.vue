<template>
  <div class="pt-14 w-screen h-screen bg-gradient-to-b from-gray-900 to-gray-800"
       :style="{'background-image': 'url(' + require('../assets/img/matrix.jpg') + ')'}">
    <div class="mx-auto h-96 w-96 bg-black bg-opacity-90">
      <h1 class="text-4xl text-white text-center font-bold pt-8">LOGIN</h1>
      <div class="pt-16 px-10">
        <input class="mb-6 pb-1 text-xl placeholder-white
                      border-b border-gray-500 bg-transparent w-full"
               placeholder="Name"/>
        <input class="pb-1 text-xl placeholder-white border-b border-white
                      border-gray-500 bg-transparent w-full"
               placeholder="Password"/>
      </div>
      <div class="pt-16 text-center">
        <button class="py-2 px-6 text-lg text-white" style="background-color: #026f2a">
          LOGIN
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Matrix'
  }
</script>
