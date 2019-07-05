<template>
  <main class="page-film">
    <article v-for="f in films" class="small-article">
        <nuxt-link class="article-padding" :to="f._path+'/'">
            <img class="cover" :src="f.cover">
            <div class="content">
                <h3 class="title-article">{{ f.title }}</h3>
                <hr>
                <p class="description-article">{{ f.soustitre }}</p>
                <small class="date">{{ f.date }}</small>
            </div>
        </nuxt-link>
    </article>
  </main>
</template>
<script>
  import $ from 'jquery'
  // export
export default {
    layout: 'default',
    components: {  },
    transition: { name: 'intro', mode: 'out-in' },
    head() {
      return {
        title: 'FILM | Résidence 1+2 – Photographie & Sciences',
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
      $("body").removeClass('red-page, yellow-page, blue-page');
      this.titre();
  },
  destroyed() {
  },
  methods: {
      titre(){
          var modif = 'FILMS';
          $('.page-title').html( modif );           
      }
  }
}
</script>
