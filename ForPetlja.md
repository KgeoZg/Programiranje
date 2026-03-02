---
layout: default
title: Petlja for
nav_order: 4
has_children: true
---

# Instrukcije ponavljanja: Petlja <em>for</em>
<p align="justify"><em>For</em> petlja u programiranju koristi se za ponavljanje željenih instrukcija određen broj puta. Osnovna karakteristika for petlje je što je broj ponavljanja <strong>unaprijed poznat</strong>. Primjerice, da bi se zbrojili brojevi 1-100 potrebno je na prethodni (z)broj nadodati idući broj i tako 100 puta. Za osiguravanje ponavljanja instrukcija, postavlja se brojač (kontrolna varijabla) koji kontrolira broj izvršenih ponavljanja petlje. Svaka <em>for</em> petlja sastoji se od tri dijela:</p>
1. početnog stanja, 
2. uvjeta nastavka i 
3. koraka.<br>
<p align="justify">Svaki dio ima svoju svrhu, a zajedno osiguravaju jednoznačno definiranje inicijalne vrijednosti brojača, provjeravanje vrijednosti brojača kroz korake petlje i promjenu vrijednosti brojača nakon svakog izvršavanja.</p>
<p><strong>Po završetku ovih vježbi student će moći:</strong></p>

1. Razumjeti ulogu <em>for</em> petlje u ponavljanju instrukcija unutar koda
2. Razumjeti i znati primijeniti sintaksu <em>for</em> petlje u zapisu koda

<details>
    <summary><strong>Osnovni koncepti</strong></summary><br>
    <strong><em>For</em> petlja</strong>
    <p style="text-align: justify;">Element koda koji omogućuje ponavljanje instrukcija koda na istom mjestu u kodu. Koristi se kada je broj ponavljanja unaprijed poznat. </p>
    <strong>Početno stanje <em>(Statement 1)</em></strong>
    <p style="text-align: justify;">Početno stanje definira početnu vrijednost brojača. S obzirom da predstavlja broj, početno stanje mora imati i deklariran tip podatka, primjerice da je to cijeli broj (integer). Deklaracija se može napraviti izvan petlje,(globalna varijabla) ili unutar definicije petlje (lokalna varijabla). Ako je deklarirana unutar petlje, varijabla i u njoj pohranjena vrijednost se uništava nakon što se cijela petlja izvršila.</p>
    <strong>Uvjet nastavka <em>(Statement 2)</em></strong>
    <p style="text-align: justify;">Uvjet nastavka definira logički izraz za izvršavanje petlje. Ishod testiranja logičkog izraza je uvijek istina ili laž, i u ovisnosti o ishodu, petlja se nastavlja izvršavati ili ne. Ako je ishod testiranja istinit, izvršavaju se linije koda (instrukcije) zapisane unutar tijela petlje (bloka naredbi). </p>
    <strong>Korak <em>(Statement 3)</em></strong>
    <p style="text-align: justify;">Korak je dio definicije petlje koji osigurava promjenu vrijednosti brojača. Nakon što se petlja izvršila prvi put, vrijednost brojača mora se promijeniti kako bi se petlja izvršila i drugi put. Unutar koraka opisuje se kako bi se brojač trebao mijenjati, primjerice uvećati/smanjiti za neki broj, podijeliti s nekim brojem i sl. </p>
    <p style="text-align: justify;">Sva tri elementa <em>for</em> petlje nužna su za njeno ispravno izvršavanje. Elementi se u definiciju petlje zapisuju koristeći zagrade <strong>()</strong>, a postoji točno definiran način kako su međusobno povezani. </p>

</details>

<details>
    <summary><strong>Primjer riješenog zadatka</strong></summary>
        <p><strong>Zadatak:</strong> Sastaviti dijagram toka i/ili pseudokod za kod koji zbraja sve cijele brojeve u intervalu od 10 do 17.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; align-items: start;">
            <div class="column">    
                <p><strong>Predloženi dijagram toka</strong></p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 300px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ '/assets/images/11_OgledniZadatak_Dijagram.png' | relative_url}}" alt="Dijagram toka">


                        <!-- 2. Dodatna varijabla Hotspot Dot (Positioned at 30% from top, 47% from right) -->
                        <div class="hotspot" style="top: 26%; right: 47%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Dodatna varijabla</h4>
                                <p>Zbrajanja koja se događaju unutar petlje potrebno je pohraniti u varijablu. U ovom slučaju definirana je globalna varijabla (izvan petlje) <em>zbroj</em> koja je dostupna i nakon što se završe sva računanja unutar petlje. To je korisno ako se novoizračunata vrijednost treba koristiti dalje u programu. Osim deklaracije, varijabla zbroj je inicijalizirana i to na vrijednost 0. Razlog tome je što je 0 neutralan pribrojnik u operaciji zbrajanja. <br>
                                Ono što se događa prilikom izvršavanja petlje je da se u svakom koraku petlje nova vrijednost pohranjuje kao zbroj, što znači da će u idućem pozivanju varijable biti pozvana posljednje pohranjena vrijednost. Primjerice, u početku je zbroj=0, u drugom koraku petlje je zbroj=10, u trećem 21, itd</p>
                            </div>
                        </div>

                        <!-- 3. Početno stanje Hotspot Dot -->
                        <div class="hotspot" style="top: 38%; right: 47%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Početno stanje</h4>
                                <p>Početno stanje je inicijalna vrijednost brojača. U ovom slučaju, varijabla početnog stanja <strong>i</strong> postaljena je na vrijednost varijable a. Drugim riječima, izraz <em>i=a</em> znači da će se u varijablu <strong>i</strong> pohraniti vrijednost iz varijable <strong>a</strong>. Tim postupkom, početno stanje brojača postavljeno je na vrijednost 10 što je početni broj intervala za koji se zbroj računa.</p>
                            </div>
                        </div>

                        <!-- 4. Uvjet nastavka Hotspot Dot -->
                        <div class="hotspot" style="top: 52%; right: 60%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Uvjet nastavka</h4>
                                <p>Uvjet nastavka je logički izraz koji ispituje je li brojač unutar predviđenog broja ponavljanja. Kako je inicijalna vrijednost brojača postavljena na vrijednost varijable a, dakle na broj 10, a imajući u vidu da se zbrajaju brojevi 10-17, zbrajanje se radi do broja 17, odnosno do varijable b u koju je ta vrijednost pohranjena. Uvjet je postavljen tako da uključuje vrijednost 17.<br>
                                U ovisnosto je li taj uvjet zadovoljen ili ne, izvodi se odgovarajući blok instrukcija.</p>
                            </div>
                        </div>
                        <!-- 5. Istina Hotspot Dot -->
                        <div class="hotspot" style="top: 62%; right: 80%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Istina</h4>
                                <p>Ukoliko je vrijednost brojača <em>i</em> u razmatranom koraku petlje manja ili jednaka vrijednosti varijable b, petlja će izvršavati operaciju zbrajanja.</p>
                            </div>
                        </div>
                        <!-- 6. Laž Hotspot Dot -->
                        <div class="hotspot" style="top: 52%; right: 34%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Laž</h4>
                                <p>Ukoliko je brojač kroz iteraciju petlje dosegao vrijednost koja je veća od vrijednosti varijable b, izvođenje petlje završava i izvršava se pripadajući blok instrukcija.</p>
                            </div>
                        </div>
                        <!-- 7. Zbrajanje Hotspot Dot -->
                        <div class="hotspot" style="top: 70%; right: 60%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Operacija - istina</h4>
                                <p>Po zadovoljenom uvjetu nastavka, radi se zbrajanje brojeva u intervalu 10-17 na način da se na prethodni zbroj doda vrijednost idućeg broja u intervalu. </p>
                            </div>
                        </div>
                        <!-- 8. Korak Hotspot Dot -->
                        <div class="hotspot" style="top: 85%; right: 56%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Korak</h4>
                                <p>Završni dio svakog bloka instrukcija u izvršavanju petlje jest promjena vrijednosti brojača. Razlog tome je što petlja u novom ciklusu izvršavanja mora imati novu vrijednost brojača s kojim će dalje izvršavati promjene u programu. U ovom slučaju, traži se zbroj cijelih brojeva u intervalu 10-17 što znači da u svakom narednom koraku, brojač mora biti uvećan za 1 -> zbog toga je zapis koraka i=i+1. Po toj logici za zbrajanje svako drugog broja u intervalu korak bi imao oblik: i=i+2.<br>
                                Nova vrijednost brojača sada ponovno ide na provjeru uvjeta nastavka.</p>
                            </div>
                        </div>
                        <!-- Operacija - laž. Korak Hotspot Dot -->
                        <div class="hotspot" style="top: 70%; right: 0%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Operacija - laž</h4>
                                <p>Nakon što vrijednost brojača premaši vrijednost varijable <em>b</em>, petlja završava i dalje se izvršava tome prikladan blok instrukcija. U ovom slučaju potrebno je ispisati koliko iznosi izračunati zbroj.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p><strong>Predloženi pseudokod</strong></p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 300px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ '/assets/images/11_OgledniZadatak_Pseudokod.png' | relative_url}}" alt="Dijagram toka">

                    </div>
                </div>
            </div>

            <div class="column">
            <p><strong>Predloženi kod u Javi</strong></p>
            <div class="hotspot-wrapper">
                <div class="hotspot-container" style="width: 350px; margin: 0 auto; display: inline-block;">
                    <!-- 1. Your Main Image -->
                        <img src="{{ '/assets\images\11_OgledniZadatak_Kod.png' | relative_url}}" alt="Dijagram toka">


                    <!-- 2. Dodatna varijabla Hotspot Dot (Positioned at 2.5% from top, 2% from right) -->
                    <div class="hotspot" style="top: 35%; right: 64%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Dodatna varijabla</h4>
                            <p>Dodatna varijabla zbroj je deklarirana tipom podatka integer jer se zbrajaju cijeli brojevi u intervalu 10-17.</p>
                        </div>
                    </div>

                    <!-- 3. For Petlja Hotspot Dot -->
                    <div class="hotspot" style="top: 44%; right: 40%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>For petlja</h4>
                            <p>Sintaksa Jave za zapis <em>for</em> petlje definirana je sljedećim izrazom. Svi elementi petlje zapisuju se u zagrade točno određenim redoslijedom: početno stanje, uvjet nastavka, korak s točka-zarezom kao separatorom. S obzirom da je brojač također varijabla, dodijeljen mu je tip podatka za cijele brojeve (int). Uvjet nastavka ne mora nužno uključivati varijablu b, već može biti i definiran u obliku i<=17. Oba načina su ispravna; ovdje je zbog univerzalnosti demonstracije oblik s varijablom b.</p>
                        </div>
                    </div>

                    <!-- 4. Blok Instrukcija  Hotspot Dot -->
                    <div class="hotspot" style="top: 54%; right: 53%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Blok instrukcija</h4>
                            <p>U Javi zapis instrukcije se interpretira s desna na lijevo: trenutnoj vrijednosti varijable <em>i</em> (koja je jednaka a, odnosno iznosi 10) pribroji vrijednosti pohranjenu u varijabli <em>zbroj</em> (trenutno iznosi 0) i njihov zbroj pohrani kao novu vrijednost varijable <em>zbroj</em>. Ta nova vrijednost se dakle pohranjuje u varijablu <em>zbroj</em> i prepisuje staru pohranjenu vrijednost. S obzirom da je varijabla <em>zbroj</em> definirana izvan petlje, u novom koraku petlje vrijednost pozvane varijable zbroj s desne strane znaka jednakosti bit će različita od 0, odnosno iznosit će 10 pa 21 itd..</p>
                        </div>
                    </div>

                    <!-- 5. Ispis Hotspot Dot -->
                    <div class="hotspot" style="top: 72%; right: -8%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Ispis</h4>
                            <p>Nakon završetka petlje slijedi ispis rezultata. To je moguće pozivanjem varijable <em>zbroj</em>. S obzirom da je varijabla <em>zbroj</em> globalna varijabla, dostupna je i izvan bloka naredbi pa je moguće ispisati njenu vrijednost i nakon završetka izvršavanja petlje. Postavljanje instrukcije ispisa unutar petlje bi rezultiralo ispisivanjem međuzbroja nakon svakog koraka izvršavanja petlje.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>