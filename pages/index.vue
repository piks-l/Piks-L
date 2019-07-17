<template>
  <main class="page-index">
    <no-ssr>
      <carousel :autoplay="true" :nav="false">
        <img src="https://placeimg.com/200/200/any?1">
        <img src="https://placeimg.com/200/200/any?2">
        <img src="https://placeimg.com/200/200/any?3">
        <img src="https://placeimg.com/200/200/any?4">
      </carousel>
    </no-ssr>
  </main>
</template>
<script>
  import $ from 'jquery'
  export default {
    layout: 'default',
    transition: { name: 'intro', mode: 'out-in' },
    components: { },
    mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      this.titre();
  },
  destroyed() {
  },
  methods: {
      titre(){
          var modif = 'ACCUEIL';
          $('.page-title').html( modif );
      }
  }
}
</script>
