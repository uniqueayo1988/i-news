<template>
  <span>
    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit" id="show-modal" @click="showModal = true">Login</button>

    <ModalHelper v-if="showModal" @close="showModal = false">
      <div slot="head">
        <h2 class="display-5 text-center">LOGIN!</h2>
      </div>
      <div slot="body">
        <form>
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
          <button type="button" class="btn btn-primary" @click="login">Login</button>
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
  data () {
    return {
      showModal: false,
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const { email, password } = this.user
      const storeEmail = localStorage.email
      const storePassword = localStorage.password
      if (email === storeEmail && password === storePassword) {
        this.showModal = false
        bus.$emit('signedUp', true)
      } else {
        alert('Please log in with the correct credentials')
        this.showModal = false
      }
    }
  }
}
</script>
