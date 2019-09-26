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
        <div v-for="(blog, index) in filteredBlogs" :key="index">
          <div class="media py-2">
            <img :src="blog.urlToImage" class="mx-2 rounded img-fluid" :alt="blog.source.name" style="width: 100px; height: 100px">
            <div class="media-body">
              <router-link v-bind:to="'/blog/'+blog.source.id" class="name-link">
                <h5 class="mt-0 mb-1">{{blog.source.name}}</h5>
              </router-link>
                {{blog.content | snippet}}
              <br><br>
              <router-link v-bind:to="'/blog/'+blog.source.id" class="read-link">
                <span class="">Read more</span>
              </router-link>
            </div>
          </div>
          <hr class="my-3">
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

  .name-link, .read-link {
    text-decoration: none;
  }

  .read-link {
    color: rgba(255, 0, 0, 0.7);
    font-style: italic;
  }

@media only screen and (max-width: 850px) {
  br {
    display: none;
  }
}

</style>
