<template>
<div>
        <video autoplay="autoplay" id="video" class="scene_element scene_element--fadein" loop="loop" muted="muted" playsinline="">
            <source src="/videos/EI2019_TEASER01_NOTEXT_converted.mp4" type="video/mp4">
            <source src="/videos/EI2019_TEASER01_NOTEXT_converted.WebM" type="video/webm">
        </video>
        <div  class="container accueil scene_element scene_element--fadein">
            <div class="header">
                <div class="big-logo">
                    <img class="logo small-logo" src="/images/logo-horizontal.svg"  alt="logo">
                    <div class="circuit">
                        <h3>CIRCUIT PAUL RICARD - OPEN AIR FESTIVAL</h3>
                    </div>
                    <div class="date">
                        <div class="date-circle">
                            <img src="/images/circle.svg"/>
                            <div class="content-date">
                                <p class="big-date">02<small>&amp;</small>03</p>
                                <p class="month">AOÛT 2019</p>
                            </div>
                        </div>
                    </div>
                </div>

                <nuxt-link to="/billetterie/" title="BILLETTERIE" class="billetterie">
                  <i class="fas fa-ticket-alt"></i>
                </nuxt-link>
            </div>
            <div class="colonne"><br/>
              <div class="block-scene">
                  <h3>T-800</h3>
                  <h4>- HARCORE STAGE -</h4>
                  <p><nuxt-link to="/artistes/ak47/" alt="AK47">AK47</nuxt-link > . <nuxt-link to="/artistes/andy-the-core-lady-dammage/" alt="">ANDY THE CORE VS LADY DAMMAGE</nuxt-link></p>
                  <p><nuxt-link to="/artistes/asphalt-pirates/" alt="">ASPHALT PIRATES</nuxt-link> . <nuxt-link to="/artistes/casual-gabberz/" alt="">CASUAL GABBERZ</nuxt-link></p>
                  <p><nuxt-link to="/artistes/evil-grimace/" alt="">EVIL GRIMACE</nuxt-link> . <nuxt-link to="/artistes/hard-effectz-vs-vandal-sm/" alt="">HARD EFFECTZ VS VANDAL!SM</nuxt-link></p>
                  <p><nuxt-link to="/artistes/hatred/" alt="">HATRED</nuxt-link> . <nuxt-link to="/artistes/innominate/" alt="">INNOMINATE</nuxt-link> . <nuxt-link to="/artistes/massouille/" alt="">MAISSOUILLE</nuxt-link></p>
                  <p><nuxt-link to="/artistes/malice-vs-delete/" alt="">MALICE VS DELETE</nuxt-link> . <nuxt-link to="/artistes/manu-le-malin/" alt="">MANU LE MALIN</nuxt-link></p>
                  <p><nuxt-link to="/artistes/ornorm-adri1/" alt="">ORNORM ADRI1</nuxt-link> . <nuxt-link to="/artistes/pano/" alt="">PANO</nuxt-link></p>
                  <p><nuxt-link to="/artistes/rebelion/" alt="">REBELION</nuxt-link> . <nuxt-link to="/artistes/streiks-skratchs" alt="">STREIKS & KRATCHS</nuxt-link></p>
                  <p><nuxt-link to="/artistes/strez-vs-taz/" alt="">STREZ vs TAZ</nuxt-link> . <nuxt-link to="/artistes/tom-vs-dam-s/" alt="">TOM vs DAM’S</nuxt-link></p>
                  <p><nuxt-link to="/artistes/thanos-vs-the-clamps/" alt="">THANOS VS THE CLAMPS</nuxt-link> . <nuxt-link to="/artistes/the-dj-producer/" alt="">THE DJ PRODUCER</nuxt-link></p>
                  <p><nuxt-link to="/artistes/the-sickest-squad/" alt="">THE SICKEST SQUAD</nuxt-link> . <nuxt-link to="/artistes/trasher-vs-satan/" alt="">THRASHER VS SATAN</nuxt-link></p>
                  <p><nuxt-link to="/artistes/warface/" alt="">WARFACE</nuxt-link></p>
              </div>
              <div class="block-scene">
                  <h3>C-3PO</h3>
                  <h4>- HIP-HOP STAGE -</h4>
                  <p><nuxt-link to="/artistes/alkpote/" alt="">ALKPOTE</nuxt-link> . <nuxt-link to="/artistes/al-tarba-x-senbeï/" alt="">AL’TARBA X SENBEÏ</nuxt-link></p>
                  <p><nuxt-link to="/artistes/anton-serra-oster-lapwass/" alt="">ANTON SERRA & OSTER LAPWASS</nuxt-link> . <nuxt-link to="/artistes/davodka/" alt="">DAVODKA</nuxt-link></p>
                  <p><nuxt-link to="/artistes/dj-djel-dj-daz/" alt="">DJ DJEL & DJ DAZ</nuxt-link> . <nuxt-link to="/artistes/dj-fly/" alt="">DJ FLY</nuxt-link> . <nuxt-link to="/artistes/doums-népal/" alt="">DOUMS & NÉPAL</nuxt-link></p>
                  <p><nuxt-link to="/artistes/heretik-system-présente-mad-maxx-show/" alt="">HERETIK SYSTEM PRÉSENTE MAD MAXX SHOW</nuxt-link></p>
                  <p><nuxt-link to="/artistes/svinkels/" alt="">SVINKELS</nuxt-link></p>
              </div>
            </div>
            <div class="colonne"><br/>
              <div class="block-scene">
                  <h3>WALL-E</h3>
                  <h4>- TRANCE STAGE -</h4>
                  <p><nuxt-link to="/artistes/belik-boom/" alt="">BELIK BOOM</nuxt-link> . <nuxt-link to="/artistes/berg/" alt="">BERG</nuxt-link> . <nuxt-link to="/artistes/coming-soon/" alt="">COMING SOON</nuxt-link></p>
                  <p><nuxt-link to="/artistes/dj-h-p-vs-hanbleceya/" alt="">DJ H.P VS HANBLECEYA</nuxt-link> . <nuxt-link to="/artistes/gonzi/" alt="">GONZI</nuxt-link></p>
                  <p><nuxt-link to="/artistes/itchy-scratchy/" alt="">ITCHY & SCRATCHY</nuxt-link></p>
                  <p><nuxt-link to="/artistes/juno-reactor-vs-undercover/" alt="">JUNO REACTOR VS UNDERCOVER</nuxt-link></p>
                  <p><nuxt-link to="/artistes/kokmok/" alt="">KOKMOK</nuxt-link> . <nuxt-link to="/artistes/la-p-tite-fumée/" alt="">LA P’TITE FUMÉE</nuxt-link> . <nuxt-link to="/artistes/maitika/" alt="">MAITIKA</nuxt-link></p>
                  <p><nuxt-link to="/artistes/major7/" alt="">MAJOR7</nuxt-link> . <nuxt-link to="/artistes/mandragora/" alt="">MANDRAGORA</nuxt-link> . <nuxt-link to="/artistes/miss-tekix-vs-oïkia/" alt="">MISS TEKIX VS OÏKIA</nuxt-link></p>
                  <p><nuxt-link to="/artistes/nelio/" alt="">NELIO</nuxt-link> . <nuxt-link to="/artistes/ranji-vs-ghost-rider/" alt="">GHOST RIDER vs RANJI</nuxt-link> . <nuxt-link to="/artistes/skullz/" alt="">SKULLZ</nuxt-link></p>
                  <p><nuxt-link to="/artistes/stryker/" alt="">STRYKER</nuxt-link> . <nuxt-link to="/artistes/x-noize/" alt="">X-NOIZE</nuxt-link></p>
              </div>
              <div class="block-scene">
                  <h3>R2-D2</h3>
                  <h4>- TECHNO STAGE -</h4>

                  <p><nuxt-link to="/artistes/14anger/" alt="">14ANGER</nuxt-link> . <nuxt-link to="/artistes/999999999/" alt="">999999999</nuxt-link> . <nuxt-link to="/artistes/ben-sims/" alt="">BEN SIMS</nuxt-link></p>
                  <p><nuxt-link to="/artistes/chicks-luv-us/" alt="">CHICKS LUV US</nuxt-link> . <nuxt-link to="/artistes/cleric/" alt="">CLERIC</nuxt-link> . <nuxt-link to="/artistes/esther/" alt="">ESTHER</nuxt-link> . <nuxt-link to="/artistes/eikon/" alt="">EIKON</nuxt-link></p>
                  <p><nuxt-link to="/artistes/gaylord-da-silva/" alt="">GAYLORD DA SILVA</nuxt-link> . <nuxt-link to="/artistes/i-hate-models/" alt="">I HATE MODELS</nuxt-link> . <nuxt-link to="/artistes/jacidørex/" alt="">JACID0REX</nuxt-link> . <nuxt-link to="/artistes/lexlay/" alt="">LEXLAY</nuxt-link></p>
                  <p><nuxt-link to="/artistes/martin-books/" alt="">MARTIN BOOKS</nuxt-link> . <nuxt-link to="/artistes/minimum-syndicat/" alt="">MINIMUM SYNDICAT</nuxt-link></p>
                  <p><nuxt-link to="/artistes/octave-one/" alt="artistes/octave-one/">OCTAVE ONE</nuxt-link> . <nuxt-link to="/artistes/paul-damy/" alt="">PAUL DAMY</nuxt-link> . <nuxt-link to="/artistes/paul-ritch/" alt="">PAUL RITCH</nuxt-link></p>
                  <p><nuxt-link to="/artistes/shlømo/" alt="">SHLØMO</nuxt-link> . <nuxt-link to="/artistes/timmo/" alt="">TIMMO</nuxt-link></p>
              </div>
            </div>
        </div>

</div>
</template>

<script>
  import $ from 'jquery'
  // export
  export default {
    layout: 'default',
    components: { },
    data() {
      return {
        changed: false
      }
    }
  }
</script>
