<template>
  <main>
      <div class="container">
          <ea-titre/>
          <div id="filters">
          <div class="button-type button-group"  data-filter-group="type">
              <button class="button is-checked" data-filter="*">ALL</button>
              <button class="button" data-filter=".jour">Jour</button>
              <button class="button" data-filter=".soiree">Soirée</button>
              <button class="button" data-filter=".nuit">Nuit</button>
          </div>
          <div class="button-semaine button-group"  data-filter-group="semaine">
              <button class="button active" data-filter=".semaine1"><span>Semaine</span> 1</button>
              <button class="button active" data-filter=".semaine2"><span>Semaine</span> 2</button>
              <button class="button active" data-filter=".semaine3"><span>Semaine</span> 3</button>
              <button class="button active" data-filter=".semaine4"><span>Semaine</span> 4</button>
              <button class="button any" data-filter=""></button>
          </div>
          </div>
          <div class="grid">
              <div class="stamp stamp1"></div>
              <div class="stamp stamp2"></div>
              <div v-for="event in programmation" :key="event.date"  :class="event.type+' '+event.semaine" class="element-item">
                   <nuxt-link :to="event._path+'/'">
                     <p class="grid-date"><strong>{{event.dateevents}}</strong></p>
                     <p class="grid-time">{{event.start}} &rsaquo; {{event.end}}</p>
                     <p class="grid-artistes" v-for="artist in event.groupes" :key="artist.artiste">{{artist.artiste}}</p>
                     <p class="grid-lieu">{{event.lieu}}</p>
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
    head() {
      return {
        title: 'Programmation | Electrobotik Invasion - le 2 & 3 Août 2019',
        meta: [
          { hid: 'description', name: 'description', content: 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:title', 'content': 'Electrobotik Invasion - le 2 & 3 Août 2019', 'vmid': 'og:title' },
          { 'property': 'og:description', 'content': 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:image', 'content': 'images/uploads/link_share.jpg', 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/programmation/page/', false, /\.json$/);
      const programmation = context.keys().map(key => ({
        ...context(key),
        _path: `/programmation/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        programmation,
        grid: null
      };
    },
  mounted() {
    this.ea();
  },
  methods: {
    ea() {
            var grid = new Isotope(".grid", {
              itemSelector: ".element-item",
              stamp: $grid.find('.stamp')
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
                $buttonGroup.on( 'click', 'button', function( event ) {
                  $buttonGroup.find('.is-checked').removeClass('is-checked');
                  var $button = $( event.currentTarget );
                  $button.addClass('is-checked');
                });
            });
            $( ".button-type button" ).click(function() {
              $( ".button-semaine .any" ).click();
              $('.button-semaine button').each( function() {
                  $( this ).addClass( "active" );
                  $( ".button-type" ).removeClass( "mobile-active" );
              });
            });
            $( ".button-semaine button" ).click(function() {
              $('.button-semaine button').each( function() {
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
