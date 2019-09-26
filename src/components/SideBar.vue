<template>
  <div class="col-md-3 mr-md-auto">
    <h2 class="display-5 text-center">Checkout links to latest happenings around you!</h2>
    <hr class="">
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="(blog, index) in blogs" :key="index"><router-link :to="blog.url" class="text-center">{{blog.title}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    blogs: Array
  }
}
</script>
