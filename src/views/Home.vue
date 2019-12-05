<template>
  <div class="home">
    <BodyImage>
      <p class="lead" slot="sub-title">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p slot="intro">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    </BodyImage>
    <component v-bind:is="component" v-bind:blogs="blogs" v-on:changeGrid="changeGrid($event)" v-on:changeList="changeList($event)" v-if="isAuth"/>
    <AppBody v-else />
  </div>
</template>

<script>
import BodyImage from '@/components/BodyImage'
import AppBody from '@/components/AppBody'
import AllNews from '@/components/AllNews'
import GridView from '@/components/GridView'
import { bus } from '../main'

export default {
  components: {
    BodyImage,
    AppBody,
    AllNews,
    GridView
  },
  props: {
    isAuth: Boolean
  },
  data () {
    return {
      blogs: [],
      search: '',
      component: GridView
    }
  },
  created () {
    this.$http.get(`?country=us&apiKey=${process.env.VUE_APP_KEY}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.blogs = data.articles.slice(0, 10)
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
