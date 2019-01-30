<template>
  <div class="derniers-articles">
      <div class="box" v-for="post in posts.slice().reverse().slice(0, 3)" :key="post.date" >    
        <nuxt-link class="highlight-title" :to="post._path">
          <img class="centered-and-cropped" :src="post.couverture">
        </nuxt-link>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      const context = require.context('~/content/blog/posts/', false, /\.json$/);
      const posts = context.keys().map(key => ({
        ...context(key),
        _path: `/blog/${key.replace('.json', '').replace('./', '')}`
      }));
      return { posts };
    }
  };
</script>
<style>
  .derniers-articles {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    grid-gap: 0px;
    max-width: 1170px;
    margin: 0 auto;
    margin-top: 0px;
    margin-top: -40px;
  }
  .centered-and-cropped {
    width: 100%;
  }
  .box {
  }
</style>
