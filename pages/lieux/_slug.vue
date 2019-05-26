<template>
  <div class="page artist">
    <div id="main-container" class="artiste">
      <div class="container scene_element scene_element--fadein ">
        <div class="title">
            <h2>{{ title }}</h2>
            <vue-markdown>{{description}}</vue-markdown>
            <p v-for="Evenements in pageLieux" :key="Evenements.events" >{{Evenements.event}}</p>
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
  layout: 'default',
  components: { VueMarkdown, VueLazyload },
  async asyncData({ params }) {
    let pageLieux = await import('~/content/lieux/page/' + params.slug + '.json');
    return pageLieux;
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
