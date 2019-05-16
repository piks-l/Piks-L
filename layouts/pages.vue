<template>
  <div class="layout-electrobotik">
    <electrobotik-menu/>
    <nuxt/>
    <electrobotik-footer/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import electrobotikMenu from '~/components/ui/menu.vue'
  import electrobotikFooter from '~/components/ui/footer.vue'
  export default {
      transition: 'page',
      components: {
          electrobotikMenu,
          electrobotikFooter
      },
      mounted: () => {
      }
  }
</script>
