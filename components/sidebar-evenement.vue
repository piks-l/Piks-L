<template>
  <div class="right-side">
      <aside class="ea-sidebar-evenement">
          <p class="date-event">{{ datehumaine }}</p>
          <p class="date-time">{{ start }} > {{ end }}</p>
          <div class="reserver"><i class="fas fa-calendar"></i> <a href="#" alt="">PARTICIPER</a></div>
          <hr/>
          <nuxt-link class="link-map" :to="'/lieux/'+lieu"><i class="fas fa-map-marked-alt"></i> {{ lieu }}</nuxt-link>
          <hr/>        
      </aside>
      <nuxt-link class="retour" to="/programmation/"><b>PROGRAMMATION</b>RETOUR</nuxt-link>
  </div>
</template>
<script>
export default {
  props: [
    'datehumaine',
    'start',
    'end',
    'lieu'
  ]
},
  mounted() {
     $(".link-map").each(function() {
      var text = $(this).text();
      text = text.replace(/-/g, " + ");
      $(this).text(text);
    });
  }
</script>
