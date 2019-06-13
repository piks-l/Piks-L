<template>
  <main class="ea-layout-lieu">
    <h2 class="ea-titre">{{title}}</h2>
    <article class="ea-article-artistes">
      <div class="artistes-item__image" :style="{ backgroundImage: `url(${thumbnail})` }"></div>
      <vue-markdown class="description">{{description}}</vue-markdown>
      <vue-markdown class="iframe">{{iframe}}</vue-markdown>
      </div>
    </article>
  </main>
</template>
<script>
import $ from 'jquery'
import VueMarkdown from 'vue-markdown'
import VueLazyload from 'vue-lazyload'
export default {
  layout: 'default',
  transition: { name: 'intro', mode: 'out-in' },
  components: { VueMarkdown, VueLazyload},
  async asyncData({ params }) {
    let artistes = await import('~/content/artistes/page/' + params.slug + '.json');
    return artistes;
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
  },
  destroyed() {
  },
  methods: {
    
  }
};
</script>
<style>
.ea-article-artistes .artistes-item__image {
    height: 280px;
    background-position: center center;
    background-size: cover;
}
</style>
