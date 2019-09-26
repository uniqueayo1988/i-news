<template>
  <div>
    <div class="row">
      <div class="col-md-8 ml-md-auto blog-body">
        <div class="row m-2">
          <input class="form-control form-control-lg" type="text" placeholder="search by Title" v-model="search">
        </div>
        <div class="clearfix px-2">
          <button type="button" class="btn btn-primary float-left" v-on:click="changeList">GRID</button>
          <button type="button" class="btn btn-dark float-right" v-on:click="changeGrid">LIST</button>
        </div>

        <div class="row py-2">
          <div class="col-sm-6 col-md-4" v-for="(blog, index) in filteredBlogs" :key="index">
            <div class="card">
              <img :src="blog.urlToImage" class="card-img-top" :alt="blog.source.name">
              <div class="card-body">
                <h5 class="card-title">{{blog.source.name}}</h5>
                <p class="card-text">{{blog.content | snippet}}</p>
                <router-link v-bind:to="'/blog/'+blog.source.id" class="btn btn-primary">
                  <span class="">Read more</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SideBar v-bind:blogs="blogs"/>
    </div>

  </div>
</template>

<script>
import blogMixin from '../mixins/blogMixin'

export default {
  mixins: [blogMixin]
}
</script>

<style scoped="">
  .blog-body {
    border-right: 2px solid grey;
  }
</style>
