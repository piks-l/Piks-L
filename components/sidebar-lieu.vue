<template>
  <div class="right-side">
      <aside class="ea-sidebar-evenement">
          <div class=""><i class="fas fa-map-marked-alt"></i><p><a target="_blank" :href="gmap">{{ adresse }}</a></p></div>
          <hr/>
          <div class=""><i class="fas fa-walking"></i><p>{{ direction }}</p></div>
          <hr/>
          <nuxt-link class="retour" to="/lieux/"><b>LIEUX</b>RETOUR</nuxt-link>

      </aside>
  </div>
</template>
<script>
export default {
  props: [
    'gmap',
    'adresse',
    'direction'
  ],
  mounted() {
  }
}
</script>
