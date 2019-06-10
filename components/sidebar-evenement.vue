<template>
  <aside class="ea-sidebar-evenement">
    <p>{{ datehumaine }}</p>
    <p>{{ start }} > {{ end }}</p>
    <nuxt-link class="link-lieux" :to="'/lieux/'+lieu"><i class="fas fa-map-marked-alt"></i> {{ lieu }}</nuxt-link>
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
