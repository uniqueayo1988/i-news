<template>
  <span>
    <button class="btn btn-outline-primary my-2 my-sm-0 mx-md-3" type="submit" id="show-modal" @click="showModal = true">Signup</button>

    <ModalHelper v-if="showModal" @close="showModal = false">
      <div slot="head">
        <h2 class="display-5 text-center">SIGNUP!</h2>
      </div>
      <div slot="body">
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Your Full Name" v-model="user.name" required="">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="E-mail Address" v-model="user.email" required="">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="user.password" required="">
          </div>
        </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
          <button type="button" class="btn btn-primary" @click="signup">Signup</button>
        </div>
      </div>
    </ModalHelper>
  </span>
</template>

<script>
import ModalHelper from './ModalHelper'
import { bus } from '../main'

export default {
  components: {
    ModalHelper
  },
  props: {
    isAuth: Boolean
  },
  data () {
    return {
      showModal: false,
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signup () {
      const { email, password } = this.user
      localStorage.setItem('email', email)
      localStorage.setItem('password', password)
      this.showModal = false
      bus.$emit('signedUp', true)
    }
  }
}
</script>
