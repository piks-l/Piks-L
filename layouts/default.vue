<template>
  <div>
    <influx-menu/>
    <influx-header/>
    <nuxt/>
    <influx-footer/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import influxMenu from '~/components/ui/menu.vue'
  import influxHeader from '~/components/ui/header.vue'
  import influxFooter from '~/components/ui/footer.vue'
  export default {
      transition: 'page',
      components: {
          influxMenu,
          cdmHeader,
          influxFooter
      },
      mounted: () => {
          $("#navbar").removeClass('hidden');
      }
  }
</script>
<style>
/* Import */
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900');

/* Général */
body {
	--color-text: #ffffff;
	--color-bg: #252525;
	--color-link: #ffffff;
	--color-link-hover: #ffb413;
  --color-bg-item1: #212121;
  --color-bg-item2: #000000;
  --color-bg-item3: #212121;
  --color-bg-item4: #151515;
  --color-bg-item5: #000000;
  --color-item-alt: #525252;
  --color-quote: #ffffff;
  --color-info: #cccccc;
	--color-title: #e23434;
	--color-tagline: #e2e2e2;
	font-family: 'Playfair Display', serif;
	min-height: 100vh;
	color: #57585c;
	color: var(--color-text);
	background-color: #fff;
	background-color: var(--color-bg);
	padding: 6rem 0 0 0;
  margin:0;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

html {
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-weight:400;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  font-weight:900;
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
      font-family: 'Playfair Display', serif;
  }
  .black h2, .black p{
      color:#fff;
  }
  .border p{
      color: grey;
      font-size: 18px;
      line-height: 1.7;
  }
  .border p b{
      color:#000;
      font-size:22px;
      font-family: 'Playfair Display', serif;
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
  .underline {
    width: calc(100%);
    background-image: linear-gradient(transparent calc(100% - 15px), red 10px);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position:-3px;
    transition: background-size 1s;
  }
  .content-blog .underline {
    background-image: linear-gradient(transparent calc(100% - 15px), grey 10px);
  }
  .underline:hover {
    background-size: 100% 100%;
  }
  @media only screen and (min-width:960px) and (max-width:1264px){
  
  }
  @media only screen and (min-width:600px) and (max-width:959px){
  
  }
  @media only screen and (max-width:599px){
    h2 {
        font-size: 50px;
        line-height: 1em;
        margin-bottom: 15px;
    }
    .container {
        padding: 30px 15px;
    }
  }
</style>
