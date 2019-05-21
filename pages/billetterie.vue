<template>
  <div class="page">
     <nuxt-link to="/" class="header-link" ><img id="logo" class="partenaires" src="https://electrobotik.netlify.com/images/logo.svg"  alt="logo"></nuxt-link>
     <nuxt-link to="/" class="header-link" ><img class="small-logo partenaires" src="https://electrobotik.netlify.com/images/logo-horizontal.svg" alt="logo"></nuxt-link>
     <div class="container-infos scene_element scene_element--fadein">
        <h2>billetterie</h2>
     </div>
     <div class="container">
        <div class="color">
            <p>Electrobotik Invasion utilise une billeterie dématérialisée en coopération avec notre nouveau partenaire Festik. 
            Ne dévoilez jamais votre code barre sur les réseaux au risque de vous faire pirater votre billet. En cas de rachat 
            de billet, utilisez les plateformes sécurisées de revente pour être certains de ne pas acquérir une cntrefaçon ! 
            Méfiez-vous également du marché noir !</p>
        </div>
        <div class="vignette">
            <div class="center">
                <p class="gras">pass 2 jours</p>
                <p class="gras">avec camping</p>
                <p class="gras price">85€</p>
                <p>Frais de loc inclus</p>
            </div>
        </div><!--
        --><div class="vignette">
            <div class="center">
                <p class="gras">pass 2 jours</p>
                <p class="gras">sans camping</p>
                <p class="gras price">75€</p>
                <p>Frais de loc inclus</p>
            </div>
        </div><!--
        --><div class="vignette">
            <div class="center">
                <p class="gras">ticket 1 jour</p>
                <p class="gras">ven. ou sam.</p>
                <p class="gras price">40€</p>
                <p>Frais de loc inclus</p>
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
