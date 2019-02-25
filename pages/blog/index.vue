<template>
<div class="page">
  <div class="container border">
      <h2>Nos actualités</h2>
  </div>  
  <div class="content-blog">
    <div class="container">
      <div class="blog-list">
        <article v-for="post in posts.slice().reverse()" :key="post.date">
          <nuxt-link class="blog-title underline" :to="post._path">{{ post.title }}</nuxt-link>
          <img class="blog-cover" :src="post.couverture">
          <vue-markdown>{{post.intro}}...</vue-markdown>
          <div class="blog-footer">  
              <nuxt-link class="blog-readmore" :to="post._path">En savoir plus</nuxt-link>
              <div class="blog-date"><p>Par <nuxt-link to="/artistes/piero/">Piero</nuxt-link>, le <b>{{ post.date }}</b></p></div>
          </div>
        </article>
      </div>
      <influx-sidebar/>
    </div>
  </div>
</div>
</template>

<script>
  import $ from 'jquery'
  import VueMarkdown from 'vue-markdown'
  
  // import components
  import influxSidebar from '~/components/sidebar.vue'
  
  // export
  export default {
    layout: 'default',
    components: {
        influxSidebar,
        VueMarkdown 
    },
    head() {
      return {
        title: 'NOS ACTUALITÉS',
        meta: [
          { hid: 'description', name: 'description', content: 'Piero a créé la Cour des Miracles à Toulouse il y a presque 10 ans dans le but de réunir une équipe de tatoueurs spécialisés dans chacun des grands courants de l’art du tatouage' },
          { 'property': 'og:title', 'content': 'LA COUR DES MIRACLES', 'vmid': 'og:title' },
          { 'property': 'og:description', 'content': 'Piero a créé la Cour des Miracles à Toulouse il y a presque 10 ans dans le but de réunir une équipe de tatoueurs spécialisés dans chacun des grands courants de l’art du tatouage' },
          { 'property': 'og:image', 'content': 'images/uploads/link_share.jpg', 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/blog/posts/', false, /\.json$/);
      const posts = context.keys().map(key => ({
        ...context(key),
        _path: `/blog/${key.replace('.json', '').replace('./', '')}`
      }));
      return { posts };
    },
    mounted: () => {
      	
    }
  }
</script>
