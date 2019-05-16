<template>
  <h2>Accueil</h2>
</template>

<script>
  import $ from 'jquery'
  // export
  export default {
    layout: 'default',
    components: { },
    asyncData() {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve({})
        }, 2500)
        console.log('document ready index 1!')
      })
    },
     mounted() {
        setTimeout(() => {
          // Extend loader for an additional 5s
          this.$nuxt.$loading.finish()
        }, 2500)
        console.log('document ready index 2!')
      }
  }
</script>
<style>
</style>
