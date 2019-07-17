<template>
  <main class="page-index">
    <h2>Typohraphie</h2>
    <h1>Je suis un titre h1</h1>
    <h2>Je suis un titre h2</h2>
    <h3>Je suis un titre h3</h3>
    <h4>Je suis un titre h4</h4>
    <h5>Je suis un titre h5</h5>
    <h6>Je suis un titre h6</h6>
    <p>Je suis un P et lui c'est <strong>un Strong</strong>, quand à lui c'est un <a href="#">lien</a> et alors lui c'est juste un petit <small>small</small></p>
    <hr>
    <h2>WIDGET</h2>
    <h3>Accordeon.vue</h3>
    <accordeon/>
    <hr>
    <h3>Lightbox.vue</h3>
    <lightbox/>
    <hr>
    <h3>Slider.vue</h3>
    <slider/>
    <hr>
    <h3>Modal.vue</h3>
    <modal/>
    <hr>
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
  import modal from '~/components/widget/modal.vue'

  export default {
    layout: 'default',
    transition: {
      name: 'intro', mode: 'out-in'
    },
    components: {
      accordeon,
      lightbox,
      slider,
      modal
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
