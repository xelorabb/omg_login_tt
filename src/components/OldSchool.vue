<template>
  <div class="pt-14 bg-gray-600 w-screen h-screen">
    <div class="mx-auto h-48 w-96 border-8 border-ridge">
      <div class="px-2 min-h-full bg-white">
        <div>
          <h1 class="text-6xl pb-4">Login</h1>
        </div>
        <div>
          Name: <input class="input-old-style"/><br />
          Password: <input class="input-old-style"/>
        </div>
        <div>
          <button class="btn-old-style px-1">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OldSchool'
  }
</script>

<style lang="scss" scoped>
  .input-old-style {
    border: 4px;
    @apply border-inset;
  }

  .btn-old-style {
    border: 4px;
    @apply bg-gray-400;
    @apply border-outset;
  }

  .border-inset {
    border-style: inset;
  }

  .border-outset {
    border-style: outset;
  }

  .border-ridge {
    border-style: ridge;
  }
</style>
