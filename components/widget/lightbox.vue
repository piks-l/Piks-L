<template>
  <div class="lightbox">
      <div class="diaporama">
          <div class="image-lightbox">
            <img class="selected" src="https://www.piks-l.com/img/5.jpg">
          </div>
          <div class="image-lightbox">
            <img class="selected" src="https://www.piks-l.com/img/4.jpg">
          </div>
          <div class="image-lightbox">
            <img class="selected" src="https://www.piks-l.com/img/3.jpg">
          </div>
      </div>
      <div id="lightbox-full" class="modal">
          <span class="close-lightbox cursor">&times;</span>
          <div class="lightbox-content">
            <div class="full-lightbox">
                <img class="selected" src="https://www.piks-l.com/img/5.jpg">
            </div>
            <div class="full-lightbox">
                <img class="selected" src="https://www.piks-l.com/img/4.jpg">
            </div>
            <div class="full-lightbox">
                <img class="selected" src="https://www.piks-l.com/img/3.jpg">
            </div>
            <a class="prev-full-lightbox">&#10094;</a>
            <a class="next-full-lightbox">&#10095;</a>
          </div>
          <div class="caption-container">
              <p id="caption"></p>
          </div>
      </div>
  </div>
</template>
<script>
  // Library
  import $ from 'jquery'
  import VueLazyload from 'vue-lazyload'

  export default {
    components: { VueLazyload },
    data() {
      return {
        lightboxIndex: 1
      }
    },
    mounted() {
      this.$Lazyload.$on('loaded', function ({ el, src, listener }) {
        $(el).addClass("loaded");
        console.table(this.$Lazyload.performance())
      });
      this.lightbox();
    },
    methods: {
      lightbox() {
        var count = 0;
        var lightboxIndex = 1;
        console.log(lightboxIndex);
        $('.image-lightbox').each( function( ) {
            count += 1;
            $(this).find( "img" ).attr('data-slide', count);
        });
        $('.close-lightbox').on( 'click', function() {
            $("#lightbox-full").css('display','none');
        });
        $('.image-lightbox').on( 'click', function() {
            $("#lightbox-full").css('display','block');
            lightboxIndex = $(this).find( "img" ).attr("data-slide");
            showLightbox(lightboxIndex);
            console.log(lightboxIndex);
        });
        $('.prev-full-lightbox').on( 'click', function() {
            showLightbox(lightboxIndex -= 1);
            console.log(lightboxIndex);
        });
        $('.next-full-lightbox').on( 'click', function() {
            showLightbox(lightboxIndex += 1);
            console.log(lightboxIndex);
        });
        function showLightbox(n) {
          var i;
          var light = document.getElementsByClassName("full-lightbox");
          var dots = document.getElementsByClassName("selected");
          var captionText = document.getElementById("caption");
          if (n > light.length) {lightboxIndex = 1}
          if (n < 1) {lightboxIndex = light.length}
          for (i = 0; i < light.length; i++) {
            light[i].style.display = "none";
          }
          light[lightboxIndex-1].style.display = "block";
          captionText.innerHTML = dots[lightboxIndex-1].alt;
        }
      }
    }
  }
</script>
<style scoped>
/** WIDGET - LIGHTBOX */
  /* Diaporama */
  .diaporama .image-lightbox {
	    margin: 15px;
	    display: inline-block;
	    /* width: calc(50% - 30px); */
	    overflow: hidden;
	    height: 25vh;
	    position: relative;
			background:#e9e9e9;
	}
	.diaporama img {
			max-width: 100%;
			position: relative;
			display: block;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: auto;
			height: auto;
			max-height: 100%;
	}
  /* lightbox Full */
  .lightbox-content {
  	  position: relative;
  	  background-color:transparent;
  	  margin: auto;
  	  padding: 0;
  	  width: 60%;
  		top: 50%;
  		transform: translatey(-50%);
  		height: 100%;
  }
  .full-lightbox {
      display: none;
      height: 100%;
  }
  .full-lightbox img {
      max-height: calc(100vh - 100px);
      max-width: 100%;
      top: 50%;
      left: 50%;
      position: relative;
      transform: translate(-50%, -50%);
  }
  .caption-container {
      text-align: center;
      background-color: transparent;
      padding: 0;
      color: var(--color-3);
      font-size: initial;
      position: fixed;
      bottom: 15px;
      width: 60%;
      left: 50%;
      transform: translateX(-50%);
  }
  #caption {
      margin: 0;
      line-height: 35px;
  }
  /* lightbox Nvigation */
  .close-lightbox {
      color: #000;
      position: absolute;
      top: 10px;
      right: 50px;
      font-size: 70px;
      font-weight: lighter;
      text-transform: unset;
  }
  .close-lightbox:hover,
  .close-lightbox:focus {
  	  color: #999;
  	  text-decoration: none;
  	  cursor: pointer;
  }
  .prev-full-lightbox,
  .next-full-lightbox {
  	  cursor: pointer;
  	  position: absolute;
  	  top: 50%;
  	  width: auto;
  	  padding: 16px;
  	  transform: translateY(-50%);
  	  color: #000;
  	  font-weight: bold;
  	  font-size: 70px;
  	  transition: 0.6s ease;
  	  border-radius: 0 3px 3px 0;
  	  user-select: none;
  	  -webkit-user-select: none;
  }
  .prev-full-lightbox {
  	  left: -100px;
  }
  .next-full-lightbox {
  	  right: -100px;
  	  border-radius: 3px 0 0 3px;
  }
  .prev-full-lightbox:hover,
  .next-full-lightbox:hover {
  	  color: #999;
  }
</style>
