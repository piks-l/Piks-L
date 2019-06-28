<template>
  <main>
    <article class="article">
        <a class="article-padding" href="article-actu.html">
            <div class="thumb">
                <img class="cover" src="">
            </div>
            <div class="content">
                <p class="description-article">film - Résidence 1+2 - 2017 - coulisses</p>
                <h3 class="title-article">News, Titre maximum trois ligne sans césure donc éviter la succéssion de ...</h3>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.</p>
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
      const actualites = context.keys().map(key => ({
        ...context(key),
        _path: `/actualites/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        actualites
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
