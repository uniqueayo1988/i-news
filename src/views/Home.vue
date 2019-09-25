<template>
  <div class="home">
    <BodyImage>
      <p class="lead" slot="sub-title">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p slot="intro">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    </BodyImage>
    <component v-bind:is="component" v-bind:blogs="blogs" v-on:changeGrid="changeGrid($event)" v-on:changeList="changeList($event)"/>
<!--     <AllNews v-bind:blogs="blogs"/>
    <GridView v-bind:blogs="blogs"/> -->
  </div>
</template>

<script>
import BodyImage from '@/components/BodyImage'
import AllNews from '@/components/AllNews'
import GridView from '@/components/GridView'
import { API_KEY } from '../utils/utils'
import { bus } from '../main'

export default {
  components: {
    BodyImage,
    AllNews,
    GridView
  },
  data () {
    return {
      blogs: [],
      search: '',
      component: GridView
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

    bus.$on('changedGrid', (data) => {
      this.component = data
    })

    bus.$on('changedList', (data) => {
      this.component = data
    })
  }
}
</script>
