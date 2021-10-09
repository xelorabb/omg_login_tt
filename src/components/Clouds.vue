<template>
  <div class="pt-14 w-screen h-screen"
       :style="{'background-image': 'url(' + require('../assets/img/clouds.jpg') + ')'}">
    <div class="mx-auto h-96 w-96 bg-white border-0 rounded-b-lg rounded-t-3xl">
      <div class="py-8 text-5xl pl-8 bg-gradient-to-r from-blue-600 to-blue-500
                  text-white rounded-t-2xl">
        <div>Login</div>
      </div>
      <div class="absolute user-icon bg-white w-32 h-32 rounded-full"
           :style="{
             'background-position':'center',
             'background-repeat':'no-repeat',
             'background-size': '200px',
             'background-image': 'url(' + require('../assets/img/lenna.jpg') + ')'}">
      </div>
      <div class="py-4 pl-8 text-xl bg-gray-100 text-gray-900">
        Lenna Sjööblom
      </div>
      <div class="px-8 pt-12">
        <div class="relative flex w-full flex-wrap items-stretch mb-3">
          <span class="z-10 h-full leading-snug text-center
                       absolute bg-transparent rounded text-base
                       items-center justify-center w-8 pl-3 py-3">
            <fa class="text-gray-600" icon="user" size="lg"></fa>
          </span>
          <input type="text" placeholder="Name" value="lenna72"
                 class="px-3 py-3 relative bg-white
                        bg-white rounded text-sm border-2 border-blue-200
                        w-full pl-12"/>
        </div>
        <div class="relative flex w-full flex-wrap items-stretch mb-3">
          <span class="z-10 h-full leading-snug text-center
                       absolute bg-transparent rounded text-base
                       items-center justify-center w-8 pl-3 py-3">
            <fa class="text-gray-600" icon="lock" size="lg"></fa>
          </span>
          <input type="text" placeholder="Password"
            class="px-3 py-3 relative bg-white
                   bg-white rounded text-sm border-2 border-blue-200
                   w-full pl-12"/>
        </div>
      </div>
      <div class="text-center pt-6">
        <button class="text-white rounded-3xl px-10 py-4
                       bg-gradient-to-r from-blue-600 to-blue-500">
          LOGIN
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Clouds'
  }
</script>

<style lang="scss">
  .user-icon {
    top: 110px;
    right: calc(47.5% - 130px);
  }
</style>
