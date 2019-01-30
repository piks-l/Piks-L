<template>
  <div id="menu">
    <div class="progress-container">
      <div class="progress-bar" id="scrollindicator"></div>
    </div>
		<svg class="hidden">
			<symbol id="icon-menu" viewBox="0 0 119 25">
				<title>menu</title>
				<path d="M36,8 L36,0 L100,0 L100,8 L36,8 Z M0,8 L0,0 L24,0 L24,8 L0,8 Z M0,28 L0,20 L71,20 L71,28 L0,28 Z"/>
			</symbol>
			<symbol id="icon-close" viewBox="0 0 24 24">
				<title>close</title>
				<path d="M24 1.485L22.515 0 12 10.515 1.485 0 0 1.485 10.515 12 0 22.515 1.485 24 12 13.484 22.515 24 24 22.515 13.484 12z"/>
			</symbol>
		</svg>
		<main>
			<nav class="menu">
				<div class="menu__item menu__item--1" data-direction="bt">
					<div class="menu__item-inner">
						<div class="mainmenu">
              <nuxt-link class="mainmenu__item" to="/">Accueil</nuxt-link>
              <nuxt-link class="mainmenu__item" to="/">Biographie</nuxt-link>
              <nuxt-link class="mainmenu__item" to="/blog/">Actualités</nuxt-link>
							<nuxt-link class="mainmenu__item" to="/artworks/">Artworks</nuxt-link>
							<nuxt-link class="mainmenu__item" to="/tattoos/">Tattoos</nuxt-link>
							<nuxt-link class="mainmenu__item" to="/contact/">Contact</nuxt-link>
						</div>
						<p class="label label--topleft label--vert-mirror">Menu principal</p>
						<p class="label label--bottomright label--vert">www.sebastien-odd.tattoo</p>
					</div>
				</div>
				<div class="menu__item menu__item--2" data-direction="lr">
					<div class="menu__item-inner">
						<div class="menu__item-map"></div>
					</div>
				</div>
				<div class="menu__item menu__item--3" data-direction="bt">
					<div class="menu__item-inner">
						<div class="sidemenu">
							<a href="#" class="sidemenu__item"><span class="sidemenu__item-inner"><i class="fab fa-facebook-f"></i>Facebook</span></a>
							<a href="#" class="sidemenu__item"><span class="sidemenu__item-inner"><i class="fab fa-twitter"></i>Twitter</span></a>
							<a href="#" class="sidemenu__item"><span class="sidemenu__item-inner"><i class="fab fa-instagram"></i>Instagram</span></a>
							<a href="#" class="sidemenu__item"><span class="sidemenu__item-inner"><i class="fab fa-youtube"></i>Youtube</span></a>
						</div>
					</div>
				</div>
				<div class="menu__item menu__item--4" data-direction="rl">
					<div class="menu__item-inner">
						<p class="label label--topleft label--line">Contact</p>
						<p class="menu__item-link">Pour aborder vos projets et prendre rendez-vous, veuillez m'envoyer un mail en précisant l'emplacement, les dimensions et l'inspirations en y joignant éventuellement 2 ou 3 photos</p>
					</div>
				</div>
				<div class="menu__item menu__item--5" data-direction="tb">
					<div class="menu__item-inner">
						<p class="quote">Pour aborder vos projets et prendre rendez-vous, veuillez m'envoyer un mail en précisant l'emplacement, les dimensions et l'inspirations en y joignant éventuellement 2 ou 3 photos</p>
					</div>
				</div>
				<button class="circle action action--menu"><svg class="icon icon--menu"><use xlink:href="#icon-menu"></use></svg></button>
				<button class="action action--close"><svg class="icon icon--close"><use xlink:href="#icon-close"></use></svg></button>
			</nav>
		</main>
   </div>
</template>
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
  }
  .action--menu {
    pointer-events: auto;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 1000;
  }
  
  .circle {
      height: 40px;
      width: 40px;
      background: #fff;
      position: absolute;
      right: 25px;
      top: 15px;
      border-radius: 50%;
  }
  .circle .icon {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin-left: 3px;
  }
  .menu--open .action--menu {
    pointer-events: none;
  }
  .action--close {
    position: absolute;
    top: 1.5rem;
    right: 1.75rem;
    z-index: 1000;
    opacity: 0;
    padding: 0 0.5rem;
    color:#fff;
  }
  .icon--menu {
    width: 2rem;
  }
  .icon--close {
    width: 1rem;
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
    background: #151515 !important;
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
  .menu__item-map {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url(https://influx-002.netlify.com/images/uploads/logobombyx.png) no-repeat 50% 50%;
    background-size: cover;
    transition: transform 0.8s cubic-bezier(0.2,1,0.8,1);
  }
  .menu__item-inner:hover .menu__item-map {
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
  .quote {
    font-size: 1rem;
    padding: 1rem;
    text-align: center;
    max-width: 70%;
    color: var(--color-quote);
    font-weight: 400;
    line-height: 25px;
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
  .menu__item-link::after {
    content: '\27F6';
    display: block;
    margin-top: auto;
    font-size: 0.95rem;
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
	.label::before {
		content: '------------- ';
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
    color: #fff;
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
		color: #525252;
	}
	.mainmenu__item::before {
		counter-increment: menuitem;
		content: counters(menuitem, "", decimal-leading-zero);
		position: absolute;
	    font-size: 0.85rem;	
	    top: 25%;
	    left: -1.25rem;
	    color: #525252;
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
		text-transform: uppercase;
		letter-spacing: 0.15rem;
		font-size: 0.85rem;
    color: #FFF;
	}
  .sidemenu__item:hover {
    color: #FFB413;
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
<script>
  import $ from 'jquery'
  export default {
      head: {
      },
      mounted: () => {
        window.onscroll = function() {myFunction()};
        function myFunction() {
          var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var scrolled = (winScroll / height) * 100;
          document.getElementById("scrollindicator").style.width = scrolled + "%";
        } 
{
    // Class Menu.
    class Menu {
        constructor(el) {
            this.DOM = {el: el};
            // Open and close ctls.
            this.DOM.openCtrl = this.DOM.el.querySelector('.action--menu');
            this.DOM.closeCtrl = this.DOM.el.querySelector('.action--close');
            this.DOM.openCtrl.addEventListener('click', () => this.open());
            this.DOM.closeCtrl.addEventListener('click', () => this.close());
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
        $('.mainmenu__item').click(function() {
            close();
        })
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
            TweenMax.to(this.DOM.closeCtrl, 0.6, {
                ease: action === 'open' ? Quint.easeOut : Quart.easeInOut,
                startAt: action === 'open' ? {rotation: 0} : null,
                opacity: action === 'open' ? 1 : 0,
                rotation: action === 'open' ? 180 : 270
            });
            TweenMax.to(this.DOM.openCtrl, action === 'open' ? 0.6 : 0.3, {
                delay: action === 'open' ? 0 : 0.3,
                ease: action === 'open' ? Quint.easeOut : Quad.easeOut,
                opacity: action === 'open' ? 0 : 1
            });
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
    // Preload images.
    imagesLoaded(document.querySelector('.background'), {background: true}, () => document.body.classList.remove('loading'));
    // extra stuff..
    
    // From http://www.quirksmode.org/js/events_properties.html#position
    // Get the mouse position.
	const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
		if (!e) e = window.event;
		if (e.pageX || e.pageY) 	{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		return { x : posx, y : posy }
    };
    // Main image  tilt effect.
    class TiltFx {
        constructor() {
            this.DOM = {main: document.querySelector('.background')};
            // Number of layers (how many repeated image elements)
            this.layersTotal = 4;
            this.layout();
            this.initEvents();
        }
        layout() {
            let inner = '';
            for (let i = 0; i <= this.layersTotal-1; ++i) {
                inner +=  '<div class="background__copy" style="background-image: url(img/1.jpg)"></div>';
            }
            this.DOM.main.innerHTML = inner;
            this.DOM.layers = Array.from(this.DOM.main.querySelectorAll('.background__copy'));
        }
        initEvents() {
            this.mousemoveFn = ev => requestAnimationFrame(() => this.tilt(ev));
            document.body.addEventListener('mousemove', this.mousemoveFn);
        }
        // Tilt the image wrap and texts when mouse moving the current slide.
        tilt(ev) {
            if ( !allowTilt ) return;
            const mousepos = getMousePos(ev);
            const bounds = this.DOM.main.getBoundingClientRect();
            // Mouse position relative to the main element (this.DOM.main).
            const relmousepos = { 
                x : mousepos.x - bounds.left, 
                y : mousepos.y - bounds.top
            };
            this.DOM.layers.forEach((layer, pos) => {
                // Move the element from -val to val pixels in both x and y axis.
                let val = (pos+1);
                let t = {x:[val,-val],y:[val,-val]},
                    r = {x:[-2,2],y:[-val,val]},
                    s = {v:[1.03,0.97]};
                const transforms = {
                    translation : {
                        x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
                        y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0]
                    },
                    rotation : {
                        x: (r.x[1]-r.x[0])/bounds.height*relmousepos.y + r.x[0],
                        y: (r.y[1]-r.y[0])/bounds.width*relmousepos.x + r.y[0]
                    },
                    scale : {
                        v: (s.v[1]-s.v[0])/bounds.height*relmousepos.y + s.v[0],
                    }
                };
                TweenMax.to(layer, 1.5, {
                    ease: 'Power1.easeOut',
                    x: transforms.translation.x,
                    y: transforms.translation.y,
                    rotationX: transforms.rotation.x,
                    rotationY: transforms.rotation.y,
                    scale: transforms.scale.v,
                });
            });
        }
        // Scale up all the layers.
        zoom() {
            TweenMax.staggerTo( this.DOM.layers, 1.5, {
                ease: 'Expo.easeOut',
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1.1,
            }, 0.04);
        }
        reset() {
            TweenMax.staggerTo( this.DOM.layers, 1.5, {
                ease: 'Expo.easeOut',
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
            }, 0.07);
        }
    }
    let allowTilt = true;
    const tilt = new TiltFx();
    // Hovering the github link zooms in the main image.
    const githubEl =  document.querySelector('.github');
    githubEl.addEventListener('mouseenter', () => {
        allowTilt = false;
        tilt.zoom()
    });
    githubEl.addEventListener('mouseleave', () => allowTilt = true);
}
 
      }
  }
</script>
