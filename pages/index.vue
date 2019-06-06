<template>
  <main>
    <h1>ACCUEIL</h1>
    <nuxt-link to="/programmation/">PROGRAMMATION</nuxt-link>
  </main>
</template>
<script>
  import $ from 'jquery'
  // export
  export default {
    layout: 'default',
    transition: 'page',
    data() {
      return {
        changed: false
      }
    }
  }
</script>
<style>
    page-enter-active, .page-leave-active {
      transition: all .30s ease-out;
    }
    .page-enter, .page-leave-active {
      opacity: 0;
      transform-origin: 50% 50%;
    }
</style>
