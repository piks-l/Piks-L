<template>
  <div class="page">
    <h2>PROGRAMMATION</h2>
    <div id="filters" class="button-group">  
      <button class="button is-checked" data-filter="*">show all</button>
      <button class="button" data-filter=".vendredi">Vendredi</button>
      <button class="button" data-filter=".samedi">Samedi</button>
    </div>
    <div id="filters2" class="button-group">  
      <button class="button is-checked" data-filter="*">show all</button>
      <button class="button" data-filter=".HARDCORE">Hardcore</button>
      <button class="button" data-filter=".TECHNO">Techno</button>
      <button class="button" data-filter=".TRANCE">Trance</button>
      <button class="button" data-filter=".HIPHOP">Hip Hop</button>
    </div>
    <div class="grid">
      <article v-for="artiste in artistes" :key="artiste.date" :data-category="artiste.dateshow+' '+artiste.stage" :class="artiste.dateshow+' '+artiste.stage" class="element-item">
          <nuxt-link class="title" :to="artiste._path">
            <div class="centrer" >
              <h3 class="name">{{artiste.title}}</h3>
              <img class="fontblur" v-lazy="artiste.thumbnail" :alt="artiste.title">
              <img class="artists-img" v-lazy="artiste.thumbnail" :alt="artiste.title">
            </div>  
          </nuxt-link>
      </article>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  // export
    import VueLazyload from 'vue-lazyload'
  // export
  export default {
    layout: 'default',
    components: { VueLazyload },
    head() {
      return {
        title: 'Electrobotik Invasion - le 2 & 3 Août 2019',
        meta: [
          { hid: 'description', name: 'description', content: 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:title', 'content': 'Electrobotik Invasion - le 2 & 3 Août 2019', 'vmid': 'og:title' },
          { 'property': 'og:description', 'content': 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:image', 'content': 'images/uploads/link_share.jpg', 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/artistes/page/', false, /\.json$/);
      const artistes = context.keys().map(key => ({
        ...context(key),
        _path: `/artistes/${key.replace('.json', '').replace('./', '')}`
      }));
      return { artistes };
    },
    asyncData() {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve({})
        }, 1000)
        console.log('document ready 2!')
      })
    },
     mounted() {
        setTimeout(() => {
          // Extend loader for an additional 5s
          this.$nuxt.$loading.finish()
        }, 5000)
        console.log('document ready 3!')
        var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  // Filter button
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  $('#filters2').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  // Change is-checked class on buttons
  $('.button-date, .button-stage').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
      });
});
      }
  }
</script>
<style>
  @media only screen and (min-width:960px) and (max-width:1264px){}
  @media only screen and (min-width:600px) and (max-width:959px){}
  @media only screen and (max-width:599px){}
</style>
