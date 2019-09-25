<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light py-3">
      <router-link to="/" class="navbar-brand"><span class="i-news">i</span>NEWS</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="ml-auto">
          <button class="btn btn-outline-primary my-2 my-sm-0 mx-md-3" type="submit" id="show-modal" @click="showModal = true">Signup</button>
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Login</button>
          <!-- <modal v-if="showModal" @close="showModal = false"> -->
                <!--
      you can use custom content here to overwrite
      default content
    -->
            <!-- <h3 slot="header">custom header</h3> -->
          <!-- </modal> -->
        </div>

      </div>
    </nav>
    <router-view/>

<!-- <div v-if="showModal" @close="showModal = false"> -->
 <transition name="modal" v-if="showModal" @close="showModal = false">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="showModal = false">
              <!-- <button class="modal-default-button" @click="$emit('close')"> -->
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
<!-- </div> -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false
    }
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

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }


  .modal-enter {
    opacity: 0;
  }

  .modal-enter-active {
    transition: opacity 1s;
  }

  .modal-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
