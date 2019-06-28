<template>
  <main>
    <article class="small-article">
        <a class="article-padding" href="article-film.html">
            <img class="cover" src="">
            <div class="content">
                <h3 class="title-article">Les jours - cahiers photographiques</h3>
                <hr>
                <p class="description-article">Résidence 1+2 2017</p>
                <small class="date">2017</small>
            </div>
        </a>
    </article>
  </main>
</template>
<script>
  import $ from 'jquery'
  import VueLazyload from 'vue-lazyload'
  // export
export default {
    layout: 'default',
    components: { VueLazyload },
    transition: { name: 'intro', mode: 'out-in' },
    head() {
      return {
        title: 'Programmation | Electrobotik Invasion - le 2 & 3 Août 2019',
        meta: [
          { hid: 'description', name: 'description', content: 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:title', 'content': 'Electrobotik Invasion - le 2 & 3 Août 2019', 'vmid': 'og:title' },
          { 'property': 'og:description', 'content': 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:image', 'content': 'images/uploads/link_share.jpg', 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/films/page/', false, /\.json$/);
      const films = context.keys().map(key => ({
        ...context(key),
        _path: `/films/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        films
      };
    },
  mounted() {
  },
  destroyed() {
  },
  methods: {
  }
}
</script>
