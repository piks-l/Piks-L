<template>
  <main class="ea-layout-lieu">
    <h2 class="ea-titre">{{title}}</h2>
    <article class="ea-article-lieu">
      <div class="lieux-item__image" :style="{ backgroundImage: `url(${thumbnail})` }"></div>
      <vue-markdown class="description">{{description}}</vue-markdown>
      <div v-for="event in Evenement" :key="event" class="element-item">
        <nuxt-link :to="'/programmation/soiree-'+ event.adresse +'/'" >
           <p class="grid-date"><strong>{{event.dateh}}</strong></p>
           <div class="line"></div>
           <p class="grid-artistes"><strong>{{event.titr}}</strong></p>
        </nuxt-link>
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
    console.log(this.title)
  },
  destroyed() {
  },
  methods: {
    
  }
};
</script>
<style>
.lieux-item__image {
    height: 280px;
    background-position: center center;
    background-size: cover;
}
.ea-article-lieu .element-item {
    width: calc(100% - 34px);
    margin: 0;
}
</style>
