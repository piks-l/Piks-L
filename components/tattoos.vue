<template>
    <div class="equipes">
      <div class="container">
          <div class="wrapper">
              <article v-for="tattoo in tattoos.slice().reverse()" :key="tattoo.date">  
                  <nuxt-link class="title" :to="tattoo._path">
                    <div class="thumb">
                        <img :src="tattoo.thumbnail" :alt="tattoo.title">
                        <svg class="svgtilt" width="100%" height="100%">
                          <rect x="5%" y="5%" width="90%" height="90%" />
                        </svg>
                    </div>
                  </nuxt-link>
              </article>
          </div>
      </div>
    </div>
</template>

<style>
  .wrapper {
      grid-template-columns: 25% 25% 25% 25%;
      display: grid;
  }
  .equipes .container {
      padding: 30px 0; 
  }
  .equipes article {
      padding: 15px 15%;
  }
  .equipes .thumb {
      height: 250px;
      position: relative;
      overflow: hidden;
  }
  .equipes .thumb img {
      height: 100%;
      width: auto;
      position: relative;
  }
  .equipes .svgtilt {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
  }
  .equipes .svgtilt rect {
      fill: white;
      stroke: white;
      stroke-width: 0;
      fill-opacity: 0;
      stroke-opacity: 1;
      -webkit-transition: 0.4s all ease;
      transition: 0.4s all ease;
  }
  .equipes .thumb:hover .svgtilt rect {
      stroke-width: 5;
  }
  .equipes .title {
      margin: 0 auto;
      width: 100%;
      text-align: center;
      display: block;
      font-size: 32px;
      color: black;
      text-decoration: none;
  }
  @media only screen and (min-width:960px) and (max-width:1264px){
      .equipes article {
          padding: 15px 10%;
      }
  }  
  @media only screen and (min-width:600px) and (max-width:959px){
      .wrapper {
          display: block;
          grid-template-columns: none;
          width: 100%;
      }
      .equipes article {
          padding: 15px;
          width: 33%;
          display: inline-block;
      }
      .equipes .title {
          margin: 0 auto;
          width: auto;
          display: inline-grid;
          position: relative;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
      }
      .equipes h3 {
          font-size: 30px;
      }
  }
  @media only screen and (max-width:599px){
      .wrapper {
          display: block;
          grid-template-columns: none;
          width: 100%;
      }
      .equipes article {
          padding: 30px 15px;
      }
      .equipes .title {
          margin: 0 auto;
          width: auto;
          display: inline-grid;
          position: relative;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
      }
      .equipes h3 {
          font-size: 30px;
      }
  }
</style>

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
