<template>
  <div class="page">
        <div class="decoration">
          <img class="select-fond acces active" src="https://electrobotik.netlify.com/images/fondcircuit.jpg"  alt="">
          <img class="select-fond camping" src="https://electrobotik.netlify.com/images/fondcamping.jpg"  alt="">
          <img class="select-fond faq" src="https://electrobotik.netlify.com/images/fondfaq.jpg"  alt="">
        </div>
        <div class="button-date select-infos mobile-menu">
          <button class="button is-checked" data-class="acces">ACCÈS</button><!--
          --><span>/</span><!--
          --><button class="button" data-class="camping">CAMPING</button><!--
          --><span>/</span><!--
          --><button class="button" data-class="faq">F.A.Q</button>
        </div>
        <div class="container-infos scene_element scene_element--fadein">
          <h2>INFOS PRATIQUES</h2>
          <div class="button-date select-infos">
              <div class="center">
                  <button class="button is-checked" data-class="acces">LE CIRCUIT - ACCÈS</button>
                  <span>/</span>
                  <button class="button" data-class="camping">CAMPING</button>
                  <span>/</span>
                  <button class="button" data-class="faq">F.A.Q</button>
              </div>
          </div>
        </div>
        <div id="acces" class="content-large">
            <div class="slide acces active">
                <div class="container">
                    <div class="color">
                        <p>C’est la deuxième fois qu’Electrobotik Invasion investit le circuit. Pour cette édition anniversaire,
                          le festival s’installera sur une zone verte au bord de la piste et proposera un camping à l’ombre.</p>
                    </div>
                    <div class="no-color">
                        <p>Le circuit Paul Ricard, créé en 1970 par Mr Paul Ricard a accueilli 14 GP de France de F1, 22 Bol d'Or et 12 GP
                          de France de moto jusqu'en 1999. Rénové et modernisé en 2001, le Circuit est ensuite devenu lieu avant-gardiste et
                          créatif dédié aux essais et à la communication.</p><br>
                        <p>Désigné Premier Centre d'Excellence par l'Institut FIA pour la Sécurité en Sport Automobile en 2005, homologué par
                          la FIA en 2006, le Circuit a rouvert ses portes au public en 2009 et accueille désormais des épreuves de compétition
                          automobile, moto, camion, karting, vélos, course à obstacles, festivals de musique ainsi que des présentations presse,
                          soirées etc...</p>
                        <div class="lien">
                          <a href="#" alt="map"><i class="fas fa-map-marker-alt"></i></a><!--
                          --><a href="#" alt="link"><i class="fas fa-link"></i></a>
                        </div>
                    </div>
                    <div class="vignette voiture">
                        <i class="fas fa-car"></i>
                        <div class="center">
                            <p class="gras">A50, sortie n°11</p>
                            <p class="gras">direction &#62;</p>
                            <p>Le Beausset - Aubagne - Circuit du Castellet.</p>
                        </div>
                    </div><!--
                    --><div class="vignette avion">
                        <i class="fas fa-fighter-jet"></i>
                        <div class="center">
                            <p class="gras">aeroports &#62;</p>
                            <p>Marseille Provence (66 km)</p>
                            <p>Toulon Hyères (55 km)</p>
                            <p>Nice Côte d’Azur (176 km)</p>
                        </div>
                    </div><!--
                    --><div class="vignette train">
                        <i class="fas fa-subway"></i>
                        <div class="center">
                            <p class="gras">trains &#62;</p>
                            <p>Bandol (20 km)</p>
                            <p>Toulon (30 km)</p>
                            <p>Marseille (45 min)</p>
                            <p>Aix-en-Provence TGV (45 min)</p>
                        </div>
                    </div>
                    <div class="reservez">
                        <i class="far fa-thumbs-up"></i>
                        <p class="gras">Réservez votre trajet en train sur la plateforme de cotrainage <a href="https://www.allonsbontrain.fr/" target="_blank" alt="AllonsBonTrain">AllonsBonTrain</a> !</p>
                        <p>Petit plus, vous voyagez avec d'autres festivaliers et vous réduisez votre empreinte carbone</p>
                    </div>
                </div>
            </div><!--
            --><div class="slide camping">
                <div class="container">
                    <div class="color">
                        <p>Le camping, directement implanté sur le site exploité par le festival est équipé de douches, wc, points d'eau et sera situé dans une zone très ombragée.</p>
                    </div>
                    <div class="no-color">
                        <p>Le samedi et le dimanche TALOWA DUB CLUB présente un week-end Dub a Dub Style au camping de l'ELECTROBOTIK INVASION !
                          Toute la journée viens t'enivrer aux rythmes de basses lourdes, sur des sonorités dub reggae steppas aux côtés de légendes
                          du milieu : le talentueux mc Ras Tweed dont la réputation n'est plus à faire et le warrior Bunny Dread à la sélection musicale
                          pointue ! Le tout sera sonorisé par le puissant Welders Hi Fi Sound System.</p><br>
                        <p>Grosse ambiance 'heavy style' au Camping du samedi au dimanche signé Talowa Productions x ELECTROBOTIK INVASION.</p>
                    </div>
                    <div class="tabs">
                        <div class="tab">
                            <input type="radio" id="question1" name="question">
                            <label class="tab-label" for="question1">Pourquoi le camping est payant ?</label>
                            <div class="tab-content">
                              <p>Parce que nous mettons tout en place pour vous accueillir dans les meilleures conditions possibles et que votre expérience
                                au camping de l’Electrobotik Invasion soit extraordinaire. Vous aurez donc accès à des douches, des sanitaires mais aussi des
                                jeux d’eau, un bar et de la musique avec un soundsystem qui jouera en journée le samedi et le dimanche.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question2" name="question">
                            <label class="tab-label" for="question2">Sont interdits !</label>
                            <div class="tab-content">
                              <ul>
                                  <li>Les objet dangereux (objet tranchant ou contondant, armes à feu, articles de pyrotechnie, engins explosifs ou incendiaires).</li>
                                  <li>Tout produit inflammable, explosif, corrosif, comburant, toxique, infectieux, ... Aérosols.</li>
                                  <li>Les objets encombrants (caddys, etc...)</li>
                                  <li>Appareils contenant de l’oxygène liquide</li>
                                  <li>Feux, réchauds, et verre.</li>
                                  <li>Les animaux</li>
                                  <li>Les appareils enregistreurs, les appareils photos et les caméras de type professionnel sont interdits. Seuls sont autorisés les appareils photos de type compacts.</li>
                              </ul>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question3" name="question">
                            <label class="tab-label" for="question3">Les canettes sont-elles autorisées sur le festival ?</label>
                            <div class="tab-content">
                              <p>Non l’alcool et plus généralement les canettes et bouteilles en verre sont interdites sur le camping.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question4" name="question">
                            <label class="tab-label" for="question4">Le camping bénéficie-t-il d’un éclairage toute la nuit ?</label>
                            <div class="tab-content">
                              <p>Oui, pour des raisons de sécurités le camping bénificiera d'un éclairage toute la nuit.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question5" name="question">
                            <label class="tab-label" for="question5">Le camping sauvage (ex.dans un champ voisin) est-il autorisé ?</label>
                            <div class="tab-content">
                              <p>Non des arrétés existent pour interdire le camping sauvage, la zone est sensible au feu (zone de pinède).</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question6" name="question">
                            <label class="tab-label" for="question6">Il y aura-t-il des points d’eau gratuits (potable/non potable) ?</label>
                            <div class="tab-content">
                              <p>Au camping, les points d’eau ainsi que les douches sont gratuits.<br>
                                Dans l’enceinte du festival, sur les lieux de concerts, les points d’eau sont gratuits.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question7" name="question">
                            <label class="tab-label" for="question7">Puis-je stationner mon véhicule à l’intérieur du camping ?</label>
                            <div class="tab-content">
                              <p>Non une aire de stationnement festival en dehors du site non surveillée sera disponible aux détenteurs d’un billet</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question8" name="question">
                            <label class="tab-label" for="question8">Puis-je utiliser un groupe électrogène ?</label>
                            <div class="tab-content">
                              <p>Non, c’est strictement interdit.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question9" name="question">
                            <label class="tab-label" for="question9">Puis-je utiliser un réchaud ou faire un barbecue ?</label>
                            <div class="tab-content">
                              <p>Interdiction stricte d’utiliser ce type de matériel et d’introduire tout liquide inflammable sur le camping (essence, alcool à brûler).</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question10" name="question">
                            <label class="tab-label" for="question10">Quels sont les moyens mis à disposition pour collecter mes ordures ?</label>
                            <div class="tab-content">
                              <p>Des conteneurs et poubelles de tri seront disposés partout sur les sites (camping et festival), une association sensibilisera
                                au respect des lieux et au tri des déchets</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--
            --><div class="slide faq">
                <div class="container">
                    <div class="tabs">
                        <div class="tab">
                            <input type="radio" id="question11" name="question">
                            <label class="tab-label" for="question11">Pourquoi le camping est payant ?</label>
                            <div class="tab-content">
                              <p>Parce que nous mettons tout en place pour vous accueillir dans les meilleures conditions possibles et que votre expérience
                                au camping de l’Electrobotik Invasion soit extraordinaire. Vous aurez donc accès à des douches, des sanitaires mais aussi des
                                jeux d’eau, un bar et de la musique avec un soundsystem qui jouera en journée le samedi et le dimanche.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question12" name="question">
                            <label class="tab-label" for="question12">Sont interdits !</label>
                            <div class="tab-content">
                              <ul>
                                  <li>Les objet dangereux (objet tranchant ou contondant, armes à feu, articles de pyrotechnie, engins explosifs ou incendiaires).</li>
                                  <li>Tout produit inflammable, explosif, corrosif, comburant, toxique, infectieux, ... Aérosols.</li>
                                  <li>Les objets encombrants (caddys, etc...)</li>
                                  <li>Appareils contenant de l’oxygène liquide</li>
                                  <li>Feux, réchauds, et verre.</li>
                                  <li>Les animaux</li>
                                  <li>Les appareils enregistreurs, les appareils photos et les caméras de type professionnel sont interdits. Seuls sont autorisés les appareils photos de type compacts.</li>
                              </ul>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question13" name="question">
                            <label class="tab-label" for="question13">Puis-je amener ma nourriture et ma boisson (alcool inclus) sans la moindre restriction en termes de quantité ?</label>
                            <div class="tab-content">
                              <p>Non</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question14" name="question">
                            <label class="tab-label" for="question14">Les canettes sont-elles autorisées sur le festival ?</label>
                            <div class="tab-content">
                              <p>Non l’alcool et plus généralement les canettes et bouteilles en verre sont interdites sur le camping.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question15" name="question">
                            <label class="tab-label" for="question15">Le camping bénéficie-t-il d’un éclairage toute la nuit ?</label>
                            <div class="tab-content">
                              <p>Oui, pour des raisons de sécurités le camping bénificiera d'un éclairage toute la nuit.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question16" name="question">
                            <label class="tab-label" for="question16">Le camping sauvage (ex.dans un champ voisin) est-il autorisé ?</label>
                            <div class="tab-content">
                              <p>Non des arrétés existent pour interdire le camping sauvage, la zone est sensible au feu (zone de pinède).</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question17" name="question">
                            <label class="tab-label" for="question17">Il y aura-t-il des points d’eau gratuits (potable/non potable) ?</label>
                            <div class="tab-content">
                              <p>Au camping, les points d’eau ainsi que les douches sont gratuits.<br>
                                Dans l’enceinte du festival, sur les lieux de concerts, les points d’eau sont gratuits.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question18" name="question">
                            <label class="tab-label" for="question18">Puis-je stationner mon véhicule à l’intérieur du camping ?</label>
                            <div class="tab-content">
                              <p>Non une aire de stationnement festival en dehors du site non surveillée sera disponible aux détenteurs d’un billet</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question19" name="question">
                            <label class="tab-label" for="question19">Puis-je utiliser un groupe électrogène ?</label>
                            <div class="tab-content">
                              <p>Non, c’est strictement interdit.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question20" name="question">
                            <label class="tab-label" for="question20">Puis-je utiliser un réchaud ou faire un barbecue ?</label>
                            <div class="tab-content">
                              <p>Interdiction stricte d’utiliser ce type de matériel et d’introduire tout liquide inflammable sur le camping (essence, alcool à brûler).</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question21" name="question">
                            <label class="tab-label" for="question21">Quel est l’âge limite pour venir à ELK ?</label>
                            <div class="tab-content">
                              <p>Interdit aux - de 16 ans non accompagnés.<br>
                                L’accès au festival est autorisé aux mineurs de -16 ans accompagnés d’un responsable légal.</p>
                              <p>Les mineurs de +16 ans non accompagnés d’un responsable légal devront apporter avec elles une
                                dérogation signée d’un responsable légal les déchargeant sur l'accompagnateur. Ce document devra
                                être accompagné d'une copie de pièce d'identité en cours de validité du responsable légal signataire,
                                à présenter obligatoirement devant un agent d'état civil dûment habilité à l’entrée du festival.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question22" name="question">
                            <label class="tab-label" for="question22">Quels sont les moyens mis à disposition pour collecter mes ordures ?</label>
                            <div class="tab-content">
                              <p>Des conteneurs et poubelles de tri seront disposés partout sur les sites (camping et festival), une association sensibilisera
                                au respect des lieux et au tri des déchets</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question23" name="question">
                            <label class="tab-label" for="question23">À partir de quel âge les billets pour ELK sont-ils payants ?</label>
                            <div class="tab-content">
                              <p>Entrée payante à partir de 12 ans.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question24" name="question">
                            <label class="tab-label" for="question24">Le site est-il accessible aux PMR ?</label>
                            <div class="tab-content">
                              <p>Oui, détails à venir.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question25" name="question">
                            <label class="tab-label" for="question25">Y a-t-il un espace garderie au sein du festival ?</label>
                            <div class="tab-content">
                              <p>Non</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question26" name="question">
                            <label class="tab-label" for="question26">J’ai besoin de poser mes affaires, y a-t-il des casiers disponibles sur le site du festival ?</label>
                            <div class="tab-content">
                              <p>Non</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question27" name="question">
                            <label class="tab-label" for="question27">Y-a-t-il des distributeurs de billets automatiques dans l’enceinte du festival ? Si non : où puis-je en trouver ?</label>
                            <div class="tab-content">
                              <p>Pas de DAB.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question28" name="question">
                            <label class="tab-label" for="question28">Puis je distribuer des flyers, affiches ou autres outils promotionnels ?</label>
                            <div class="tab-content">
                              <p>AFFICHAGE UNIQUEMENT SUR LES POINTS INDIQUES AFIN DE RESPECTER L’ENVIRONNEMENT</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question29" name="question">
                            <label class="tab-label" for="question29">Les animaux sont-ils autorisés dans l’enceinte du festival ?</label>
                            <div class="tab-content">
                              <p>Non</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question30" name="question">
                            <label class="tab-label" for="question30">Je suis végétarien : y-aura-t-il des stands spécifiques ?</label>
                            <div class="tab-content">
                              <p>Oui</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question31" name="question">
                            <label class="tab-label" for="question31">Les gobelets ecocup en plastique sont-ils incontournables pour acheter des boissons ?</label>
                            <div class="tab-content">
                              <p>Les gobelets consignes seront incontournables.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question32" name="question">
                            <label class="tab-label" for="question32">Comment acheter mon/mes gobelet(s) ?</label>
                            <div class="tab-content">
                              <p>Au bar lors du premier achat.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question33" name="question">
                            <label class="tab-label" for="question33">Puis-je rendre mon gobelet à la fin du festival pour récupérer mon argent ?</label>
                            <div class="tab-content">
                              <p>Avant la fermeture des bars et des banques.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question34" name="question">
                            <label class="tab-label" for="question34">Est-il possible de rentrer dans l’espace concerts avec de la nourriture ?</label>
                            <div class="tab-content">
                              <p>Non</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question35" name="question">
                            <label class="tab-label" for="question35">Est-il possible de rentrer dans l’espace concerts avec des boissons ? Et si oui, sous quelles conditions ?</label>
                            <div class="tab-content">
                              <p>Non</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question36" name="question">
                            <label class="tab-label" for="question36">Suis-je autorisé à camper sur un parking ?</label>
                            <div class="tab-content">
                              <p>Non</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question37" name="question">
                            <label class="tab-label" for="question37">Les parkings disposent-ils d’un éclairage ?</label>
                            <div class="tab-content">
                              <p>Oui</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question38" name="question">
                            <label class="tab-label" for="question38">Je n'ai pas reçu mes billets par mail, comment les récupérer ?</label>
                            <div class="tab-content">
                              <p>Dans un premier temps, consultez vos courriers indésirables, il se peut que les mails envoyés par festik y soient transférés.
                                Vous pouvez ensuite vous rendre dans "SUIVI DE COMMANDE", cliquer sur "référence oubliée" indiquer votre adresse mail. Si
                                celle-ci est reconnue, vous recevrez par mail les liens vers les billets.</p>
                              <p>Si votre adresse mail n'est pas reconnue, écrivez à contact@festik.net en donnant un maximum d'informations (si vous avez
                                payé par carte bancaire : les références du paiement qui apparaissent sur votre relevé de carte bancaire, vos nom et prénoms,
                                les date et heure de la commande, le nom du spectacle, du festival, du lieu, les dates et heures de la représentation, le nombre
                                de places, nous vous répondrons sous 48h. En dernier recours ou le jour du spectacle, pas de panique, rendez vous au guichet de l'organisateur,
                                celui ci dispose d'une liste des réservations et pourra vous retrouver. Si vous avez payé par carte bancaire, apportez les références du paiement
                                qui apparaissent sur votre relevé de carte bancaire.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question39" name="question">
                            <label class="tab-label" for="question39">J'ai reçu les billets par mail mais je ne peux pas les imprimer.</label>
                            <div class="tab-content">
                              <p>Si vous disposez d'un Smartphone et pouvez y recevoir des mails, retournez à la page d'impression des billets et
                                sélectionnez l'option "recevoir mon billet sur un Smartphone". Sinon, recopiez les N° de commande et de billets qui apparaissent
                                sur celui ci et rendez vous au guichet de l'organisateur, celui ci dispose d'une liste des réservations et pourra vous retrouver.</p>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="radio" id="question40" name="question">
                            <label class="tab-label" for="question40">J’ai reçu les billets par mail, je veux les imprimer mais ils paraissent énormes !</label>
                            <div class="tab-content">
                              <p>Il est probable que vous ayez sélectionné l’option « recevoir les billets sur votre smartphone (envoi par email) » Rendez-vous dans
                                "SUIVI DE COMMANDE", saisissez votre adresse mail et la référence de la commande et sélectionnez « imprimer les billets »</p>
                            </div>
                        </div>

                    </div>
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
    head() {
      return {
        title: 'Electrobotik Invasion - le 2 & 3 Août 2019',
        meta: [
          { hid: 'description', name: 'description', content: 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:title', 'content': 'Electrobotik Invasion - le 2 & 3 Août 2019', 'vmid': 'og:title' },
          { 'property': 'og:description', 'content': 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:image', 'content': 'images/uploads/link_share.jpg', 'vmid': 'og:image' }
        ]
      }
    },
    mounted () {
      // menu page info pratiques
      $( ".select-infos button" ).click(function() {
        var info =   $( this ).attr('data-class');
        $('.select-fond').each( function() {
            $( this ).removeClass( "active" );
        });
        $('.slide').each( function() {
            $( this ).removeClass( "active" );
        });
        $( "." + info ).addClass( "active" );
        $('.select-infos button').each( function() {
            $( this ).removeClass( "is-checked" );
        });
        $( this ).addClass( "is-checked" );
        $('.content-large').removeAttr( "id" ).attr('id', info);
      });    	
    }
  }
</script>
