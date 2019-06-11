<template>
  <main class="ea-layout-lieu">
    <h2 class="ea-titre">{{title}}</h2>
    <article class="ea-article-lieu">
      <div class="item__image" :style="{ backgroundImage: `url(${thumbnail})` }"></div>
      <vue-markdown class="description">{{description}}</vue-markdown>
      <p v-for="event in Evenement" :key="event">{{event.events}}</p>
    </article>
    <div class="nav-select">
      <div class="prev-event">&#60;  Soirée précédente</div>
      <div class="next-event">Soirée suivante  &#62;</div>
    </div>
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
    let lieux = await import('~/content/lieux/page/' + params.slug + '.json');
    return lieux;
  },
  head() {
    return {
      title: `${this.title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.description}` },
        { 'property': 'og:title', 'content': `${this.title}`, 'vmid': 'og:title' },
        { 'property': 'og:description', 'content': `${this.description}` },
        { 'property': 'og:image', 'content': `${this.thumbnail}`, 'vmid': 'og:image' }
      ]
    }
  },
  updated() {
  },
  beforeMount(){
  },
  mounted() {
      var jqxhr = $.getJSON( "example.json", function() {
        console.log( "success" );
      }).done(function() {
        console.log( "second success" );
      }).fail(function() {
        console.log( "error" );
      }).always(function() {
        console.log( "complete" );
      });
      jqxhr.complete(function() {
        console.log( "second complete" );
      });
  console.log(this.title)
  },
  destroyed() {
  },
  methods: {
    
  }
};
</script>
