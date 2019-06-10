<template>
  <aside class="ea-sidebar-evenement">
    <p class="date-event">{{ datehumaine }}</p>
    <p class="date-time">{{ start }} > {{ end }}</p>
    <div class="reserver"><i class="fas fa-calendar"></i> <a href="#" alt="">PARTICIPER</a></div>
    <hr/>
    <nuxt-link class="link-map" :to="'/lieux/'+lieu"><i class="fas fa-map-marked-alt"></i> {{ lieu }}</nuxt-link>
    <hr/>
    <nuxt-link class="retour" to="/programmation/"><b>PROGRAMMATION</b>RETOUR</nuxt-link>
  </aside>
</template>
<script>
export default {
  props: [
    'datehumaine',
    'start',
    'end',
    'lieu'
  ]
}
</script>
