<template>
  <main class="ea-layout-evenement" :data-back="background" :data-duo="type">
    <h2 class="ea-titre">ELECTRO ALTERNATIV #15 W/ <nuxt-link class="title-artiste" :to="'/artistes/'+artist.artiste" v-for="artist in groupes" :key="artist.artiste">{{artist.artiste}}</nuxt-link></h2>
    <article class="ea-article-evenement">
      <img v-for="img in galerie" :key="img" :src="img"/>
      <vue-markdown>{{description}}</vue-markdown>
    </article>
    <ea-Sidebarevenement :datehumaine="datehumaine" :start="start" :end="end" :lieu="lieu"/>
  </main>
</template>
<script>
import $ from 'jquery'
import VueMarkdown from 'vue-markdown'
import VueLazyload from 'vue-lazyload'
import eaSidebarevenement from '~/components/sidebar-evenement.vue'
export default {
  layout: 'default',
  transition: { name: 'intro', mode: 'out-in' },
  components: { VueMarkdown, VueLazyload, eaSidebarevenement },
  async asyncData({ params }) {
    let page = await import('~/content/programmation/page/' + params.slug + '.json');
    return page;
  },
  head() {
    return {
      title: `${this.titre}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.description}` },
        { 'property': 'og:title', 'content': `${this.titre}`, 'vmid': 'og:title' },
        { 'property': 'og:description', 'content': `${this.description}` },
        { 'property': 'og:image', 'content': `${this.thumbnail}`, 'vmid': 'og:image' }
      ]
    }
  },
  mounted() {
     $(".title-artiste").each(function() {
      var text = $(this).text();
      text = text.replace(/-/g, " ");
      $(this).text(text);
    });
    this.switchBackground();
  },
  destroyed() {
    this.killBackground();
  },
  methods: {
    switchBackground() {
      var back = $('main').attr('data-back');
      var duo = $('main').attr('data-duo');
      $('.main-background').fadeOut(100, function(){
          $('.main-background').attr('xlink:href', back).bind('onreadystatechange load', function(){
            $('.anim-filter').addClass("duotone-"+duo);
            $('.main-background').fadeIn(100);
          });
      });
    },
    killBackground() {
      var duo = $('main').attr('data-duo');
      setTimeout(function(){  
        $('.main-background').fadeOut(100, function(){
            $('.main-background').attr('xlink:href', '/images/background-1-electro-alternativ.jpg').bind('onreadystatechange load', function(){
                $('.anim-filter').removeClass("duotone-"+duo);
                $('.main-background').fadeIn(100);
            });
        });
      }, 900);
    }
    
  }
};
</script>
