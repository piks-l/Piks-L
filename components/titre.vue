<template>
  <h2 class="ea-titre">{{this.$route.name}}</h2>
</template>
<script>
import $ from 'jquery'
export default {
  mounted() {
    this.title();
  },
  methods: {
    title() {
     console.log("Titre de la page loaded")
    }
  }
}
</script>
