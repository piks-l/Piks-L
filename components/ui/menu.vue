<template>
  <div id="menu">
    <div class="progress-container">
      <div class="progress-bar" id="scrollindicator"></div>
    </div>
		<main>
			<nav class="menu">
        
				<div class="menu__item menu__item--1" data-direction="bt">
					<div class="menu__item-inner">
						<div class="mainmenu">
              <nuxt-link data-hover class="mainmenu__item" to="/">Accueil</nuxt-link>
              <nuxt-link data-hover class="mainmenu__item" to="/">Biographie</nuxt-link>
              <nuxt-link data-hover class="mainmenu__item" to="/blog/">Actualités</nuxt-link>
							<nuxt-link data-hover class="mainmenu__item" to="/artworks/">Artworks</nuxt-link>
							<nuxt-link data-hover class="mainmenu__item shake" to="/tattoos/">Tattoos</nuxt-link>
							<nuxt-link data-hover class="mainmenu__item" to="/contact/">Contact</nuxt-link>
						</div>
						<p class="label label--topleft label--vert-mirror">menu</p>
						<p class="label label--bottomright label--vert">www.sebastien-odd.tattoo<strong>{{this.$route.path}}</strong></p>
					</div>
				</div>
				<div class="menu__item menu__item--2" data-direction="lr">
					<div class="menu__item-inner">
						    <video autoplay muted loop id="animation">
                   <source src="https://www.influx-agence.fr/cms/sebastienodd-animation.mp4" type="video/mp4">
                </video>
					</div>
				</div>
				<div class="menu__item menu__item--3" data-direction="bt">
					<div class="menu__item-inner">
						<div class="sidemenu">
							<a target="_blank" href="https://www.facebook.com/sebastienoddtattoo/" class="sidemenu__item"><span class="sidemenu__item-inner"><i class="fab fa-facebook-f"></i>Facebook</span></a>
							<a target="_blank" href="https://twitter.com/sebastienodd" class="sidemenu__item"><span class="sidemenu__item-inner"><i class="fab fa-twitter"></i>Twitter</span></a>
							<a target="_blank" href="https://www.instagram.com/sebastien_odd_tattoo/" class="sidemenu__item"><span class="sidemenu__item-inner"><i class="fab fa-instagram"></i>Instagram</span></a>
							<a target="_blank" href="https://www.youtube.com/channel/UCH8hl7gSMTr4TcBSIF8PiwA" class="sidemenu__item"><span class="sidemenu__item-inner"><i class="fab fa-youtube"></i>Youtube</span></a>
						</div>
					</div>
				</div>
				<div class="menu__item menu__item--4" data-direction="rl">
					<div class="menu__item-inner">
						<p class="label label--topleft label--line">Me rejoindre</p>
						<a target="_blank" data-hover href="https://fr-fr.facebook.com/greengalerieexpo/" class="menu__item-link">Tatoueur on the road !</a>
					</div>
				</div>
				<div class="menu__item menu__item--5" data-direction="tb">
					<div class="menu__item-inner">
						<p class="quote">Pour aborder vos projets et prendre rendez-vous, <nuxt-link data-hover to="/contact/">veuillez m'envoyer un mail</nuxt-link> en précisant l'emplacement, les dimensions, l'inspirations et en y joignant 2 ou 3 photos</p>
					</div>
				</div>
				<button data-hover class="action action--menu"></button>
				<button data-hover class="action action--close"></button>
			  <div id="menu-icon-wrapper" class="menu-icon-wrapper" style="visibility: visible;">
          <svg width="1000px" height="1000px">
            <path class="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
            <path class="path2" d="M 300 500 L 700 500"></path>
            <path class="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
          </svg>
          <button id="menu-icon-trigger" class="menu-icon-trigger"></button>
        </div>
      </nav>
		</main>
   </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    mounted: () => {
      // Scroll indicator
      window.onscroll = function() { scrollIndi() };
      function scrollIndi() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("scrollindicator").style.width = scrolled + "%";
      }
      // Class Menu
      {
        class Menu {
          constructor(el) {
              this.DOM = {el: el};

              this.DOM.openCtrl = this.DOM.el.querySelector('.action--menu');
              this.DOM.closeCtrl = this.DOM.el.querySelector('.action--close');
              this.DOM.menuCtrl = this.DOM.el.querySelector('.mainmenu');
              this.DOM.openCtrl.addEventListener('click', () => this.open());
              this.DOM.closeCtrl.addEventListener('click', () => this.close());
              this.DOM.menuCtrl.addEventListener('click', () => this.close());
              this.DOM.openCtrl.addEventListener('mouseenter', () => {
                  allowTilt = false;
                  tilt.reset()
              });
              this.DOM.openCtrl.addEventListener('mouseleave', () => {
                  allowTilt = true;
              });
              
              // The menu items.
              this.DOM.items = Array.from(this.DOM.el.querySelectorAll('.menu__item'));
              // The total number of items.
              this.itemsTotal = this.DOM.items.length;
              // Custom elements that will be animated.
              this.DOM.mainLinks = this.DOM.el.querySelectorAll('.mainmenu > a.mainmenu__item');
              this.DOM.sidemenuLinks = this.DOM.el.querySelectorAll('.sidemenu span.sidemenu__item-inner');
              this.DOM.menulink = this.DOM.el.querySelector('.menu__item-link');
          }
          // Open the menu.
          open() {
              this.toggle('open');
          }
          // Close the menu.
          close() {
              this.toggle('close');
          }              
          toggle(action) {
              if ( this.isAnimating ) return;
              // (dis)allow the main image tilt effect.
              allowTilt = action === 'open' ? false : true;
              this.isAnimating = true;
              // Toggling the open state class.
              this.DOM.el.classList[action === 'open' ? 'add' : 'remove']('menu--open');
              // After all is animated..
              const animationEnd = (pos) => {
                  if ( pos === this.itemsTotal-1 ) {
                      this.isAnimating = false;
                  }
              };
              // Going through each menu´s item.
              this.DOM.items.forEach((el, pos) => {
                  // The inner wrapper.
                  const innerEl = el.querySelector('.menu__item-inner');
                  // config and inner config will have the starting transform values (when opening) and the end ones (when closing) for both the item and its inner element.
                  const config = {};
                  const configInner = {};
                  // Direction defined in the HTML data-direction.
                  // bt (bottom to top) || tb (top to bottom) || lr (left to right) || rl (right to left)
                  const direction = el.dataset.direction;
                  // Using 101% instead of 100% to avoid rendering problems.
                  // In order to create the "reveal" effect, the item slides moves in one direction and its inner element in the opposite direction.
                  if ( direction === 'bt' ) {
                      config.y = '101%';
                      configInner.y = '-101%';
                      configInner.x = '0%';
                  }
                  else if ( direction === 'tb' ) {
                      config.y = '-101%';
                      configInner.y = '101%';
                      configInner.x = '0%';
                  }
                  else if ( direction === 'lr' ) {
                      config.x = '-101%';
                      configInner.x = '101%';
                  }
                  else if ( direction === 'rl' ) {
                      config.x = '101%';
                      configInner.x = '-101%';
                  }
                  else {
                      config.x = '101%';
                      config.y = '101%';
                      configInner.x = '-101%';
                      configInner.y = '-101%';
                  }
                  
                  if ( action === 'open' ) {
                      // Setting the initial values.
                      TweenMax.set(el, config);
                      TweenMax.set(innerEl, configInner);
                      // Animate.
                      TweenMax.to([el,innerEl], .9, {
                          ease: Quint.easeOut,
                          x: '0%',
                          y: '0%',
                          onComplete: () => animationEnd(pos)
                      });
                  }
                  else {
                      TweenMax.to(el, 0.6, {
                          ease: Quart.easeInOut,
                          x: config.x || 0,
                          y: config.y || 0
                      });
                      TweenMax.to(innerEl, 0.6, {
                          ease: Quart.easeInOut,
                          x: configInner.x || 0,
                          y: configInner.y || 0,
                          onComplete: () => animationEnd(pos)
                      });
                  }
              });
              // Show/Hide open and close ctrls.

              // Main links animation.
              TweenMax.staggerTo(this.DOM.mainLinks, action === 'open' ? 0.9 : 0.2, {
                  ease: action === 'open' ? Quint.easeOut : Quart.easeInOut,
                  startAt: action === 'open' ? {y: '50%', opacity: 0} : null,
                  y: action === 'open' ? '0%' : '50%',
                  opacity: action === 'open' ? 1 : 0
              }, action === 'open' ? 0.1 : -0.1);
              // Sidemenu links animation.
              TweenMax.staggerTo(this.DOM.sidemenuLinks, action === 'open' ? 0.5 : 0.2, {
                  ease: action === 'open' ? Quint.easeInOut : Quart.easeInOut,
                  startAt: action === 'open' ? {y: '100%'} : null,
                  y: action === 'open' ? '0%' : '100%'
              }, action === 'open' ? 0.05 : -0.05);
              // The "Learn how to participate" menu link.
              TweenMax.to(this.DOM.menulink, action === 'open' ? 0.9 : 0.6, {
                  ease: action === 'open' ? Quint.easeOut : Quart.easeInOut,
                  startAt: action === 'open' ? {x: '10%'} : null,
                  x: action === 'open' ? '0%' : '10%'
              });
          }
        }
    	  // Initialize the Menu.
        const menu = new Menu(document.querySelector('nav.menu'));
        
      }
    } // Mounted end
  } // Export end 
</script>
<style>
  /* Import */
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900');
  /* Général */
    
    #menu {
        height: 75px;
        position: fixed;
        z-index: 111;
        top: 0;
        width: 100%;
        background-color: transparent;
    }
    
    /* Scroll indicator */
    .progress-container { width: 100%; height: 5px; background: #525252; }
    .progress-bar { width: 0%; height: 5px; background: #FFB413; }
    
    /* Menu - Reseaux sociaux */
    .sidemenu__item i.fab {
      margin-right: 15px;
      color: #525252;
    }
    .hidden {
      position: absolute;
      overflow: hidden;
      width: 0;
      height: 0;
      pointer-events: none;
    }
    /* Icons */
    .icon {
      display: block;
      width: 1.5em;
      height: 1.5em;
      margin: 0 auto;
      fill: currentColor;
    }
    main {
      position: relative;
      width: 100%;
    }
    .frame {
      position: relative;
      z-index: 199;
    }
    .content {
      text-align: center;
      position: relative;
      z-index: 100;
    }
    /* Top Navigation Style */
    .content__title {
      font-size: 14vw;
      font-weight: normal;
      mix-blend-mode: screen;
      line-height: 0.8;
      text-transform: lowercase;
      margin: 0;
      color: var(--color-title);
      z-index: 199;
    }
    .content__tagline {
      color: var(--color-tagline);
      margin: 1rem 0 0 0;
      font-weight: bold;
      font-size: 1rem;
      letter-spacing: 0.125rem;
      word-spacing: 0.25rem;
      text-transform: uppercase;
      text-align: center;
      z-index: 199;
    }
    
    
    
    .action {
      background: none;
      border: 0;
      color: #000;
      cursor: pointer;
      padding: 0;
      width: 40px;
      height: 40px;
    }
    .action--menu {
      pointer-events: auto;
      position: absolute;
      top: 15px;
      right: 25px;
      z-index: 1000;
    }
    
    .menu--open .action--menu {
      pointer-events: none;
    }
    .action--close {
      position: absolute;
      top: 15px;
      right: 25px;
      z-index: 1000;
      opacity: 0;
      padding: 0 0.5rem;
      color:#525252;
    }
    .icon--menu {
      width: 2rem;
    }
    .icon--close {
      width: 1rem;
    }
    

    /* menu icon effect */
    .menu-icon-wrapper {
      position: fixed;
      right: 25px;
      top: 15px;
      width: 40px;
      height: 40px;
      pointer-events: none;
      transition: 0.1s;
      z-index:1;
    }
    .menu-icon-wrapper svg {
      position: absolute;
      top: -30px;
      left: -30px;
      transform: scale(0.1);
      transform-origin: 0 0;
    }
    .menu-icon-wrapper svg path {
      stroke: #525252;
      stroke-width: 20px;
      fill: transparent;
      transition: stroke-dasharray 0.5s;
    }
    .menu-icon-wrapper svg path.path1 {
      stroke-dashoffset: 5803.15px;
      stroke-dasharray: 2901.57px, 2981.57px, 240px;
    }
    .menu-icon-wrapper svg path.path2 {
      stroke-dashoffset: 800px;
      stroke-dasharray: 400px, 480px, 240px;
    }
    .menu-icon-wrapper svg path.path3 {
      stroke-dashoffset: 6993.11px;
      stroke-dasharray: 3496.56px, 3576.56px, 240px;
    }

    .menu--open .menu-icon-wrapper svg path.path1 {
      stroke-dasharray: 2901.57px, 5258.15px, 240px;
    }
    .menu--open .menu-icon-wrapper svg path.path2 {
      stroke-dasharray: 400px, 600px, 0px;
    }
    .menu--open .menu-icon-wrapper svg path.path3 {
      stroke-dasharray: 3496.56px, 6448.11px, 240px;
    }
    .menu-icon-wrapper .menu-icon-trigger {
      position: relative;
      width: 100%;
      height: 100%;
      pointer-events: auto;
      background: none;
      border: none;
      margin: 0;
      padding: 0;
    }
    
    
    
    
    
    
    
    
    .menu {
      text-align: center;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 200;
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: repeat(3,33.33%);
      pointer-events: none;
    }
    .menu--open {
      pointer-events: auto;
      background: #FFFFFF !important;
      transition: 0.5s ease all;
    }
    .menu__item {
      width: 100%;
      position: relative;
      overflow: hidden;
    }
    .menu__item-inner {
      overflow: hidden;
      transform: translate3d(100%,0,0);
      height: 100%;
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .menu__item--1 .menu__item-inner {
      background: var(--color-bg-item1);
    }
    .menu__item--2 .menu__item-inner {
      background: var(--color-bg-item2);
    }
    .menu__item--3 .menu__item-inner {
      background: var(--color-bg-item3);
    }
    .menu__item--4 .menu__item-inner {
      background: var(--color-bg-item4);
    }
    .menu__item--4 .label {
      color: #ACACAC;
    }
    .menu__item--4 a {
      font-size: 3.5vw;
      color: #ACACAC;
    }
    .menu__item--4 a:hover {
      color: #525252;
    }
    .menu__item--5 .menu__item-inner {
      background: var(--color-bg-item5);
    }
    .menu__item--4, 
    .menu__item--5 {
      display: none;
    }
    .label {
      display: none;
    }
    .mainmenu__item {
      opacity: 0;
    }
    .mainmenu__item,
    .sidemenu__item {
      position: relative;
      overflow: hidden;
      transition: color 0.1s;
      margin: 0.25rem 0;
      display: block;
    }
    .sidemenu__item-inner {
      display: block;
      transform: translate3d(0,100%,0);
    }
    .menu__item-inner:hover video {
      transform: scale3d(1.1,1.1,1);
    }
    .menu__item-hoverlink {
      font-weight: bold;
      text-transform: capitalize;
      position: relative;
      z-index: 1000;
      display: block;
    }
    .menu__item-hoverlink:hover {
      color: var(--color-link);
    }
    .quote:hover {
      border-top: 5px solid #FFB413;
    }
    .quote {
      font-size: 1.1rem;
      padding: 2rem;
      text-align: center;
      max-width: 70%;
      color: var(--color-quote);
      font-weight: 400;
      line-height: 25px;
      border-top: 5px solid #FFF;
      transition: 1s all ease;
    }
    .quote a {
      text-decoration-line: underline;
      text-decoration-color: #FFB413;
      font-weight: 700;
    }
    .menu__item-link {
      text-align: left;
      align-self: flex-start;
      justify-self: start;
      font-size: 1.5rem;
      width: 100%;
      line-height: 1;
      padding: 2rem ;
      margin: 3rem 0 auto;
      display: flex;
      flex-direction: column;
      height: calc(100% - 3rem);
    }
    .menu__item-link:hover::after {
        color: #FFB413;
    }
    .menu__item-link::after {
        content: "\27F6";
        display: block;
        margin-top: auto;
        font-size: 15.2px;
        font-size: 2.95rem;
        color: #CECECE;
    }
    .mainmenu {
        transform: none !important;
    }  
    
    /* Shack effect */
    @-webkit-keyframes spaceboots {
      0% { -webkit-transform: translate(0px, 1px) rotate(0deg); }
      10% { -webkit-transform: translate(0px, -2px) rotate(0deg); }
      20% { -webkit-transform: translate(0px, 0px) rotate(0deg); }
      30% { -webkit-transform: translate(0px, 2px) rotate(0deg); }
      40% { -webkit-transform: translate(0px, -1px) rotate(0deg); }
      45% { -webkit-transform: translate(0px, -2px) rotate(0deg); }
      50% { -webkit-transform: translate(0px, 0px) rotate(0deg); }
      55% { -webkit-transform: translate(0px, 2px) rotate(0deg); }
      60% { -webkit-transform: translate(0px, 1px) rotate(0deg); }
      70% { -webkit-transform: translate(0px, 1px) rotate(0deg); }
      80% { -webkit-transform: translate(0px, -1px) rotate(0deg); }
      90% { -webkit-transform: translate(0px, 2px) rotate(0deg); }
      100% { -webkit-transform: translate(0px, -2px) rotate(0deg); }
    }
    .shake:hover,
    .shake:focus {
      -webkit-animation-name: spaceboots;
      -webkit-animation-duration: 0.8s;
      -webkit-transform-origin:50% 50%;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;
    }
    
    
    /* Moin de 848px */
  @media screen and (min-width: 53em) {
  	body {
  		padding: 0;
  	}
  	.content {
  		position: relative;
  		display: flex;
  		flex-direction: column;
  		justify-content: center;
  		align-items: center;
  		margin: 0 auto;
  		min-height: 100vh;
  		text-align: left;
  	}
  	.frame {
  		position: fixed;
  		z-index: 199;
  		top: 0;
  		left: 0;
  		display: grid;
  		align-content: space-between;
  		width: 100%;
  		max-width: none;
  		height: 100vh;
  		padding: 1.5rem;
  		pointer-events: none;
  		grid-template-columns: 50% 50%;
  		grid-template-rows: auto auto auto;
  		grid-template-areas: 
  		'codropsheader info'
  		'... ...'
  		'github ...';
  	}
  	.frame a {
  		pointer-events: auto;
  	}
  	.info {
  		margin: 0 6rem 0 0;
  	}
  	.menu {
  		width: 100%;
  		height: 100vh;
  		overflow: hidden;
  		position: fixed;
  		top: 0;
  		left: 0;
  		grid-template-columns: 20% 30% 50%;
  		grid-template-rows: 60% 40%;
  		grid-template-areas: 
              "item3 item2 item1"
              "item4 item5 item1";
  	}
  	.menu__item {
  		height: 100%;
  	}
  	.menu__item--1 {
  		grid-area: item1;
  	}
  	.menu__item--2 {
  		grid-area: item2;
  	}
  	.menu__item--3 {
  		grid-area: item3;
  	}
  	.menu__item--4 {
  		grid-area: item4;
  	}
  	.menu__item--5 {
  		grid-area: item5;
  	}
  	.menu__item--4, 
  	.menu__item--5 {
  		display: block;
  	}
  	.menu__item-inner {
  		align-items: center;
  	}
  	.label {
  		display: block;
  		position: absolute;
  		z-index: 1000;
  		font-size: 0.85rem;
  		font-weight: bold;
  		margin: 0;
  		white-space: nowrap;
      color: #cccccc;
  	}
  	.label--topleft {
  		top: 2rem;
  		left: 2rem;
  	}
  	.label--vert,
  	.label--vert-mirror {
  		-webkit-writing-mode: vertical-rl;
  		writing-mode: vertical-rl;
  	}
  	.label--vert-mirror {
  		transform: rotate(180deg);
  	}
  	.label--bottomright {
  		bottom: 2rem;
  		right: 2rem;
  	}
    .label--bottomright strong {
      color: #FFB413;
    }
  	.label::before {
  		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;
  		letter-spacing: -1px;
  		margin: 0 0.75rem 0 0;
  	}
  	.label--vert::before,
  	.label--vert-mirror::before {
  		margin: 0.75rem 0;
  	}
  	.mainmenu,
  	.sidemenu {
  		width: 100%;
  		height: 100%;
  		display: flex;
  		flex-direction: column;
  		align-items: center;
  		justify-content: center;
  	}
  	.mainmenu {
  		counter-reset: menuitem;
  	}
    .mainmenu a {
      color: #525252;
    }
  	.mainmenu__item {
  		font-size: 5vw;
  		text-transform: lowercase;
  		overflow: visible;
  		margin: 0.5rem 0;
  		padding: 0 0.5rem;
  		position: relative;
  		transition: color 0.3s;
  	}
  	.mainmenu__item:hover {
  		color: #cecece;
  	}
  	.mainmenu__item::before {
  		counter-increment: menuitem;
  		content: counters(menuitem, "", decimal-leading-zero);
  		position: absolute;
  	    font-size: 0.85rem;	
  	    top: 25%;
  	    left: -1.25rem;
  	    color: #cecece;
  	}
  	.mainmenu__item::after {
  		content: '';
  		width: 100%;
  		top: 58%;
  		height: 6px;
  		background: #FFB413;
  		position: absolute;
  		left: 0;
  		opacity: 0;
  		transform: scale3d(0,1,1);
  		transition: transform 0.3s, opacity 0.3s;
  		transform-origin: 100% 50%;
  	}
  	.mainmenu__item:hover::after {
  		opacity: 1;
  		transform: scale3d(1,1,1);
  	}
    .sidemenu__item {
      text-transform: lowercase;
      font-size: 1.1rem;
      color: #cecece;
    }
    .sidemenu__item:hover {
      color: #525252;
    }
    .sidemenu__item:hover i {
      color: #ffb413;
    }
    .menu__item-hoverlink {
  		font-size: 1.25rem;
  		text-transform: lowercase;
  		border-bottom: 2px solid #fff;
  		opacity: 0;
  		transition: opacity 0.3s;
  	}
  	.menu__item-inner:hover .menu__item-hoverlink {
  		opacity: 1;
  	}
  }
  
 
</style>
