<template>
  <main class="page-index">
    <h2>WIDGET</h2>
    <h3>Accordeon.vue</h3>
    <accordeon/>
    <h3>Lightbox.vue</h3>
    <lightbox/>
    <h3>Slider.vue</h3>
    <slider/>
  </main>
</template>
<script>
  // Library
  import $ from 'jquery'
  // Ui
  // Widget
  import accordeon from '~/components/widget/accordeon.vue'
  import lightbox from '~/components/widget/lightbox.vue'
  import slider from '~/components/widget/slider.vue'
  export default {
    layout: 'default',
    transition: {
      name: 'intro', mode: 'out-in'
    },
    components: {
      accordeon,
      lightbox,
      slider
    },
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
