<template> 
  <div class="page artist">
    <div class="decoration">
      <img class="fond" src=""  alt="Pattern">
      <div class="volet-artist"></div>
    </div>
    <div id="main-container" class="artiste">
      <div  class="container scene_element scene_element--fadein ">

        <nuxt-link to="/programmation/" class="fake-close">
            <div class="left"></div>
            <div class="right"></div>
        </nuxt-link>

        <div class="title">
            <div class="background"></div>
            <h2>{{ title }}</h2>
        </div>
        <div class="content-artiste">
            <div class="vertical-align">
                <div class="artiste-stage">
                    <p>{{ stage }}</p>
                </div>
                <div class="artiste-date">
                    <p>{{ dateshows }}</p>
                </div>
                <div class="content">
                  <vue-markdown>{{description}}</vue-markdown>
                </div>
                <div class="social-artiste">
                  <a href="#" alt="FB"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" alt="IT"><i class="fab fa-instagram"></i></a>
                  <a href="#" alt="YT"><i class="fab fa-youtube"></i></a>
                  <a href="#" alt="link"><i class="fas fa-link"></i></a>
                </div>
            </div>
        </div>
        <div class="video">
            <vue-markdown>{{iframe}}</vue-markdown>
        </div>

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
