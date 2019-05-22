<template>
  <div class="container">

      <nuxt-link to="/" class="header-link" ><img id="logo" class="partenaires" src="https://electrobotik.netlify.com/images/logo.svg"  alt="logo"></nuxt-link>
      <nuxt-link to="/" class="header-link" ><img class="small-logo partenaires" src="https://electrobotik.netlify.com/images/logo-horizontal.svg" alt="logo"></nuxt-link>
      <div class="container-contact">
          <div class="press">
              <div class="circle-contact">
                  <a href="#" alt="">DOWNLOAD PRESS KIT</a>
              </div>
          </div>
          <div class="contact-info">
              <div class="margin-bottom">
                  <p class="title-contact">informations :</p>
                  <a href="mailto:contact@electrobotikinvasion.com">contact@electrobotikinvasion.com</a>
              </div>
              <div class="margin-bottom">
                  <p class="title-contact">partenariat :</p>
                  <a href="mailto:Remi.marandola@gmail.com">Remi.marandola@gmail.com</a>
              </div>
              <div class="margin-bottom">
                  <p class="title-contact">stands :</p>
                  <a href="mailto:anna.electrobotik@gmail.com">anna.electrobotik@gmail.com</a>
              </div>
              <div class="margin-bottom">
                  <p class="title-contact">communication :</p>
                  <p>Thibault Ducom</p>
                  <a href="mailto:thibault@asso-regarts.com">thibault@asso-regarts.com</a>
              </div>
              <div class="margin-bottom">
                  <p class="title-contact">relations presse :</p>
                  <p>Mina Forouhar</p>
                  <a href="mailto:mina@asso-regarts.com">mina@asso-regarts.com</a>
              </div>
          </div>
      </div>
   </div>     
</template>
<script>
  import $ from 'jquery'
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
    mounted () {	
     
    }
  }
</script>
