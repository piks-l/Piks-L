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
                                <p class="big-date">02<small>&</small>03</p>
                                <p class="month">AOÛT 2019</p>
                            </div>
                        </div>
                    </div>
                </div>

                <nuxt-link to="/billetterie/" title="BILLETTERIE" class="billetterie">
                  <i class="fas fa-ticket-alt"></i>
                </nuxt-link>
            </div>
            <div class="colonne">
              <div class="block-scene">
                  <h3>T-800</h3>
                  <h4>- HARCORE STAGE -</h4>
                  <p><nuxt-link to="/artistes/ak47/" alt="AK47">AK47</nuxt-link > . <nuxt-link to="/" alt="">ANDY THE CORE VS LADY DAMMAGE</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">ASPHALT PIRATES</nuxt-link> . <nuxt-link to="/" alt="">CASUAL GABBERZ</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">EVIL GRIMACE</nuxt-link> . <nuxt-link to="/" alt="">HARD EFFECTZ VS VANDAL!SM</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">HATRED</nuxt-link> . <nuxt-link to="/" alt="">INNOMINATE</nuxt-link> . <nuxt-link to="/" alt="">MAISSOUILLE</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">MALICE VS DELETE</nuxt-link> . <nuxt-link to="/" alt="">MANU LE MALIN</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">REBELION</nuxt-link> . <nuxt-link to="/" alt="">STREIKS & KRATCHS</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">THANOS VS THE CLAMPS</nuxt-link> . <nuxt-link to="/" alt="">THE DJ PRODUCER</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">THE SICKEST SQUAD</nuxt-link> . <nuxt-link to="/" alt="">THRASHER VS SATAN</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">WARFACE</nuxt-link></p>
              </div>
              <div class="block-scene">
                  <h3>C-3PO</h3>
                  <h4>- HIP-HOP STAGE -</h4>
                  <p><nuxt-link to="/" alt="">ALKPOTE</nuxt-link> . <nuxt-link to="/" alt="">AL’TARBA X SENBEÏ</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">ANTON SERRA & OSTER LAPWASS</nuxt-link> . <nuxt-link to="/" alt="">DAVODKA</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">DJ DEL & DJ DAZ</nuxt-link> . <nuxt-link to="/" alt="">DJ FLY</nuxt-link> . <nuxt-link to="/" alt="">DOUMS & NÉPAL</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">HERETIK SYSTEM PRÉSENTE MAD MAXX SHOW</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">SVINKELS</nuxt-link></p>
              </div>
            </div>
            <div class="colonne">
              <div class="block-scene">
                  <h3>WALL-E</h3>
                  <h4>- TRANCE STAGE -</h4>
                  <p><nuxt-link to="/" alt="">BELIK BOOM</nuxt-link> . <nuxt-link to="/" alt="">BERG</nuxt-link> . <nuxt-link to="/" alt="">COMING SOON</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">DJ H.P VS HANBLECEYA</nuxt-link> . <nuxt-link to="/" alt="">GONZI</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">ITCHY & SCRATCHY</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">JUNO REACTOR VS UNDERCOVER</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">KOKMOK</nuxt-link> . <nuxt-link to="/" alt="">LA P’TITE FUMÉE</nuxt-link> . <nuxt-link to="/" alt="">MAITIKA</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">MAJOR 7</nuxt-link> . <nuxt-link to="/" alt="">MANDRAGORA</nuxt-link> . <nuxt-link to="/" alt="">MISS TEKIX VS OÏKIA</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">NELIO</nuxt-link> . <nuxt-link to="/" alt="">RANJI VS GHOST RIDER</nuxt-link> . <nuxt-link to="/" alt="">SKULLZ</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">STRYKER</nuxt-link> . <nuxt-link to="/" alt="">X-NOIZE</nuxt-link></p>
              </div>
              <div class="block-scene">
                  <h3>R2-D2</h3>
                  <h4>- TECHNO STAGE -</h4>
                  <p><nuxt-link to="/" alt="">14ANGER</nuxt-link> . <nuxt-link to="/" alt="">999999999</nuxt-link> . <nuxt-link to="/" alt="">BEN SIMS</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">CHICKS LUV US</nuxt-link> . <nuxt-link to="/" alt="">CLERIC</nuxt-link> . <nuxt-link to="/" alt="">ESTHER</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">I HATE MODELS</nuxt-link> . <nuxt-link to="/" alt="">JACID0REX</nuxt-link> . <nuxt-link to="/" alt="">LEXLAY</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">MARTIN BOOKS</nuxt-link> . <nuxt-link to="/" alt="">MINIMUM SYNDICAT</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">OCTAVE ONE</nuxt-link> . <nuxt-link to="/" alt="">PAUL DAMY</nuxt-link> . <nuxt-link to="/" alt="">PAUL RITCH</nuxt-link></p>
                  <p><nuxt-link to="/" alt="">SHLØMO</nuxt-link> . <nuxt-link to="/" alt="">TIMMO</nuxt-link></p>
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
