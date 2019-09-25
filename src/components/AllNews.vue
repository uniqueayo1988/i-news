<template>
  <div>
    <div class="row">
      <div class="col-md-8 ml-md-auto blog-body">
        <div v-for="(blog, index) in blogs" :key="index">
          <div class="media py-2" >         
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

      <div class="col-md-3 ml-md-auto">
        <p>hello</p>
      </div>   
    </div>

  </div>
</template>

<script>
// import ShowBlogs from '../components/ShowBlogs'
import { API_KEY } from '../utils/utils'
export default {
  components: {
  },
  data () {
    return {
      blogs: []
    }
  },
  created () {
    this.$http.get(`?country=us&apiKey=${API_KEY}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.blogs = data.articles.slice(0, 10)
        console.log(this.blogs, '......blogsSssS.....')
      })
  }
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
