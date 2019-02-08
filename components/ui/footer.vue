<template>
  <footer id="footer">
    <div class="cursor">
      <div class="cursor__inner cursor__inner--circle"></div>
      <div class="cursor__inner cursor__inner--dot"></div>
    </div>
    <div class="navigation">
      <nuxt-link data-hover to="/">Accueil</nuxt-link>
      <nuxt-link data-hover to="/biographie/">Biographie</nuxt-link>
      <nuxt-link data-hover to="/blog/">Actualités</nuxt-link>
      <nuxt-link data-hover to="/artworks/">Artworks</nuxt-link>
      <nuxt-link data-hover to="/tattoos/">Tattoos</nuxt-link>
      <nuxt-link data-hover to="/contact/">Contact</nuxt-link> 
    </div>
    <div class="reseaux">
      <a target="_blank" href="https://www.facebook.com/sebastienoddtattoo/"><i class="fab fa-facebook-f"></i></a>
      <a target="_blank" href="https://twitter.com/sebastienodd"><i class="fab fa-twitter"></i></a>
      <a target="_blank" href="https://www.instagram.com/sebastien_odd_tattoo/"><i class="fab fa-instagram"></i></a>
      <a target="_blank" href="https://www.youtube.com/channel/UCH8hl7gSMTr4TcBSIF8PiwA"><i class="fab fa-youtube"></i></a>
      - 
      <a target="_blank" href="mailto:sebastienoddtattoos@gmail.com"><i class="fas fa-at"></i></a>
      <a target="_blank" href="tel:+33641850394"><i class="fas fa-phone"></i></a>
    </div>
    <influx-maps name="example"/>
    <div class="copyright">
      <p>© 2019 <a href="https://sebastien-odd.tattoo">Sebatien-Odd</a> - Tous droits réservés</p>
    </div>
  </footer>
</template>

<script>
import influxMaps from '~/components/plugins/maps.vue'
export default {
  components: {
      influxMaps
  },
  mounted: () => {
    { // Cursor
        // Some help functions
        const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
        const lineEq = (y2, y1, x2, x1, currentVal) => {
            let m = (y2 - y1) / (x2 - x1); 
            let b = y1 - m * x1;
            return m * currentVal + b;
        };
        const lerp = (a, b, n) => (1 - n) * a + n * b;
        const body = document.body;
        const bodyColor = getComputedStyle(body).getPropertyValue('--color-bg').trim() || 'white';
        const getMousePos = (e) => {
            let posx = 0;
            let posy = 0;
            if (!e) e = window.event;
            if (e.pageX || e.pageY) {
                posx = e.pageX;
                posy = e.pageY;
            }
            else if (e.clientX || e.clientY) 	{
                posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
                posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
            }
            return { x : posx, y : posy }
        }

        // Window sizes.
        let winsize;
        const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
        calcWinsize();
        // Recalculate window sizes on resize.
        window.addEventListener('resize', calcWinsize);

        // Custom mouse cursor.
        class CursorFx {
            constructor(el) {
                this.DOM = {el: el};
                this.DOM.dot = this.DOM.el.querySelector('.cursor__inner--dot');
                this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle');
                this.bounds = {dot: this.DOM.dot.getBoundingClientRect(), circle: this.DOM.circle.getBoundingClientRect()};
                this.scale = 1;
                this.opacity = 1;
                this.mousePos = {x:0, y:0};
                this.lastMousePos = {dot: {x:0, y:0}, circle: {x:0, y:0}};
                this.lastScale = 1;
                this.lastOpacity = 1;

                this.initEvents();
                requestAnimationFrame(() => this.render());
            }
            initEvents() {
                window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));
            }
            render() {
                this.lastMousePos.dot.x = lerp(this.lastMousePos.dot.x, this.mousePos.x - this.bounds.dot.width/2, 1);
                this.lastMousePos.dot.y = lerp(this.lastMousePos.dot.y, this.mousePos.y - this.bounds.dot.height/2, 1);
                this.lastMousePos.circle.x = lerp(this.lastMousePos.circle.x, this.mousePos.x - this.bounds.circle.width/2, 0.15);
                this.lastMousePos.circle.y = lerp(this.lastMousePos.circle.y, this.mousePos.y - this.bounds.circle.height/2, 0.15);
                this.lastScale = lerp(this.lastScale, this.scale, 0.15);
                this.lastOpacity = lerp(this.lastOpacity, this.opacity, 0.1);
                this.DOM.dot.style.transform = `translateX(${(this.lastMousePos.dot.x)}px) translateY(${this.lastMousePos.dot.y}px)`;
                this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.circle.x)}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`;
                this.DOM.circle.style.opacity = this.lastOpacity
                requestAnimationFrame(() => this.render());
            }
            enter() {
                cursor.scale = 2;
            }
            leave() {
                cursor.scale = 1;
            }
            click() {
                this.lastScale = 1;
                this.lastOpacity = 0;
            }
        }

        const cursor = new CursorFx(document.querySelector('.cursor'));

        // Custom cursor chnages state when hovering on elements with 'data-hover'.
        [...document.querySelectorAll('[data-hover]')].forEach((link) => {
            link.addEventListener('mouseenter', () => cursor.enter() );
            link.addEventListener('mouseleave', () => cursor.leave() );
            link.addEventListener('click', () => cursor.click() );
        });
    }
  } // Mounted end
 }
</script>
<style>

/* FOOTER */
#footer {
  background-color: #212121;
  color: #CCCCCC;
  overflow: hidden;
  /*position: relative;*/
  bottom: 0;
  width: 100%;
  padding: 25px 0px;
}

/* CURSOR */
#footer .cursor__inner {	
	z-index: 999999;
	pointer-events: none;
	position: absolute;
	top: 0;
	left: 0;
  /*mix-blend-mode: difference;*/
	border-radius: 50%;
}
#footer .cursor__inner--dot {
	width: 7px;
	height: 7px;
	background: #FFB413;
}
#footer .cursor__inner--circle {
	width: 30px;
	height:30px;
	border: 1px solid #151515;
	mix-blend-mode: difference;
}

/* FOOTER GENERAL */
#footer .navigation, 
#footer .reseaux,
#footer .copyright {
  display: block;
  position: relative;
  text-align: center;
}
#footer a {
  color: #f2f2f2;
  padding: 15px 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

/* FOOTER NAVIGATION */
#footer .navigation a.nuxt-link-active {
    color: #525252 !important;
}
#footer .navigation a::after {
    content: "";
    width: 100%;
    top: 50%;
    height: 3px;
    background: #ffb413;
    position: absolute;
    left: 0;
    opacity: 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: opacity .3s,-webkit-transform .3s;
    transition: opacity .3s,-webkit-transform .3s;
    transition: transform .3s,opacity .3s;
    transition: transform .3s,opacity .3s,-webkit-transform .3s;
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
}
#footer .navigation a:hover::after {
    opacity: 1;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    color: #ffb413; 
}

/* FOOTER RESEAUX */
#footer .reseaux a {
  color: #525252;
}
#footer .reseaux a:hover {
  color: #FFFFFF;
}

/* FOOTER COPYRIGHT */
#footer .copyright p {
    line-height: 51px;
}
#footer .copyright a {
    padding: 0;
}

</style>
