<template>
  <main class="black">
    <ea-titre/>
    <nuxt-link to="/programmation/">PROGRAMMATION</nuxt-link>
  </main>
</template>
<script>
  import $ from 'jquery'
  import eaTitre from '~/components/titre.vue'
  export default {
    layout: 'default',
    transition: { name: 'outro', mode: 'out-in' },
    components: { eaTitre },
    data() {
      return {
        changed: false
      }
    }
  }
</script>
<style>
    .page-enter-active, .page-leave-active {
      transition: all .30s ease-out;
    }
    .page-enter, .page-leave-active {
      opacity: 0;
      transform-origin: 50% 50%;
    }   
</style>
