<template>
  <main class="ea-layout-artiste">
    <h2 class="ea-titre">{{title}}</h2>
    <p class="info-secondaire">{{ label }} (<i>{{ langue }})</i></p>
    <div class="artistes-item__image" :style="{ backgroundImage: `url(${thumbnail})` }"></div>
    <vue-markdown class="iframe">{{iframe}}</vue-markdown>    
    <div class="lieu">  
        <div class="logo-maps"><p>{{ label }}</p></div>
        <div class="logo-walk"><p>{{ langue }}</p></div>
    </div>
    
    <article class="ea-article-lieu">
      
      <vue-markdown class="description">{{description}}</vue-markdown>
      
      <div class="web-site" >
        <a target="_blank"  v-for="s in social" :href="s.lien" :alt="Social"><i :class="s.awesome"></i></a>
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
  layout: 'simple',
  transition: { name: 'intro', mode: 'out-in' },
  components: { VueMarkdown, VueLazyload},
  async asyncData({ params }) {
    let page = await import('~/content/artistes/page/' + params.slug + '.json');
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
<style>
.artistes-item__image {
  height: 350px;
  position: relative;
  margin-top: -40px;
  z-index: 0;
  background-position: center center;
  background-size: cover;
}
.info-secondaire {
  top: -100px;
  position: relative;
}
</style>
