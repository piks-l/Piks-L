<template>
  <div class="page artist">
    <div :class="'intro artist-'+title">
      <div class="header">
          <h2>{{ title }}</h2>    
          <vue-markdown>{{description}}</vue-markdown>
      </div>
    </div>
    <div class="portfolio">
      <div class="work" v-for="(img, i) in galerie.slice().reverse()" :key="galerie.i">
          <div class="center" >
            <img class="fontblur" v-lazy="img">
            <img class="artist-img" v-lazy="img">
          </div>  
      </div>
    </div>
    <div class="full-width">
        <div class="container">
            <nuxt-link to="/tattoos/"><p>Voir les autres tattoos.</p></nuxt-link>
        </div>
    </div>   
  </div>
</template>
<script>
import $ from 'jquery'
import VueMarkdown from 'vue-markdown'
import VueLazyload from 'vue-lazyload'
export default {
  layout: 'artistes',
  components: { VueMarkdown, VueLazyload },
  async asyncData({ params }) {
    let page = await import('~/content/artistes/page/' + params.slug + '.json');
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
  }
};
</script>
<style>
</style>
