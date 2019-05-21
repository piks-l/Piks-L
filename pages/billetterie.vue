<template>
  <div class="page ticket">
     <nuxt-link to="/" class="header-link" ><img id="logo" class="partenaires" src="https://electrobotik.netlify.com/images/logo.svg"  alt="logo"></nuxt-link>
     <nuxt-link to="/" class="header-link" ><img class="small-logo partenaires" src="https://electrobotik.netlify.com/images/logo-horizontal.svg" alt="logo"></nuxt-link>
     <div class="container-infos scene_element scene_element--fadein">
        <h2>BILLETTERIE</h2>
     </div>
     <div class="slide">
         <div class="container">
            <div class="color">
                <p>Electrobotik Invasion utilise une billeterie dématérialisée en coopération avec notre nouveau partenaire Festik. 
                Ne dévoilez jamais votre code barre sur les réseaux au risque de vous faire pirater votre billet. En cas de rachat 
                de billet, utilisez les plateformes sécurisées de revente pour être certains de ne pas acquérir une cntrefaçon ! 
                Méfiez-vous également du marché noir !</p>
            </div>
            <div class="vignette voiture">
                <div class="center">
                    <p class="gras large">PASS 2 JOURS</p>
                    <p class="gras">AVEC CAMPING</p>
                    <p class="gras price">85€</p>
                    <p class="loc">Frais de loc inclus</p>
                </div>
            </div><!--
            --><div class="vignette avion">
                <div class="center">
                    <p class="gras large">PASS 2 JOURS</p>
                    <p class="gras">SANS CAMPING</p>
                    <p class="gras price">75€</p>
                    <p class="loc">Frais de loc inclus</p>
                </div>
            </div><!--
            --><div class="vignette train">
                <div class="center">
                    <p class="gras large">TICKET 1 JOUR</p>
                    <p class="gras">VEN. ou SAM.</p>
                    <p class="gras price">40€</p>
                    <p class="loc">Frais de loc inclus</p>
                </div>
            </div>
            <div class="no-color">
                <p class="gras">ZONE CAMPING : BAR, ANIMATION & SCENE AVEC <nuxt-link to="/" class="artiste-link2" >TALOWA DUB CLUB</nuxt-link></p>
            </div>
         </div>
      </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  // export
  export default {
    layout: 'default',
    components: { },
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
