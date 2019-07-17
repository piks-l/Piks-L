<template>
  <div class="lightbox">
      <div class="diaporama">
          <div class="image-lightbox">
            <img class="selected" src="https://placeimg.com/400/400/any1">
          </div>
          <div class="image-lightbox">
            <img class="selected" src="https://placeimg.com/400/400/any2">
          </div>
          <div class="image-lightbox">
            <img class="selected" src="https://placeimg.com/400/400/any3">
          </div>
      </div>
      <div id="lightbox-full" class="modal">
          <span class="close-lightbox cursor">&times;</span>
          <div class="lightbox-content">
            <div class="full-lightbox">
                <img class="selected" src="https://placeimg.com/1000/1000/any1">
            </div>
            <div class="full-lightbox">
                <img class="selected" src="https://placeimg.com/1000/1000/any2">
            </div>
            <div class="full-lightbox">
                <img class="selected" src="https://placeimg.com/1000/1000/any3">
            </div>
            <a class="prev">&#10094;</a>
            <a class="next">&#10095;</a>
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
      this.$Lazyload.$on('loaded', function ({ el, src }) {
        $(el).addClass("loaded");
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
        $('.image').on( 'click', function() {
            $("#lightbox-full").css('display','block');
            lightboxIndex = $(this).find( "img" ).attr("data-slide");
            showLightbox(lightboxIndex);
            console.log(lightboxIndex);
        });
        $('.prev').on( 'click', function() {
            showLightbox(lightboxIndex -= 1);
            console.log(lightboxIndex);
        });
        $('.next').on( 'click', function() {
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
  .diaporama .image-lightbox {
	    margin: 15px;
	    display: inline-block;
	    width: calc(50% - 30px);
	    overflow: hidden;
	    height: 25vh;
	    position: relative;
			background:#e9e9e9;
	}
	.diaporama .image-lightbox:first-child {
	    width:calc(100% - 0px);
			height: 35vh;
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
</style>
