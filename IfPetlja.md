---
layout: default
title: Petlja if...else
nav_order: 3
has_children: true
---

# Uvjetno grananje: Petlja <em>If...Else</em>
<p align="justify"><em>If...Else</em> petlja u programiranju koristi se za kontroliranje toka programa, tj. za donošenje odluka. U ovisnosti je li postavljeni uvjet za odlučivanje ispunjen ili ne, izvršavaju se blokovi naredbi prethodno povezani s pojedinim ishodom. Petlje <em>if...else</em> omogućuju programu da dinamički kontrolira izvršavanje i na taj način bude prilagodljiv u ovisnosti o unesenim podacima. Zbog toga, razumijevanje linija if...else koda nužno je za stvaranje inteligentnih sustava koji se mogu prilagoditi različitim scenarijima pri izvršavanju programa.</p>
<p><strong>Po završetku ovih vježbi student će moći:</strong></p>

1. Razumjeti ulogu <em>if...else</em> petlji u kontroli toka pri izvršavanju programa
2. Razumjeti i znati primijeniti sintaksu <em>if...else</em> petlji u zapisu koda

<details>
    <summary><strong>Osnovni koncepti</strong></summary><br>
    <strong><em>If...Else</em> petlja</strong>
    <p style="text-align: justify;">Element koda koji omogućuje izvršavanje programa prema scenarijima koji ovise o ishodu ispitivanog uvjeta. Primjerice, ako je vani kiša, ponijet ću kišobran, ako nije, neću. </p>
    <strong>Logički izraz - uvjet <em>(Condition)</em></strong>
    <p style="text-align: justify;">Dio <em>If...Else</em> petlje koji oblikuje i formira ispitivanje. Uvjet je uvijek logički izraz, npr. veće od, a ishod ispitivanja je Boolean vrijednost (istina/laž, tj. <em>true/falsa</em>). U ovisnosti je li uvjet ispunjen ili ne, izvršavaju se dijelovi koda za pojedini scenarij. </p>
    <strong>Instrukcija <em>(Statement)</em></strong>
    <p style="text-align: justify;">Dio koda <em>If...Else</em> petlje koji opisuje kako bi program trebao nastaviti izvršavanje nakon ispitivanja uvjeta. Redoslijed definiranja instrukcija je bitan; prvo se zapisuje blok naredbi koji će se izvršiti ako je uvjet zadovoljen, a potom dio koji se izvršava ako uvjet nije zadovoljen. Zapisivanje instrukcija u scenariju <em>laž</em> je opcionalan i definira se kada negativan ishod ispitivanja također ima utjecaj na daljnje izvršavanje programa - označava se s <em>else</em>. Ako je potrebno izvršiti više od jedne instrukcije po ispitivanju uvjeta, obavezno se koriste vitičaste zagrede za blok naredbi <strong>{}</strong>. </p>

</details>

<details>
    <summary><strong>Primjer riješenog zadatka</strong></summary>
        <p><strong>Zadatak:</strong> Sastaviti dijagram toka i/ili pseudokod za kod koji ispituje uneseni broj i ispisuje je li pozitivnan ili negativan. Zbog jednostavnosti primjera, neće se razmatrati vrijednost 0.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; align-items: start;">
            <div class="column">    
                <p><strong>Predloženi dijagram toka</strong></p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 300px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ 'assets\images\10_OgledniZadatak_Dijagram.png' | relative_url}}" alt="Dijagram toka">


                        <!-- 2. Uvjet Hotspot Dot (Positioned at 30% from top, 47% from right) -->
                        <div class="hotspot" style="top: 30%; right: 47%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Logički izraz</h4>
                                <p>Označava uvjet koji treba ispuniti. Formira se tako da je rezultat ispitivanja uvijek Boolean vrijednost (<em>true</em> ili <em>false</em>) - logički izraz. U ovisnosti u ishodu ispitivanja program nastavlja dalje jednim od dva moguća smjera. U dijagramu toka označava se rombom.</p>
                            </div>
                        </div>

                        <!-- 3. Istina Hotspot Dot -->
                        <div class="hotspot" style="top: 55%; right: 60%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Istina</h4>
                                <p>Ako je ishod ispitivanja uvjeta istinit, program nastavlja izvršavati instrukcije s njim povezane. U ovom slučaju ispisuje se poruka da je broj a pozitivan.</p>
                            </div>
                        </div>

                        <!-- 4. Laž Hotspot Dot -->
                        <div class="hotspot" style="top: 55%; right: 4.3%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Laž</h4>
                                <p>Ako ishod ispitivanja uvjeta nije istinit, program nastavlja izvršavati instrukcije sa zadanim scenarijem. U ovom slučaju ispisuje se poruka da broj a nije pozitivan, odnosno da je negativan. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p><strong>Predloženi pseudokod</strong></p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 250px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ 'assets\images\10_OgledniZadatak_Pseudotok.png' | relative_url}}" alt="Dijagram toka">


                        <!-- 2. Uvjet Hotspot Dot (Positioned at 2.5% from top, 2% from right) -->
                        <div class="hotspot" style="top: 27%; right: 25%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Logički izraz</h4>
                                <p>U dijagramu toka linija koda sastoji se od 3 dijela: (1) <strong>ako je</strong> - poziva if petlju, (2) definira logički izraz i zapisuje se u zagradu (npr. a<0) i (3) <strong>onda</strong> koji označava početak instrukcija koje se trebaju izvršiti ako je uvjet zadovoljen.
                                </p>
                            </div>
                        </div>

                        <!-- 3. Istina Hotspot Dot -->
                        <div class="hotspot" style="top: 43%; right: -10%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Istina</h4>
                                <p>Ako je ishod ispitivanja uvjeta istinit, program nastavlja izvršavati instrukcije s njim povezane. U ovom slučaju ispisuje se poruka da je broj a pozitivan.</p>
                            </div>
                        </div>

                        <!-- 4. Inače Hotspot Dot -->
                        <div class="hotspot" style="top: 58%; right: 65%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Inače</h4>
                                <p>Inače je ključna riječ koja označava dio koda koji se treba izvršiti ako uvjet ispitivanja nije zadovoljen. U ovom slučaju, preusmjerava program na ispisivanje izlazne vrijednosti.</p>
                            </div>
                        </div>

                        <!-- 5. Laž Hotspot Dot -->
                        <div class="hotspot" style="top: 71%; right: -10%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Laž</h4>
                                <p>Ako ishod ispitivanja uvjeta nije istinit, program nastavlja izvršavati instrukcije sa zadanim scenarijem. U ovom slučaju ispisuje se poruka da broj a nije pozitivan, odnosno da je negativan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column">
            <p><strong>Predloženi kod u Javi</strong></p>
            <div class="hotspot-wrapper">
                <div class="hotspot-container" style="width: 350px; margin: 0 auto; display: inline-block;">
                    <!-- 1. Your Main Image -->
                        <img src="{{ 'assets\images\10_OgledniZadatak_Kod.png' | relative_url}}" alt="Dijagram toka">


                    <!-- 2. If Hotspot Dot (Positioned at 2.5% from top, 2% from right) -->
                    <div class="hotspot" style="top: 39%; right: 70%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Logički izraz u sintaksi Jave</h4>
                            <p><strong>ako je</strong> izraz iz pseudokodu u sintaksi Javi zapisuje se kao <strong>if()</strong> pri čemu se uvjet zapisuje unutar zagrade.</p>
                        </div>
                    </div>

                    <!-- 3. Istina Hotspot Dot -->
                    <div class="hotspot" style="top: 49%; right: -8%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Blok naredbi - Istina</h4>
                            <p>Instrukcije za izvršavanje za zadovoljen logički izraz zapisuju se u prvom dijelu koda petlje. Zapis instrukcija radi se uvučeno u odnosu na ključnu riječ petlje. Ako se radi o više od 1 instrukcije koje je potrebno izvršiti, koriste se vitičaste zagrade. Inače se radi samo uvlačenje retka. </p>
                        </div>
                    </div>

                    <!-- 4. Else Hotspot Dot -->
                    <div class="hotspot" style="top: 59%; right: 77%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Else</h4>
                            <p>Blok instrukcija koje se izvršavaju ako uvjet nije zadovoljen označavaju se ključnom rječju <strong>else</strong>.</p>
                        </div>
                    </div>

                    <!-- 5. Laž Hotspot Dot -->
                    <div class="hotspot" style="top: 71%; right: -8%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Blok naredbi - Laž</h4>
                            <p>Nakon ključne riječi <em>else</em> zapisuju se instrukcije koje program izvršava ako uvjet ispitivanja nije zadovoljen. Ponovno, ako se radi o više od 1 instrukcije koje je potrebno izvršiti, koriste se vitičaste zagrade. Inače se radi samo uvlačenje retka. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</details>