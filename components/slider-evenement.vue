<template>
  <div class="slider-evenement">
    <div class="slider__nav">
     <span id="moveLeft" class="slider__arrow">
        <svg class="slider__icon" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
        </svg>
      </span>
      <span id="moveRight" class="slider__arrow" >
        <svg class="slider__icon"  width="24" height="24" viewBox="0 0 24 24">
          <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
        </svg>    
      </span>
    </div>
   <div v-for="(img, i) in galerie" :key="img" class="slider-item slider-item--1">
      <div class="slider-item__image" :style="{ backgroundImage: `url(${img})` }"></div>
    </div>
  </div>
</template>
<script>
  export default {
    props: [
      'galerie'
    ],
    mounted: function () {
      $('.slider-evenement .slider-item').eq(0).addClass('active');
      var total = $('.slider-evenement .slider-item').length;
      var current = 0;
      $('.slider-evenement #moveRight').on('click', function(){
        var next=current;
        current= current+1;
        setSlide(next, current);
      });
      $('.slider-evenement #moveLeft').on('click', function(){
        var prev=current;
        current = current- 1;
        setSlide(prev, current);
      });
      function setSlide(prev, next){
        var slide= current;
        if(next>total-1){
         slide=0;
          current=0;
        }
        if(next<0){
          slide=total - 1;
          current=total - 1;
        }
       $('.slider-evenement .slider-item').eq(prev).removeClass('active');
       $('.slider-evenement .slider-item').eq(slide).addClass('active');
        setTimeout(function(){},800);
        console.log('current '+current);
        console.log('prev '+prev);
      }
    }
  };
</script>

<style>

  /*Carousel*/
  .slider-evenement {
      height: 350px!important;
      width: 100%;
      display: flex;   
      overflow: hidden;
      position: relative;
  }
  .slider-item {
      visibility:visible;
      display: flex;
      width: 90%;
      height: 100%;
      align-items: center;
      justify-content: flex-end;
      -webkit-align-items: center;
      -webkit-justify-content: flex-end;
      position: relative;
      background-color: #fff;
      flex-shrink: 0;
      -webkit-flex-shrink: 0;
      position: absolute;
      z-index: 0;
      transition: 0.6s all linear;
  }
  .slider-evenement .slider-item {
      left: 10%;
  }
  .slider-item__image {
      width: 60%;
      height: 100%;      
      align-self: flex-end;
      flex-basis: 60%;
      order: 1;
      -webkit-order: 1;    
      -webkit-align-self: flex-end;
      -webkit-flex-basis: 60%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position:relative;
      transform: translateX(-100%);
      transition: 0.6s all ease-in-out;
  }
  .slider-evenement .slider-item__image {
      transform: translateX(100%);
      order: 2;
  }
  .slider-item__container {
      box-shadow: 0 0 0 40px #fff, 4px 0 0 38px #cecece;
  }
  .slider-evenement .slider-item__container {
      border-right: none;
      box-shadow: 0 0 0 40px #fff, -4px 0 0 38px #cecece;
  }
  .slider-item__btn {
      width: 35%;
      color: #2C2C2C;
      font-family: 'Open Sans', sans-serif;
      letter-spacing: 3px;
      font-size: 11px;
      text-transform: uppercase;
      margin: 0;
      width: 35%;
      font-weight: 700;
      text-decoration: none;
      transform: translateY(25%);
      opacity: 0;
      visibility: hidden;
      transition: 0.6s all ease-in-out;
  }
  .slider__nav {
      position: absolute;
      z-index: 2;
      background-color: #fff;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
  }
  .slider-evenement .slider__nav {
      left:5%;  
  }
  .slider__icon {
      display: inline-block;
      vertical-align: middle;
      width: 16px;
      fill: #5d5d5d;
  }
  .slider__arrow {
      cursor: pointer;
      display: inline-block;
      padding: 11px 15px;
      position: relative;
  }
  .slider__arrow:nth-child(1):after {
      content:'';
      right: -3px;
      position: absolute;
      width: 1px;
      background-color: #b0b0b0;
      height: 14px;
      top: 50%;
      margin-top: -7px;
  }
  .active{
      z-index: 1;
      display: flex;
      visibility:visible;
  }
  .active .carousel-item__image{ 
      transition: 0.6s all ease-in-out;
      transform: translateX(0);
}
</style>
