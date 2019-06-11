<template>
  <main class="black">
      <div class="container">
          <ea-titre/>
          <div class="grid">
              <div class="stamp stamp1"></div>
              <div class="stamp stamp2"></div>
              <div v-for="lieu in lieux" :key="lieu.url" class="element-item">
                   <nuxt-link :to="lieu._path+'/'" >
                     <p class="grid-artistes"><strong>{{lieu.title}}</strong></p>

                  </nuxt-link>
              </div>
          </div>
      </div>
  </main>
</template>
<script>
  // import
  let Isotope;
  if (process.browser) { Isotope = require("isotope-layout"); }
  import $ from 'jquery'
  import VueLazyload from 'vue-lazyload'
  import eaTitre from '~/components/titre.vue'
  // export
export default {
    layout: 'default',
    components: { VueLazyload, eaTitre },
    transition: { name: 'outro', mode: 'out-in' },
    head() {
      return {
        title: 'Lieux | Electrobotik Invasion - le 2 & 3 Août 2019',
        meta: [
          { hid: 'description', name: 'description', content: 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:title', 'content': 'Electrobotik Invasion - le 2 & 3 Août 2019', 'vmid': 'og:title' },
          { 'property': 'og:description', 'content': 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:image', 'content': 'images/uploads/link_share.jpg', 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/lieux/page/', false, /\.json$/);
      const lieux = context.keys().map(key => ({
        ...context(key),
        _path: `/lieux/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        lieux,
        grid: null
      };
    },
  mounted() {
      this.ea();
      $(".grid-lieu, .grid-artistes strong").each(function() {
          var text = $(this).text();
          text = text.replace(/-/g, " ");
          $(this).text(text);
      });
      
      
  },
  destroyed() {
  },
  methods: {
    ea() {
            var grid = new Isotope(".grid", {
              itemSelector: ".element-item",
              stamp: '.stamp'
            });
            // store filter for each group
            var filters = {};

            $('#filters').on( 'click', '.button', function( event ) {
                var $button = $( event.currentTarget );
                // get group key
                var $buttonGroup = $button.parents('.button-group');
                var filterGroup = $buttonGroup.attr('data-filter-group');
                // set filter for group
                filters[ filterGroup ] = $button.attr('data-filter');
                // combine filters
                var filterValue = concatValues( filters );
                // set filter for Isotope
                grid.arrange({ filter: filterValue });
            });

            // change is-checked class on buttons
            $('.button-group').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'button', function( event ) {
                  $buttonGroup.find('.is-checked').removeClass('is-checked');
                  var $button = $( event.currentTarget );
                  $button.addClass('is-checked');
                });
            });
            $('.button-group').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', '.button', function( event ) {
                  $buttonGroup.find('.is-checked').removeClass('is-checked');
                  var $button = $( event.currentTarget );
                  $button.addClass('is-checked');
                });
            });
            $( ".button-type .button" ).click(function() {
              $( ".button-semaine .any" ).click();
              $('.button-semaine .button').each( function() {
                  $( this ).addClass( "active" );
                  $( ".button-type" ).removeClass( "mobile-active" );
              });
            });
            $( ".button-semaine .button" ).click(function() {
              $('.button-semaine .button').each( function() {
                  $( this ).removeClass( "active" );
                  $( ".button-semaine" ).removeClass( "mobile-active" );
              });
            });
            
            
            // flatten object by concatting values
            function concatValues( obj ) {
                var value = '';
                for ( var prop in obj ) {
                  value += obj[ prop ];
                }
                return value;
            }
            grid.layout();
    }
  }
}
</script>
