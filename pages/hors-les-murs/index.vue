<template>
  <main class="page-horslesmurs">
    <div class="intro">
        <p> La <b>Résidence 1+2 Factory</b> est une résidence artistique en entreprises ou en institutions, partenaires ou non du programme de la <b>Résidence 1+2
          «Photographie &#38; Sciences»</b>. Sur une période donnée, un ou une photographe propose un regard d’auteur inédit sur la structure concernée en revisitant
          son histoire, ses modes opératoires, sa production, ses savoirs-faire. Celle-ci apparaît alors, comme un soutien actif de la création photographique,
          renforçant son ancrage local, régional ou national et s’ouvrant à d’autres publics. La Résidence 1+2 a pour ambition de créer une pépinière de jeunes
          photographes et un réseau d’entreprises et institutions, sensibles aux expressions artistiques.</p>
    </div>
    <article  v-for="h in horslesmurs"  class="small-article">
        <nuxt-link class="article-padding" :to="h._path+'/'">
            <img class="cover" :src="h.cover">
            <div class="content">
                <h3 class="title-article">{{ h.title }}</h3>
                <hr>
                <p class="description-article">{{ h.soustitre }}</p>
                <small class="date">{{ h.date }}</small>
            </div>
        </nuxt-link>
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
        title: 'HORS LES MURS | 1+2 – Photographie & Sciences',
        meta: [
          { hid: 'description', name: 'description', content: `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:title', 'content': `HORS LES MURS | 1+2 – Photographie & Sciences`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:image', 'content': ``, 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/hors-les-murs/page/', false, /\.json$/);
      const horslesmurs = context.keys().map(key => ({
        ...context(key),
        _path: `/hors-les-murs/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        horslesmurs
      };
    },
  mounted() {
      $("body").removeClass('red-page, blue-page');
      $("body").addClass('yellow-page');
      this.titre();
  },
  destroyed() {
  },
  methods: {
      titre(){
          var modif = 'HORS LES MURS';
          $('.page-title').html( modif );           
      }
  }
}
</script>
