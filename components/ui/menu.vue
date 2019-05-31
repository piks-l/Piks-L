<template>
  <div>
          <div class="menu scene_element scene_element--fadeindown">
          <div class="slash1"></div>
          <div class="slash2"></div>
          <div class="menu-content">
              <nuxt-link class="menu-link" to="/"><ea-logo/></nuxt-link>
              <div class="menu-info">
                 <div class="navigation">
                    <ul class="nav">
                      <li><nuxt-link class="menu-link" to="/festival/">LE FESTIVAL</nuxt-link></li>
                      <li><nuxt-link class="menu-link" to="/">PROGRAMMATION</nuxt-link></li>
                      <li><nuxt-link class="menu-link" to="/artistes/">ARTISTES</nuxt-link></li>
                      <li><nuxt-link class="menu-link" to="/">BILLETTERIE</nuxt-link></li>
                      <li><nuxt-link class="menu-link" to="/lieux/">LIEUX</nuxt-link></li>
                      <li><nuxt-link class="menu-link" to="/">MERCH</nuxt-link></li>
                      <li><nuxt-link class="menu-link" to="/">CONTACTS</nuxt-link></li>
                      <li><nuxt-link class="menu-link" to="/">PARTENAIRES</nuxt-link></li>
                    </ul>
                </div>
              </div>
          </div>

          <div class="close">
  					  <div class="left"></div>
              <div class="right"></div>
  				</div>
      </div>
      <button class="open-menu"><span>Menu</span></button>
</div>
</template>
<script>
  import $ from 'jquery'
  import eaLogo from '~/components/ui/logo.vue'
  export default {
    components: {
      eaLogo
    },
    mounted: () => {
        $( ".open-menu" ).click(function() { $( ".menu" ).addClass( "open" ); });
        $( ".close, .menu-link" ).click(function() { $( ".menu" ).removeClass( "open" ); });
        console.log('Menu ready!')
    } // Mounted end
  } // Export end 
</script>
<style>
</style>
