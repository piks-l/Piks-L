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
    data() {
      return {
        changed: false
      }
    }
  }
</script>
