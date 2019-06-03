<template>
  <div class="page artist">
    <div :class="'decoration decoration-'+stage">
      <div class="volet-artist"></div>
    </div>
    <div id="main-container" class="artiste">
      <div class="container scene_element scene_element--fadein ">
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
                <div class="content">
                  <vue-markdown>{{description}}</vue-markdown>
                </div>
                <div class="social-artiste">
                  <a target="_blank" v-for="socia in social" :key="socia.awesome" :href="socia.lien"><i :class="socia.awesome"></i></a>
                </div>
            </div>
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
    let page = await import('~/content/evenements/page/' + params.slug + '.json');
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
