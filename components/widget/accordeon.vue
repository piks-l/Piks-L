<template>
  <div class="accordeon">
    <div class="collapsible">
      <div class="collapsible__head">
        <div class="collapsible__title">
          <h4>Accordéon Button 1</h4>
        </div>
        <div class="collapsible__icon-box">
          <i class="fas fa-angle-down collapsible__icon"></i>
        </div>
      </div>
      <div class="collapsible__body">
        <div class="collapsible__content">
          <div class="collapsible__info">
              <h5>Titre Accordeon 1</h5>
              <small>DD/MM/YYYY</small>
              <p>
                Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.
                Shagg athg gof'nn hupadgh R'lyeh, sll'ha kn'a kadishtu y-Tsathoggua cwgah'n ilyaa ee hafh'drn mg tharanak, throd kadishtu naflAzathoth f'r'luh gof'nn f'uln ron ilyaa n'gha.
                Shtunggli Cthulhunyth llll Shub-Niggurath hai gotha n'ghft geb kn'aor ebunma n'gha nglui, Tsathoggua lloignyth ronoth hupadgh kadishtu nw naflah grah'n nak'yarnak uln Tsathoggua y'hah, R'lyeh epor wgah'n sgn'wahl naflkn'a throd Yoggoth nw ftaghu n'ghft.
                Ebunma vulgtm vulgtlagln lw'nafh shogg ron, Nyarlathotep cvulgtm nnnTsathoggua stell'bsna R'lyeh s'uhn, nwor ya R'lyeh shugg.
                H'gof'nn r'luh kn'a Nyarlathotep sgn'wahl shuggnyth uh'e, Azathoth sgn'wahlor naflstell'bsna hlirghor Tsathoggua throd, geboth n'ghft cShub-Niggurath ph'Chaugnar Faugn Dagon.
              </p>
          </div>
        </div>
      </div>
    </div>
    <div class="collapsible">
      <div class="collapsible__head">
        <div class="collapsible__title">
          <h4>Accordéon Button 2</h4>
        </div>
        <div class="collapsible__icon-box">
          <i class="fas fa-angle-down collapsible__icon"></i>
        </div>
      </div>
      <div class="collapsible__body">
        <div class="collapsible__content">
          <div class="collapsible__info">
              <h5>Titre Accordeon 2</h5>
              <small>DD/MM/YYYY</small>
              <p>
                Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.
                Shagg athg gof'nn hupadgh R'lyeh, sll'ha kn'a kadishtu y-Tsathoggua cwgah'n ilyaa ee hafh'drn mg tharanak, throd kadishtu naflAzathoth f'r'luh gof'nn f'uln ron ilyaa n'gha.
                Shtunggli Cthulhunyth llll Shub-Niggurath hai gotha n'ghft geb kn'aor ebunma n'gha nglui, Tsathoggua lloignyth ronoth hupadgh kadishtu nw naflah grah'n nak'yarnak uln Tsathoggua y'hah, R'lyeh epor wgah'n sgn'wahl naflkn'a throd Yoggoth nw ftaghu n'ghft.
                Ebunma vulgtm vulgtlagln lw'nafh shogg ron, Nyarlathotep cvulgtm nnnTsathoggua stell'bsna R'lyeh s'uhn, nwor ya R'lyeh shugg.
                H'gof'nn r'luh kn'a Nyarlathotep sgn'wahl shuggnyth uh'e, Azathoth sgn'wahlor naflstell'bsna hlirghor Tsathoggua throd, geboth n'ghft cShub-Niggurath ph'Chaugnar Faugn Dagon.
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted() {
      document.querySelectorAll('.collapsible').forEach(el => el.addEventListener('click', e => {
        e.currentTarget.classList.toggle('collapsible--open')
      }));
    }
  };
</script>
<style>
.collapsible {
      min-width: 290px;
      max-width: 700px;
      margin: 10px auto;
      display: flex;
      flex-direction: column;
  }
  .collapsible .linked {
      padding: 10px 0px;
  }
  .collapsible > * {
  }
  .collapsible__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 35px;
      z-index: 1;
      cursor: pointer;
  }
  .collapsible__body {
      border-top: none;
      margin-top: -10px;
      overflow: hidden;
      height: 0;
      padding: 0px;
      transition: all .4s;
  }
  .collapsible__content {
      opacity: 0;
      transition: all .4s .4s;
      display: block;
      justify-content: space-between;
      border-bottom: 5px solid #FFB413;
      padding-bottom: 20px;
  }
  .collapsible--open .collapsible__icon {
      color: #000;
  }
  .collapsible__icon {
      transition: all .2s;
      transform: rotate(0);
      font-size: 30px;
      color: #FFB413;
  }
  .collapsible--open .collapsible__icon {
      transform: rotate(180deg);
  }
  .collapsible--open .collapsible__body {
      padding: 10px 0px 10px;
      height: 100%;
  }
  .collapsible--open .collapsible__content {
      opacity: 1;
  }
</style>
