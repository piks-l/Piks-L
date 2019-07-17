<template>
  <div class="menu">
      <div class="black-line"><div class="close">Navigation</div></div>
      <nav>
          <ul class="nav">
            <li><nuxt-link to="/actualites/" class="menu-link">ACTUALITES</nuxt-link></li>
            <li><nuxt-link to="/" class="color-red menu-link">RESIDENCES</nuxt-link></li>
            <li><nuxt-link to="/" class="color-red menu-link">COLLOQUES</nuxt-link></li>
            <li><nuxt-link to="/factory/" class="color-blue menu-link">FACTORY</nuxt-link></li>
            <li><nuxt-link to="/hors-les-murs/" class="color-yellow menu-link">HORS LES MURS</nuxt-link></li>
            <li><nuxt-link to="/expositions/" class="menu-link">EXPOSITIONS</nuxt-link></li>
            <li><nuxt-link to="/editions/" class="color-red menu-link">EDITIONS</nuxt-link></li>
            <li><nuxt-link to="/films/" class="color-red menu-link">FILMS</nuxt-link></li>
            <li><nuxt-link to="/" class="menu-link">STUDIES</nuxt-link></li>
            <li><nuxt-link to="/" class="menu-link">PARTENAIRES</nuxt-link></li>
            <li><nuxt-link to="/" class="menu-link">INFOS - CONTACTS</nuxt-link></li>
          </ul>
      </nav>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    components: {},
    mounted: () => {
      $( ".menu-select" ).click(function() {
        $( "header" ).addClass( "open" );
      });
      $( ".close, .menu-link, .logo-link" ).click(function() {
        $( "header" ).removeClass( "open" );
      });
    }
  }
</script>
