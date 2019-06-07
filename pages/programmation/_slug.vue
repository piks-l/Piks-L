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
    console.log("destroyed");
  },
  methods: {
    switchBackground() {
        var back = $('main').attr('data-back');
        $('.main-background').fadeOut(1000, function(){
            $('.main-background').attr('xlink:href', back).bind('onreadystatechange load', function(){
              $('.main-background').fadeIn(1000);
            });
        });
        $('.seconde-background').fadeOut(1000, function(){
            $('.seconde-background').attr('src', back).bind('onreadystatechange load', function(){
              $('.seconde-background').fadeIn(1000);
            });
        });
    },
    killBackground() {
        $('.main-background').fadeOut(1000, function(){
            $('.main-background').attr('xlink:href', '/images/background-4-electro-alternativ.jpg').bind('onreadystatechange load', function(){
              $('.main-background').fadeIn(1000);
            });
        });
        $('.seconde-background').fadeOut(1000, function(){
            $('.seconde-background').attr('src', '/images/background-4-electro-alternativ.jpg').bind('onreadystatechange load', function(){
              $('.seconde-background').fadeIn(1000);
            });
        });
    }
    
  }
};
</script>
