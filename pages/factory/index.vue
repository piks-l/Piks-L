<template>
  <main class="factory">
    <div class="intro">
        <p> La <b>Résidence 1+2 Factory</b> est une résidence artistique en entreprises ou en institutions, partenaires ou non du programme de la <b>Résidence 1+2
          «Photographie &#38; Sciences»</b>. Sur une période donnée, un ou une photographe propose un regard d’auteur inédit sur la structure concernée en revisitant
          son histoire, ses modes opératoires, sa production, ses savoirs-faire. Celle-ci apparaît alors, comme un soutien actif de la création photographique,
          renforçant son ancrage local, régional ou national et s’ouvrant à d’autres publics. La Résidence 1+2 a pour ambition de créer une pépinière de jeunes
          photographes et un réseau d’entreprises et institutions, sensibles aux expressions artistiques.</p>
    </div>
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
      const factory = context.keys().map(key => ({
        ...context(key),
        _path: `/factory/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        factory
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
