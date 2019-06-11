<template>
  <div class="right-side">
      <aside class="ea-sidebar-evenement">
          <p class="date-event">{{ datehumaine }}</p>
          <p class="date-time">{{ start }} > {{ end }}</p>
          <div class="reserver"><i class="fab fa-facebook-square"></i> <a target="_blank" href="'https://www.facebook.com/events/'+ idfb" alt="Événement Facebook">PARTICIPER</a></div>
          <hr/>
          <div class="link-map"><i class="fas fa-map-marked-alt"></i><nuxt-link :to="'/lieux/'+lieu">{{ lieu }}</nuxt-link></div>
          <hr/>
          <nuxt-link class="retour" to="/programmation/"><b>PROGRAMMATION</b>RETOUR</nuxt-link>

      </aside>
  </div>
</template>
<script>
export default {
  props: [
    'datehumaine',
    'start',
    'end',
    'lieu'
  ],
  mounted() {
     $(".link-map a").each(function() {
      var text = $(this).text();
      text = text.replace(/-/g, " ");
      $(this).text(text);
    });
  }
}
</script>
