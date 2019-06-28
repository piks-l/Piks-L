<template>
  <div class="menu">
      <div class="black-line"><div class="close">Navigation</div></div>
      <nav>
          <ul class="nav">
            <li><a href="actualites.html" class="menu-link">ACTUALITES</a></li>
            <li><a href="#" class="color-red menu-link">RESIDENCES</a></li>
            <li><a href="#" class="color-red menu-link">COLLOQUES</a></li>
            <li><a href="factory.html" class="color-blue menu-link">FACTORY</a></li>
            <li><a href="#" class="color-yellow menu-link">HORS LES MURS</a></li>
            <li><a href="#" class="menu-link">EXPOSITIONS</a></li>
            <li><a href="editions.html" class="color-red menu-link">EDITIONS</a></li>
            <li><a href="films.html" class="color-red menu-link">FILMS</a></li>
            <li><a href="#" class="menu-link">STUDIES</a></li>
            <li><a href="#" class="menu-link">PARTENAIRES</a></li>
            <li><a href="#" class="menu-link">INFOS - CONTACTS</a></li>
          </ul>
      </nav>
  </div>
</template>
<script>
  import $ from 'jquery'
  import uiLogo from '~/components/ui/logo.vue'
  import uiSocial from '~/components/social.vue'
  export default {
    components: {
      uiLogo,
      uiSocial,
    },
    mounted: () => {
      
      $( ".menu-select" ).click(function() {
        $( "header" ).addClass( "open" );
      });
      $( ".close, .menu-link" ).click(function() {
        $( "header" ).removeClass( "open" );
      });

    } // Mounted end
  } // Export end
</script>
