<template>
  <aside class="ea-sidebar-evenement">
    <p class="date-event">{{ datehumaine }}</p>
    <p class="date-time">{{ start }} > {{ end }}</p>
    <div class="reserver"><i class="fas fa-calendar-day"></i> <a href="#" alt="">PARTICIPER</a></div>
    <nuxt-link class="link-map" :to="'/lieux/'+lieu"><i class="fas fa-map-marked-alt"></i> {{ lieu }}</nuxt-link>
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
