<template>
  <div class="jumbotron text-center">
    <div class="jumbotron-body p-2">
      <h1 class="display-2">iNEWS!</h1>
      <slot name="sub-title"></slot>
      <hr class="my-3">
      <slot name="intro"></slot>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .jumbotron {
    background: url(../assets/news.jpg);
  }

  .jumbotron-body {
    background: rgba(255, 255, 255, 0.7);
    color: #1B2CC1
  }
</style>
