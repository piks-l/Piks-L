<template>
  <div class="minishop">
      <div class="delacroix shop-select shop-left active">
          <div class="middle-right">
              <nuxt-link class="mapping" target="_blank" to="/artworks/">en voir plus</nuxt-link>
          </div> 
      </div>      
      <div class="delacroix shop-select shop-right active">
        <div class="transform">
            <div class="info">
                <influx-artworks/>
            </div>
        </div>
      </div>      
      <div class="malbec shop-select shop-left">
          <div class="middle-right">
              <nuxt-link class="mapping" target="_blank" to="/tattoos/">en voir plus</nuxt-link>
          </div> 
      </div>      
      <div class="malbec shop-select shop-right">
        <div class="transform">
            <div class="info">
              <influx-tattoos/>
            </div>
        </div>
      </div>      
      <div class="navigation">
          <div id="delacroix" class="select active">ARTWORKS</div>
          <div id="malbec" class="select">TATTOOS</div>
      </div>
  </div>
</template>
<script> 
import $ from 'jquery'
import influxTattoos from '~/components/tattoos.vue'
import influxArtworks from '~/components/artworks.vue'
export default {
  components: {
      influxTattoos,
      influxArtworks
  },
  mounted: () => {
  
      if($('.minishop').hasClass('mlb')){
          $(".malbec, .delacroix, #malbec, #delacroix").toggleClass('active');
      }  
      $('.select').on('click', function(){
          $(".malbec, .delacroix, #malbec, #delacroix").toggleClass('active');
      });
      
  }
}
</script>
<style>  
.minishop .info .container {
    padding: 0px!important;
    margin: 0px!important;
}
.minishop .delacroix.shop-left {
    left: 0;
    padding-top: 150px;
    background: #212121;
}
.minishop .malbec.shop-left {
    left: 0;
    padding-top: 150px;
    background: #151515;
}
.minishop .equipes article {
        padding: 0px!important;
    margin: 0px!important;
}

.minishop .shop-right.active {

    padding: 0px!important;

}

  .minishop {
      height: 240px;
      background: #000;
      width: 100%;
      position: relative;
      overflow: hidden;
      min-height:auto;
  }
  .minishop .shop-select {
      position: absolute;
      height: 100%;
      width:50%;
      -webkit-transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
      transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
      padding: 30px;
      background:gray;
      overflow:hidden;
  }
  .minishop .shop-left {
      left:0;
      padding-top: 100px;
  }
  .minishop.all .shop-left {
      padding-top: 160px;
  }
  .minishop .shop-right{
      right:0;
      padding: 0px;
  }
  .minishop .malbec.shop-left,
  .minishop .delacroix.shop-right{
      top:100%;
  }
  .minishop .malbec.shop-right,
  .minishop .delacroix.shop-left{
      top:-100%;
  }
  .minishop .malbec.shop-left.active,
  .minishop .malbec.shop-right.active,
  .minishop .delacroix.shop-left.active,
  .minishop .delacroix.shop-right.active{
      top:0;
  }
  .minishop .transform{
      position: relative;
      height: 100%;
      -webkit-transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
      transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
  }
  .minishop .malbec.shop-left .transform,
  .minishop .delacroix.shop-right .transform{
      transform: translateY(-60%);
      -webkit-transform: translateY(-60%);
  }
  .minishop .malbec.shop-right .transform,
  .minishop .delacroix.shop-left .transform{
      transform: translateY(60%);
      -webkit-transform: translateY(60%);
  }  
  .minishop .malbec.shop-left.active .transform,
  .minishop .malbec.shop-right.active .transform,
  .minishop .delacroix.shop-left.active .transform,
  .minishop .delacroix.shop-right.active .transform{
      transform: translateY(0%);
      -webkit-transform: translateY(0%);
  }
  .minishop.dlc .malbec,
  .minishop.dlc #malbec{
      display:none;
  }
  .minishop.mlb .delacroix,
  .minishop.mlb #delacroix{
      display:none;
  }
  .minishop .info {
      margin: 0px;
      padding: 0px;
      color: #fff;
  }
  .minishop .info p {
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 22px;
      padding: 0;
  }
  .minishop .info b, 
  .minishop .info a {
      font-size: 16px;
      font-weight: 500;
      font-family: 'titaniaregular', serif;
      letter-spacing:1px;
      color: #fff;
  }
  .minishop .tel {
      background: white none repeat scroll 0 0;
      color: black !important;
      display: inline-block;
      padding: 10px;
      margin-bottom:30px;
  }
  .minishop.mlb .navigation,
  .minishop.dlc .navigation{
      display:none;
  }
  .minishop .navigation {
      color: #fff;
      top: 0;
      position: absolute;
      text-align: center;
      padding: 25px;
      width: 50%;
      z-index:2;
  }
  .minishop .navigation .select {
      font-size: 45px;
      line-height: 1;
      font-weight: 900;
      font-family: 'titaniaregular', serif;
      color:#000;
      -webkit-transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
      transition: all 1000ms cubic-bezier(0.8, 0, 0.2, 1) 0s;
      cursor:pointer;
  }
  .minishop .navigation .select.active{
      color:#FFB413;
      font-size: 72px;
  }
  .minishop .middle-right {
      position: relative;
      width: auto;
      height: auto;
      z-index:1;
      top: 0;
      left:0;
  }
  .minishop .mapping {
      margin: 15px 0;
      line-height: 1;
      font-weight: 900;
      font-family: titaniaregular,serif;
      text-align: center;
      display: block;
      position: relative;
      top: 0;
      left:0;
      width: 100%;
      color:#fff !important;
      font-size: 30px;
      opacity:1;
      -webkit-transition:all .5s ease;
      transition:all .5s ease;      
      -webkit-transform:none !important;
      transform:none !important;
  }
  .minishop .active .mapping {
      opacity:1;
      -webkit-transition:all .5s ease .5s;
      transition:all .5s ease .5s;
  }
  .minishop .shop-left p{
      font-size: 50px;
      line-height: 1;
      font-family: titaniaregular,serif;
      position: relative;
      color: #fff;
      -webkit-transition: all .5s ease;
      transition: all .5s ease;
      text-align: center !important;
      width: 100%;
      left: 0;
      opacity:1;
  }
  .minishop.all .shop-left p {
      display:none;
  }
  .minishop .entry{
      background:#151515 none repeat scroll 0 0;
      color:#fff;
      display:inline-block;
      font-size:14px;
      height:30px;
      line-height:30px;
      margin:10px;
      position:relative;
      text-align:center;
      -webkit-transition:all 0.3s ease 0s;
      transition:all 0.3s ease 0s;
      vertical-align:bottom;
      width:30px;
  }
  .minishop .entry:hover{
      color:#fff;
  }
  .minishop .entry:before{
      background:#000000;
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
      content:"";
      transform:scale(0);
      -webkit-transform:scale(0);
      transition:all .3s;
      -webkit-transition:all .3s;
  }
  .minishop .entry:hover:before{
      transform:scale(1);
      -webkit-transform:scale(1);
  }
  .minishop .entry .fab{
      position:relative;
  }
  @media only screen and (min-width:960px) and (max-width:1264px){
      .minishop .shop-select{
          padding: 30px 0;
      }
      .minishop .shop-select.shop-left {
          padding-top: 130px;
      }   
      .minishop .navigation .select {
          font-size: 30px;
      }
      .minishop .navigation .select.active {
          font-size: 50px;
      }
      .minishop .mapping{
          font-size: 50px;
      }
      .minishop .info a, 
      .minishop .info b {
          font-size: 20px;
          font-weight: 100;
      }
  }
  @media only screen and (min-width:600px) and (max-width:959px){
      .minishop {
          height: auto;
          width: 100%;
          position: relative;
          background: transparent;
      }
      .minishop .navigation{
          display:none;
      }
      .minishop .shop-select {
          width:100%;
          position: relative;
          padding-top: 30px;
      }
      .minishop .shop-right {
          padding: 0 0 30px;
          margin-bottom: 30px;
      }
      .minishop .shop-left {
        padding: 30px 0 15px !important;
      }
      .minishop .shop-left p {
          position: relative;
          opacity: 1 !important;
          bottom: auto;
          font-size: 50px;
      }
      .minishop.all .shop-left p {
          display:block;
      }
      .minishop .middle-right {
          position: relative;
          right: 0;
          top: 0;
      }
      .minishop .mapping {
          text-align: center;
          display: block;
          position: relative;
          top: 0;
          left: 0;
          -webkit-transform: none !important;
          transform: none !important;
          width: 100%;
          font-size: 30px;
          margin: 15px 0;
          opacity: 1;
      }
      .minishop .transform {
          transform: none !important;
      }
      .minishop .info {
          text-align: center;
      }
      .minishop .info p {
          text-align: center;
      }
  }
  @media only screen and (max-width:599px){
      .minishop {
          height: auto;
          width: 100%;
          position: relative;
          background: transparent;
      }
      .minishop .navigation{
          display:none;
      }
      .minishop .shop-select {
          width:100%;
          position: relative;
          padding-top: 30px;
      }
      .minishop .shop-right {
          padding: 0 0 30px;
          margin-bottom: 30px;
      }
      .minishop .shop-left {
        padding: 30px 0 15px !important;
      }
      .minishop .shop-left p {
          position: relative;
          opacity: 1 !important;
          bottom: auto;
          font-size: 32px;
          margin:0;
      }
      .minishop.all .shop-left p {
          display:block;
      }
      .minishop .middle-right {
          position: relative;
          right: 0;
          top: 0;
      }
      .minishop .mapping {
          text-align: center;
          display: block;
          position: relative;
          top: 0;
          left: 0;
          -webkit-transform: none !important;
          transform: none !important;
          width: 100%;
          font-size: 26px;
          margin: 15px 0;
          opacity: 1;
      }
      .minishop .transform {
          transform: none !important;
      }
      .minishop .info {
          text-align: center;
      }
      .minishop .info p {
          text-align: center;
      }
  }
</style>
