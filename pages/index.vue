<template>
<div>
        <video autoplay="autoplay" id="video" class="scene_element scene_element--fadein" loop="loop" muted="muted" playsinline="">
            <source src="https://electrobotik.frb.io/site/themes/electrobotik/video/EI2019_TEASER01_NOTEXT_converted.mp4" type="video/mp4">
            <source src="https://electrobotik.frb.io/site/themes/electrobotik/video/EI2019_TEASER01_NOTEXT_converted.WebM" type="video/webm">
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

                <a href="billetterie.html" title="BILLETTERIE" class="billetterie">
                  <i class="fas fa-ticket-alt"></i>
                </a>
            </div>
            <div class="colonne">
              <div class="block-scene">
                  <h3>T-800</h3>
                  <h4>- HARCORE STAGE -</h4>
                  <p><a href="artiste/ak47.html" alt="">AK47</a> . <a href="#" alt="">ANDY THE CORE VS LADY DAMMAGE</a></p>
                  <p><a href="#" alt="">ASPHALT PIRATES</a> . <a href="#" alt="">CASUAL GABBERZ</a></p>
                  <p><a href="#" alt="">EVIL GRIMACE</a> . <a href="#" alt="">HARD EFFECTZ VS VANDAL!SM</a></p>
                  <p><a href="#" alt="">HATRED</a> . <a href="#" alt="">INNOMINATE</a> . <a href="#" alt="">MAISSOUILLE</a></p>
                  <p><a href="#" alt="">MALICE VS DELETE</a> . <a href="#" alt="">MANU LE MALIN</a></p>
                  <p><a href="#" alt="">REBELION</a> . <a href="#" alt="">STREIKS & KRATCHS</a></p>
                  <p><a href="#" alt="">THANOS VS THE CLAMPS</a> . <a href="#" alt="">THE DJ PRODUCER</a></p>
                  <p><a href="#" alt="">THE SICKEST SQUAD</a> . <a href="#" alt="">THRASHER VS SATAN</a></p>
                  <p><a href="#" alt="">WARFACE</a></p>
              </div>
              <div class="block-scene">
                  <h3>C-3PO</h3>
                  <h4>- HIP-HOP STAGE -</h4>
                  <p><a href="#" alt="">ALKPOTE</a> . <a href="#" alt="">AL’TARBA X SENBEÏ</a></p>
                  <p><a href="#" alt="">ANTON SERRA & OSTER LAPWASS</a> . <a href="#" alt="">DAVODKA</a></p>
                  <p><a href="#" alt="">DJ DEL & DJ DAZ</a> . <a href="#" alt="">DJ FLY</a> . <a href="#" alt="">DOUMS & NÉPAL</a></p>
                  <p><a href="#" alt="">HERETIK SYSTEM PRÉSENTE MAD MAXX SHOW</a></p>
                  <p><a href="#" alt="">SVINKELS</a></p>
              </div>
            </div>
            <div class="colonne">
              <div class="block-scene">
                  <h3>WALL-E</h3>
                  <h4>- TRANCE STAGE -</h4>
                  <p><a href="#" alt="">BELIK BOOM</a> . <a href="#" alt="">BERG</a> . <a href="#" alt="">COMING SOON</a></p>
                  <p><a href="#" alt="">DJ H.P VS HANBLECEYA</a> . <a href="#" alt="">GONZI</a></p>
                  <p><a href="#" alt="">ITCHY & SCRATCHY</a></p>
                  <p><a href="#" alt="">JUNO REACTOR VS UNDERCOVER</a></p>
                  <p><a href="#" alt="">KOKMOK</a> . <a href="#" alt="">LA P’TITE FUMÉE</a> . <a href="#" alt="">MAITIKA</a></p>
                  <p><a href="#" alt="">MAJOR 7</a> . <a href="#" alt="">MANDRAGORA</a> . <a href="#" alt="">MISS TEKIX VS OÏKIA</a></p>
                  <p><a href="#" alt="">NELIO</a> . <a href="#" alt="">RANJI VS GHOST RIDER</a> . <a href="#" alt="">SKULLZ</a></p>
                  <p><a href="#" alt="">STRYKER</a> . <a href="#" alt="">X-NOIZE</a></p>
              </div>
              <div class="block-scene">
                  <h3>R2-D2</h3>
                  <h4>- TECHNO STAGE -</h4>
                  <p><a href="#" alt="">14ANGER</a> . <a href="#" alt="">999999999</a> . <a href="#" alt="">BEN SIMS</a></p>
                  <p><a href="#" alt="">CHICKS LUV US</a> . <a href="#" alt="">CLERIC</a> . <a href="#" alt="">ESTHER</a></p>
                  <p><a href="#" alt="">I HATE MODELS</a> . <a href="#" alt="">JACID0REX</a> . <a href="#" alt="">LEXLAY</a></p>
                  <p><a href="#" alt="">MARTIN BOOKS</a> . <a href="#" alt="">MINIMUM SYNDICAT</a></p>
                  <p><a href="#" alt="">OCTAVE ONE</a> . <a href="#" alt="">PAUL DAMY</a> . <a href="#" alt="">PAUL RITCH</a></p>
                  <p><a href="#" alt="">SHLØMO</a> . <a href="#" alt="">TIMMO</a></p>
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
