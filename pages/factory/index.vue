<template>
  <main class="page-factory">
    <div class="intro">
        <p> La <b>Résidence 1+2 Factory</b> est une résidence artistique en entreprises ou en institutions, partenaires ou non du programme de la <b>Résidence 1+2
          «Photographie &#38; Sciences»</b>. Sur une période donnée, un ou une photographe propose un regard d’auteur inédit sur la structure concernée en revisitant
          son histoire, ses modes opératoires, sa production, ses savoirs-faire. Celle-ci apparaît alors, comme un soutien actif de la création photographique,
          renforçant son ancrage local, régional ou national et s’ouvrant à d’autres publics. La Résidence 1+2 a pour ambition de créer une pépinière de jeunes
          photographes et un réseau d’entreprises et institutions, sensibles aux expressions artistiques.</p>
    </div>
    <article  v-for="f in factory"  class="small-article">
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
  import VueLazyload from 'vue-lazyload'
  // export
export default {
    layout: 'default',
    components: { VueLazyload },
    transition: { name: 'intro', mode: 'out-in' },
    head() {
      return {
        title: 'FACTORY | 1+2 – Photographie & Sciences',
        meta: [
          { hid: 'description', name: 'description', content: `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:title', 'content': `FACTORY | 1+2 – Photographie & Sciences`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:image', 'content': ``, 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/factory/page/', false, /\.json$/);
      const factory = context.keys().map(key => ({
        ...context(key),
        _path: `/factory/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        factory
      };
    },
  mounted() {
      $("body").removeClass('red-page, yellow-page');
      $("body").addClass('blue-page');
      this.titre();
  },
  destroyed() {
  },
  methods: {
      titre(){
          var modif = 'FACTORY';
          $('.page-title').html( modif );           
      }
  }
}
</script>
