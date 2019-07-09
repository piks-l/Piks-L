<template>
  <main class="page-expositions">
    <article v-for="e in expositions" class="small-article">
        <nuxt-link class="article-padding" :to="e._path+'/'">
            <img class="cover" :src="e.cover">
            <div class="content">
                <h3 class="title-article">{{ e.title }}</h3>
                <hr>
                <p class="description-article">{{ e.soustitre }}</p>
                <small class="date">{{ e.date }}</small>
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
        title: 'EXPOSITIONS | 1+2 – Photographie & Sciences',
        meta: [
          { hid: 'description', name: 'description', content: `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:title', 'content': `EXPOSITIONS | 1+2 – Photographie & Sciences`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:image', 'content': ``, 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/expositions/page/', false, /\.json$/);
      const expositions = context.keys().map(key => ({
        ...context(key),
        _path: `/expositions/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        expositions
      };
    },
  mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      this.titre();
  },
  destroyed() {
  },
  methods: {
      titre(){
          var modif = 'EXPOSITIONS';
          $('.page-title').html( modif );           
      }
  }
}
</script>
