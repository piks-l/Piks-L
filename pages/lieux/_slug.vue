<template>
  <main class="ea-layout-lieu">
    
    <h2 class="ea-titre">{{title}}</h2>
    
    <div class="lieux-item__image" :style="{ backgroundImage: `url(${thumbnail})` }"></div>
        
    <div class="lieu">        
        <div class="logo-maps"><i class="fas fa-map-marked-alt"></i><p><a target="_blank" :href="gmap">{{ adresse }}</a></p></div>
        <div class="logo-walk"><i class="fas fa-walking"></i><p><a target="_blank" :href="gmap">{{ direction }}</a></p></div>
    </div>
    
    <article class="ea-article-lieu">      
      <vue-markdown class="description">{{description}}</vue-markdown>
      <div class="web-site" >
        <a target="_blank"  v-for="s in social" :href="s.lien" :alt="s.texte">&#62; {{s.texte}}</a>
      </div>
      
    </article>
    
    <p class="title-grid">PROGRAMME</p>
    <div class="grid">        
        <div v-for="e in Evenement" :key="e.adresse" class="element-item">
          <nuxt-link :to="'/programmation/soiree-'+ e.adresse +'/'" >
             <p class="grid-date"><strong>{{e.dateh}}</strong></p>
             <div class="line"></div>
             <p class="grid-artistes"><strong>{{e.titr}}</strong></p>
          </nuxt-link>
        </div>
    </div>
    
  </main>
</template>
<script>
import $ from 'jquery'
import VueMarkdown from 'vue-markdown'
import VueLazyload from 'vue-lazyload'
export default {
  layout: 'default-mono',
  transition: { name: 'intro', mode: 'out-in' },
  components: { VueMarkdown, VueLazyload},
  async asyncData({ params }) {
    let page = await import('~/content/lieux/page/' + params.slug + '.json');
    return page;
  },
  head() {
    return {
      title: `${this.title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.description}` },
        { 'property': 'og:title', 'content': `${this.title}`, 'vmid': 'og:title' },
        { 'property': 'og:description', 'content': `${this.description}` },
        { 'property': 'og:image', 'content': `${this.thumbnail}`, 'vmid': 'og:image' }
      ]
    }
  },
  mounted() {
    this.eal();
  },
  methods: {
    eal() {
            var grid = new Isotope(".grid", {
              itemSelector: ".element-item"
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
};
</script>
