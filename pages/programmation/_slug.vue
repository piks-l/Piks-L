<template>
  <main class="page" :data-back="background">
     <h2>{{ title }}</h2>
     <p>{{ semaine }}</p>
     <p>{{ type }}</p>
     <p>{{ start }} > {{ end }}</p>    
  </main>
</template>
<script>
import $ from 'jquery'
import VueMarkdown from 'vue-markdown'
import VueLazyload from 'vue-lazyload'
export default {
  layout: 'default',
  transition: { name: 'intro', mode: 'out-in' },
  components: { VueMarkdown, VueLazyload },
  async asyncData({ params }) {
    let page = await import('~/content/programmation/page/' + params.slug + '.json');
    return page;
  },
  head() {
    return {
      title: `${this.title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.description}` },
        { 'property': 'og:title', 'content': `${this.title}`, 'vmid': 'og:title' },
        { 'property': 'og:description', 'content': `${this.description}` },
        { 'property': 'og:image', 'content': `${this.couverture}`, 'vmid': 'og:image' }
      ]
    }
  },
 mounted() {
    this.switchBackground();
  },
  destroyed() {
    this.killBackground();
  },
  methods: {
    switchBackground() {
        var back = $('main').attr('data-back');
        $('.main-background').fadeOut(100, function(){
            $('.main-background').attr('xlink:href', back).bind('onreadystatechange load', function(){
              $('.main-background').fadeIn(100);
            });
        });
        $('.seconde-background').fadeOut(100, function(){
            $('.seconde-background').attr('src', back).bind('onreadystatechange load', function(){
              $('.seconde-background').fadeIn(100);
            });
        });
    },
    killBackground() {
        $('.main-background').fadeOut(250, function(){
            $('.main-background').attr('xlink:href', '/images/background-1-electro-alternativ.jpg').bind('onreadystatechange load', function(){
              $('.main-background').fadeIn(100);
            });
        });
        $('.seconde-background').fadeOut(250, function(){
            $('.seconde-background').attr('src', '/images/background-1-electro-alternativ.jpg').bind('onreadystatechange load', function(){
              $('.seconde-background').fadeIn(100);
            });
        });
    }
    
  }
};
</script>
