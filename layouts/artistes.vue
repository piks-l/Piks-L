<template>
  <div>
    <cdm-navbar/>
    <nuxt/>
    <cdm-footer/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import cdmNavbar from '~/components/navbar.vue'
  import cdmFooter from '~/components/ui/footer.vue'
  export default {
      transition: 'page',
      components: {
          cdmNavbar,
          cdmFooter
      },
      head: {
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Slabo+27px' }
        ]
      },
      mounted: () => {
          $("#navbar").addClass('hidden');
      }
  }
</script>
<style>
  .page-enter-active, .page-leave-active {
    transition: all .5s ease;
  }
  .page-enter-active .vertical-center, .page-leave-active .vertical-center {
    transition: all 3s ease;
    padding: 500px 0!important;
    position: relative;
  }
  .page-enter, .page-leave-active {
    opacity: 0;
    filter:blur(100px);
  }
  .page-enter .vertical-center, .page-leave .vertical-center {
    position: relative;
    padding: 70px 0!important;
  }
  html {
    font-family: 'Domine', serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: titaniaregular;
  }
  body{
    background:#000;
  }
  h2 {
      font-size: 72px;
      line-height: 1.11em;
      color: #000;
      font-weight: 900;
  }
  .sa {
      padding: 0 30px;
  }
  .container {
      background: #fff;
      padding: 30px;
      margin: 40px auto;
      max-width: 1170px;
  }
  .border{
      text-align:center;
      border-color: #e6e6e6 !important;
      border-style: double inset !important;
      border-width: 7px 0 !important;
  }
  .border.black{
      border-color: #151515 !important;
  }
  .black{
    background:#000;
    color:#fff;
  }
  .border.black p b {
    color: #fff;
  }
  .border .h2 {
      font-size: 72px;
      line-height: 1.11em;
      font-weight: 900;
      font-family: 'titaniaregular', serif;
  }
  .black h2, .black p{
      color:#fff;
  }
  .border p{
      color:rgb(128, 128, 128);
      font-size:22px;
  }
  .border p b{
      color:#000;
      font-size:22px;
      font-family: "titaniaregular",serif;
      font-weight: 400;
      line-height: 30px;
  }
  
  a:hover {
      color: #000;
      text-decoration: none;
  }
  .black a:hover, .black a {
      color: #fff;
      text-decoration: none;
  }
  .underline {
    width: calc(100%);
    background-image: linear-gradient(transparent calc(100% - 15px), red 10px);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position:-3px;
    transition: background-size 1s;
  }

  .underline:hover {
    background-size: 100% 100%;
  }
</style>
