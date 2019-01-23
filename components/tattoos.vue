<template>
    <div class="equipes">
      <div class="container">
          <div class="wrapper">
              <article v-for="tattoo in tattoos.slice().reverse().slice(0,4)" :key="tattoo.date">  
                  <nuxt-link class="title" :to="tattoo._path">
                    <div class="thumb">
                        <img v-lazy="tattoo.thumbnail" :alt="tattoo.title">
                    </div>
                  </nuxt-link>
              </article>
          </div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      const context = require.context('~/content/tattoos/page/', false, /\.json$/);
      const tattoos = context.keys().map(key => ({
        ...context(key),
        _path: `/tattoos/${key.replace('.json', '').replace('./', '')}`
      }));
      return { tattoos };
    }
  };
</script>
