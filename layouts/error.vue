<template>
 <div class="error">
  <div v-if="error.statusCode === 404">
    <h3>404</h3>
    <h2>La page que vous cherchez n'existe pas.</h2>
    <nuxt-link to="/">Retour au site !</nuxt-link>
  </div>
  <div v-else>
    <h3>@&7/*-Q</h3>
    <h2>Une erreur est survenue !</h2>
    <nuxt-link to="/">Retour au site !</nuxt-link>
  </div>
 </div>   
</template>
<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>
