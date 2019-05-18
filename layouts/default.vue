<template>
  <div class="layout-electrobotik">
    <electrobotik-menu/>
    <electrobotik-header/>
    <nuxt/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import electrobotikMenu from '~/components/ui/menu.vue'
  import electrobotikHeader from '~/components/ui/header.vue'
  import electrobotikFooter from '~/components/ui/footer.vue'
  export default {
      transition: 'page',
      components: {
          electrobotikMenu,
          electrobotikHeader
      },
      mounted: () => {
      }
  }
</script>
