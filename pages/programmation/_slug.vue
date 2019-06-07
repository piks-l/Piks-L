<template>
  <main class="page artist" :data-back="backgroundweb">
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
  layout: 'simple',
  transition: { name: 'intro', mode: 'out-in' },
  components: { VueMarkdown, VueLazyload },
  async asyncData({ params }) {
    let page = await import('~/content/programmation/page/' + params.slug + '.json');
    return page;
  },
  data() {
    return {
      backgroundweb: `${this.background}`
    }
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
