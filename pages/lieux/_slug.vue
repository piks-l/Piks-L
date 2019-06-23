<template>
  <main class="ea-layout-lieu">
    
    <h2 class="ea-titre">{{title}}</h2>
    <p class="date-event"><i class="fas fa-walking"></i>{{ direction }}</p>
    <div class=""><i class="fas fa-map-marked-alt"></i><p><a target="_blank" :href="gmap">{{ adresse }}</a></p></div>
    <article class="ea-article-lieu">
      <div class="lieux-item__image" :style="{ backgroundImage: `url(${thumbnail})` }"></div>
      <hr/>
      <vue-markdown class="description">{{description}}</vue-markdown>
      <div class="reserver" v-for="s in social" >
        <a target="_blank" :href="s.lien" :alt="s.texte">{{s.texte}}</a>
      </div>
    </article>
    <div v-for="event in Evenement" :key="event" class="element-item">
      <nuxt-link :to="'/programmation/soiree-'+ event.adresse +'/'" >
         <p class="grid-date"><strong>{{event.dateh}}</strong></p>
         <div class="line"></div>
         <p class="grid-artistes"><strong>{{event.titr}}</strong></p>
      </nuxt-link>
    </div>
  </main>
</template>
<script>
import $ from 'jquery'
import VueMarkdown from 'vue-markdown'
import VueLazyload from 'vue-lazyload'
export default {
  layout: 'default-mono',
  transition: { name: 'intro', mode: 'out-in' },
  components: { VueMarkdown, VueLazyload},
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
  },
  destroyed() {
  },
  methods: {
    
  }
};
</script>
