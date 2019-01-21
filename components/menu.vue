<template>
  <div>
		<svg class="hidden">
			<symbol id="icon-arrow" viewBox="0 0 24 24">
				<title>arrow</title>
				<polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "/>
			</symbol>
			<symbol id="icon-drop" viewBox="0 0 24 24">
				<title>drop</title>
				<path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z"/><path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z"/>
			</symbol>
			<svg id="icon-github" viewBox="0 0 33 33">
				<title>github</title>
				<path d="M16.608.455C7.614.455.32 7.748.32 16.745c0 7.197 4.667 13.302 11.14 15.456.815.15 1.112-.353 1.112-.785 0-.386-.014-1.411-.022-2.77-4.531.984-5.487-2.184-5.487-2.184-.741-1.882-1.809-2.383-1.809-2.383-1.479-1.01.112-.99.112-.99 1.635.115 2.495 1.679 2.495 1.679 1.453 2.489 3.813 1.77 4.741 1.353.148-1.052.569-1.77 1.034-2.177-3.617-.411-7.42-1.809-7.42-8.051 0-1.778.635-3.233 1.677-4.371-.168-.412-.727-2.069.16-4.311 0 0 1.367-.438 4.479 1.67a15.602 15.602 0 0 1 4.078-.549 15.62 15.62 0 0 1 4.078.549c3.11-2.108 4.475-1.67 4.475-1.67.889 2.242.33 3.899.163 4.311C26.37 12.66 27 14.115 27 15.893c0 6.258-3.809 7.635-7.437 8.038.584.503 1.105 1.497 1.105 3.017 0 2.177-.02 3.934-.02 4.468 0 .436.294.943 1.12.784 6.468-2.159 11.131-8.26 11.131-15.455 0-8.997-7.294-16.29-16.291-16.29"></path>
			</svg>
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
							<a href="#" class="mainmenu__item">Story</a>
							<a href="#" class="mainmenu__item">Chronicles</a>
							<a href="#" class="mainmenu__item">Tour</a>
							<a href="#" class="mainmenu__item">Contact</a>
						</div>
						<p class="label label--topleft label--vert-mirror">Menu principal</p>
						<p class="label label--bottomright label--vert">www.sebastien-odd.tattoo</p>
					</div>
				</div>
				<div class="menu__item menu__item--2" data-direction="lr">
					<div class="menu__item-inner">
						<div class="menu__item-map"></div>
						<a href="#" class="menu__item-hoverlink">The location</a>
					</div>
				</div>
				<div class="menu__item menu__item--3" data-direction="bt">
					<div class="menu__item-inner">
						<div class="sidemenu">
							<a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">The Gameplay</span></a>
							<a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">About LARP</span></a>
							<a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">The Rules</span></a>
							<a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">History</span></a>
							<a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">People</span></a>
							<a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">Join</span></a>
							<a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">...</span></a>
						</div>
					</div>
				</div>
				<div class="menu__item menu__item--4" data-direction="rl">
					<div class="menu__item-inner">
						<p class="label label--topleft label--line">Join us now</p>
						<a href="#" class="menu__item-link">Learn how to <br> participate</a>
					</div>
				</div>
				<div class="menu__item menu__item--5" data-direction="tb">
					<div class="menu__item-inner">
						<p class="quote">Hail to thee, our infantry, still brave, beyond the grave</p>
					</div>
				</div>
				<button class="action action--menu"><svg class="icon icon--menu"><use xlink:href="#icon-menu"></use></svg></button>
				<button class="action action--close"><svg class="icon icon--close"><use xlink:href="#icon-close"></use></svg></button>
			</nav>
		</main>
   </div>
</template>

<script>
  import $ from 'jquery'
  export default {
      head: {
      },
      mounted: () => {
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

<style>
article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block;}audio,canvas,video{display:inline-block;}audio:not([controls]){display:none;height:0;}[hidden]{display:none;}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body{margin:0;}a:focus{outline:thin dotted;}a:active,a:hover{outline:0;}h1{font-size:2em;margin:0.67em 0;}abbr[title]{border-bottom:1px dotted;}b,strong{font-weight:bold;}dfn{font-style:italic;}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0;}mark{background:#ff0;color:#000;}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em;}pre{white-space:pre-wrap;}q{quotes:"\201C" "\201D" "\2018" "\2019";}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-0.5em;}sub{bottom:-0.25em;}img{border:0;}svg:not(:root){overflow:hidden;}figure{margin:0;}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{border:0;padding:0;}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;}button,input{line-height:normal;}button,select{text-transform:none;}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer;}button[disabled],html input[disabled]{cursor:default;}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0;}
*,
*::after,
*::before {
	box-sizing: border-box;
}

body {
	--color-text: #fff;
	--color-bg: #252525;
	--color-link: #fff;
	--color-link-hover: #f20c40;
	--color-bg-item1: #15171b;
	--color-bg-item2: #2c35b7;
	--color-bg-item3: #0f1013;
	--color-bg-item4: #1d2027;
	--color-bg-item5: #0f1013;
	--color-item-alt: #494d54;
	--color-quote: #5b677a;
	--color-info: #57535a;
	--color-title: #e23434;
	--color-tagline: #e2e2e2;
	font-family: "europa", Futura, Arial, sans-serif;
	min-height: 100vh;
	color: #57585c;
	color: var(--color-text);
	background-color: #fff;
	background-color: var(--color-bg);
	padding: 6rem 0 0 0;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

/* Page Loader */
.js .loading::before {
	content: '';
	position: fixed;
	z-index: 100000;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--color-bg);
}

.js .loading::after {
	content: '';
	position: fixed;
	z-index: 100000;
	top: 50%;
	left: 50%;
	width: 60px;
	height: 60px;
	margin: -30px 0 0 -30px;
	pointer-events: none;
	border-radius: 50%;
	opacity: 0.4;
	background: var(--color-link);
	animation: loaderAnim 0.7s linear infinite alternate forwards;
}

@keyframes loaderAnim {
	to {
		opacity: 1;
		transform: scale3d(0.5,0.5,1);
	}
}


a {
	text-decoration: none;
	color: var(--color-link);
	outline: none;
	transition: color 0.2s;
}

a:hover,
a:focus {
	color: var(--color-link-hover);
}

button:focus,
a:focus {
	outline: none;
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

.background {
	perspective: 1000px;
}

.background,
.background__copy {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-image: url(https://tympanus.net/Development/MultiboxMenu/img/1.jpg);
	background-position: 50% 0%;
	background-size: cover;
	z-index: 1;
}

.background__copy {
	opacity: 0.3;
}

/* Header */
.codrops-header {
	position: relative;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
	justify-items: center;
	align-self: start;
}

.codrops-header__title {
	font-size: 1rem;
	line-height: 1;
	font-weight: normal;
	margin: 0 1rem;
}

.info {
	display: block;
	grid-area: info;
	margin: 1rem 0;
	justify-self: end;
	text-align: center;
}

.github {
	display: block;
	margin: 1rem 0 0 0;
}

/* Top Navigation Style */
.codrops-links {
	position: relative;
	display: flex;
	justify-content: center;
	text-align: center;
	white-space: nowrap;
	font-size: 0.85rem;
}

.codrops-icon {
	display: inline-block;
	padding: 0.25em;
}

.content__title {
	font-family: "sabbath-black", serif;
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
	color: #fff;
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
	left: 50%;
	z-index: 200;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: repeat(3,33.33%);
	pointer-events: none;
}

.menu--open {
	pointer-events: auto;
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
	background: url(https://tympanus.net/Development/MultiboxMenu/img/2.jpg) no-repeat 50% 50%;
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
	font-size: 2rem;
	padding: 1rem;
	text-align: center;
	max-width: 70%;
	color: var(--color-quote);
	font-family: "sabbath-black",serif;
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
	.codrops-header {
		grid-area: codropsheader;
		padding: 0;
		justify-content: start;
	}
	.codrops-links {
		margin: 0;
	}
	.frame a {
		pointer-events: auto;
	}
	.github {
		grid-area: github;
		justify-self: start;
	}
	.info {
		margin: 0 6rem 0 0;
		color: var(--color-info);
	}
	.menu {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 50%;
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
		color: var(--color-item-alt);
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
		color: var(--color-item-alt);
	}
	.mainmenu__item::before {
		counter-increment: menuitem;
		content: counters(menuitem, "", decimal-leading-zero);
		position: absolute;
	    font-size: 0.85rem;	
	    top: 25%;
	    left: -1.25rem;
	    color: var(--color-item-alt);
	}
	.mainmenu__item::after {
		content: '';
		width: 100%;
		top: 58%;
		height: 6px;
		background: var(--color-link-hover);
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
