<template>
  <div>
    <article class="post">
      <img class="header" :src="couverture">
      <div class="shadow"></div>
      <div class="container">
        <h2>{{ title }}</h2>
        <div class="meta">
          <p>Par  <nuxt-link to="/artistes/piero/">Piero</nuxt-link>, le <b>{{ date }}</b></p> 
        </div>
        <vue-markdown class="content-intro">{{intro}}</vue-markdown>
        <div class="contenu">
            <vue-markdown class="content-article">{{article}}</vue-markdown>
        </div>
        <cdm-sidebar/>
      </div>
      <cdm-derniersarticles/>
    </article>
    <div class="full-width">
        <div class="container">
            <nuxt-link to="/blog/"><p>Revenir sur le blog</p></nuxt-link>
        </div>
    </div> 
   </div>
</template>

<script>
import cdmDerniersarticles from '~/components/plug/derniers-articles.vue'
import cdmSidebar from '~/components/sidebar.vue'
import VueMarkdown from 'vue-markdown'
export default {
  layout: 'default',
  scrollToTop: true,
  components: { 
    cdmDerniersarticles,
    cdmSidebar,
    VueMarkdown 
  },
  async asyncData({ params }) {
    let post = await import('~/content/blog/posts/' + params.slug + '.json');
    return post;
  },
  head() {
    return {
      title: `${this.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.description}`
        }
      ]
    };
  }
};
</script>
<style>
  .post{
    padding:40vh 0 0;
  }
  .post .header {
      position: fixed;
      width: 100%;
      height: auto;
      height: auto;
      top: 0;
      z-index: -2;
  }
  .shadow {
      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: -webkit-linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 100%);
      background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 100%);
      z-index: -1;
  }
  hr {
    margin: 30px;
  }
  .meta {
    margin: 30px 0px;
  }
  .meta p {
    text-align: center;
  }
  .contenu{
      text-align: justify;
      padding: 0 30px 0 0px;
      width: 70%;
      display: inline-grid;
      min-height: 550px;
  }
  .content-intro {
      text-align: justify;
      margin-bottom: 30px;
      line-height: 1.7;
      font-size: 26px;
      font-weight: 400;
  }
  .content-intro p{
      color: #000000;
  }
  .content-article img {
    width: 100%;
  }
  .contenu .content-intro p{
      color: #000000;
      font-weight: bold;
      font-size: 28px;
      line-height: 1.7;
      margin-bottom: 15px;
  }
  .contenu .content-article p{
      color: gray;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.7;
      margin-bottom: 15px;
  }
  .contenu .content-article h3 {
    font-size: 36px;
    padding: 30px 0px;
    text-align: left;
  }
  .post a {
    color: #000;
    text-decoration: none;
    font-family: "titaniaregular",serif;
    border-bottom: 1px solid red;
  }
</style>
