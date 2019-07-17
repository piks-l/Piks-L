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
      <div id="lightbox-full" class="modal-lightbox">
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
