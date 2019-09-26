<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light py-3">
      <router-link to="/" class="navbar-brand"><span class="i-news">i</span>NEWS</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="ml-auto" v-if="!isAuth">
          <SignupModal v-bind:isAuth="isAuth"/>
          <LoginModal v-bind:isAuth="isAuth"/>
        </div>
        <button class="btn btn-outline-danger my-2 my-sm-0 ml-auto" @click="logout" v-else>Logout</button>
      </div>
    </nav>
    <Home v-bind:isAuth="isAuth"/>
    <Footer/>
  </div>
</template>

<script>
import Home from './views/Home'
import SignupModal from '@/components/SignupModal'
import LoginModal from '@/components/LoginModal'
import Footer from '@/components/Footer'
import { bus } from './main'

export default {
  components: {
    Home,
    SignupModal,
    LoginModal,
    Footer
  },
  data () {
    return {
      isAuth: false
    }
  },
  methods: {
    logout () {
      this.isAuth = false
    }
  },
  created () {
    bus.$on('signedUp', (data) => {
      this.isAuth = data
    })
  }
}
</script>
<style scoped="">
  #app {
    font-family: 'Nunito SemiBold';
    background: rgba(0, 0, 255, 0.1);
  }

  .navbar-brand {
    font-size: 35px;
    font-family: 'Saira Stencil One', cursive;
    color: #1B2CC1
  }

  .i-news {
    color: red;
  }
</style>
