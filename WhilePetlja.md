---
layout: default
title: Petlja while
nav_order: 5
has_children: true
---

# Instrukcije ponavljanja: Petlje <em>while, do/while</em>
<p align="justify"><em>While</em> i <em>do/while</em> petlje u programiranju koriste se kao i petlja <em>for</em>, za ponavljanje željenih instrukcija. Međutim, osnovna razlika među njima je što se <em>while</em> petlje koriste kada broj ponavljanja <strong>nije</strong> unaprijed poznat. Da bi se osiguralo ponovljeno izvršavanje instrukcija petlje, umjesto brojača u svakom koraku se ispituje logički izraz (uvjet nastavka), i sve dok je on zadovoljen, petlja se izvršava. Primjerice, na terenu su duljine izmjerene elektroničkim daljinomjerom. Za potrebe obrade podataka, u program je potrebno unositi izmjerene vrijednosti i to sve dok razlika između dva uzastopna unosa nije manja od 1 cm (0,01m). Iz primjera je vidljivo da program traži više od jednog unosa, međutim, broj unosa nije unaprijed poznat i uvjetovan je postavljenim uvjetom nad unesenim podacima. </p>
<p align="justify"> Svaka <em>while</em> petlja sastoji se od uvjeta nastavka i instrukcija petlje. S obzirom kako je petlja strukturirana, razlikuju se dvije vrste petlji: <em>while</em> i <em>do/while</em>. Dok se kod <em>while</em> petlje prvo ispituje uvjet nastavka, a potom u ovisnosti o ishodu izvršavaju instrukcije, kod <em>do/while</em> petlje se prvo izvrši blok instrukcija petlje, a potom ispituje uvjet. Na ovaj način osigurano je da se petlja mora izvršiti barem jednom, što je njena osnovna razlika u odnosu na <em>while</em> petlju.</p>
<p><strong>Po završetku ovih vježbi student će moći:</strong></p>

1. Razumjeti ulogu <em>while</em> i <em>do/while</em> petlji u ponavljanju instrukcija unutar koda
2. Razumjeti razliku <em>while</em> i <em>do/while</em> petlje
2. Razumjeti i znati primijeniti sintaksu <em>while</em> i <em>do/while</em> petlji u zapisu koda

<details>
    <summary><strong>Osnovni koncepti</strong></summary><br>
    <strong><em>(do) while</em> petlja</strong>
    <p style="text-align: justify;">Element koda koji omogućuje ponavljanje instrukcija koda na istom mjestu u kodu. Koristi se kada broj ponavljanja <strong>nije</strong> unaprijed poznat.</p>
    <ul><strong>While<em> petlja</em></strong>
    <p style="text-align: justify;">Vrsta petlje u kojoj se prvo ispituje uvjet, a potom izvršavaju instrukcije. </p>
    <strong>Do/while<em> petlja</em></strong>
    <p style="text-align: justify;">Vrsta petlje u kojoj se prvo izvrše instrukcije koda, a potom ispituje uvjet nastavka. To osigurava da se petlja izvrši barem jednom. </p></ul>
    <strong>Uvjet nastavka <em>(Statement)</em></strong>
    <p style="text-align: justify;">Definira početni uvjet za izvršavanje petlje. Prilikom pokretanja petlje, ispituje se logički izraz uvjeta i u ovisnosti o ishodu, petlja se nastavlja ili ne nastavlja izvršavati.</p>
</details>
<details>
    <summary><strong>Primjer riješenog zadatka</strong></summary>
        <p><strong>Zadatak:</strong> Sastaviti dijagram toka i/ili pseudokod za kod koji broj 100 dijeli s 2 sve dok je količnik veći od 1 i ispisuje dobivene vrijednosti.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; align-items: start;">
            <div class="column">    
                <p><strong>Predloženi dijagram toka</strong></p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 300px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ '/assets/images/12_OgledniZadatak_Dijagram.png' | relative_url}}" alt="Dijagram toka">


                        <!-- 2. Uvjet nastavka varijabla Hotspot Dot (Positioned at 30% from top, 47% from right) -->
                        <div class="hotspot" style="top: 34%; right: 60%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Uvjet nastavka</h4>
                                <p>Ulazna vrijednost pohranjena u varijablu n ispituje se logičkim izrazom u uvjetu nastavka <em>while</em> petlje. Sve dok je n/2 veće od broja 1, petlja će se izvršavati. To znači da će se izvršavati blok instrukcija za ishod istina.</p>
                            </div>
                        </div>

                        <!-- 3. Operacija Hotspot Dot -->
                        <div class="hotspot" style="top: 62%; right: 60%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Operacija</h4>
                                <p>Nakon što je ispitan uvjet nastavka, broj n se dijeli s 2 i dobivena vrijednost pohranjuje se ponovno u varijablu <em>n</em> prepisujući postojeću vrijednost. To će osigurati da se u idućem izvršavanju petlje ispituje nova vrijednost varijable <em>n</em>.</p>
                            </div>
                        </div>

                        <!-- 4. Izlaz petlja Hotspot Dot -->
                        <div class="hotspot" style="top: 82%; right: 60%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Izlaz - petlja</h4>
                                <p>Nova dobivena vrijednost pohranjena u varijabli <em>n</em> prikazuje se korisniku. S obzirom da se operacija nalazi unutar petlje, nakon svakog koraka izvršavanja petlje ispisat će se nova vrijednost.</p>
                            </div>
                        </div>
                        <!-- 5. Izlaz Hotspot Dot -->
                        <div class="hotspot" style="top: 58%; right: 10%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Izlaz</h4>
                                <p>Posljednji broj koji zadovoljava uvjet n/2>1 u prethodnom je izvršavanju petlje pohranjen u varijablu <em>n</em>. U trenutnom koraku, vrijednost od <em>n</em> više ne zadovoljava uvjet nastavka pa se petlja završava. S obzirom na to, izvršava se instrukcija ispisivanja posljednje pohranjene vrijednosti varijable n kao najmanjeg broja koji je veći od 1. Ta instrukcija nalazi se izvan petlje.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p><strong>Predloženi pseudokod</strong></p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 250px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ '/assets/images/12_OgledniZadatak_Pseudokod.png' | relative_url}}" alt="Dijagram toka">

                    </div>
                </div>
            </div>

            <div class="column">
            <p><strong>Predloženi kod u Javi</strong></p>
            <div class="hotspot-wrapper">
                <div class="hotspot-container" style="width: 350px; margin: 0 auto; display: inline-block;">
                    <!-- 1. Your Main Image -->
                        <img src="{{ '/assets/images/12_OgledniZadatak_Kod.png' | relative_url}}" alt="Dijagram toka">


                    <!-- 2. Varijabla n Hotspot Dot (Positioned at 2.5% from top, 2% from right) -->
                    <div class="hotspot" style="top: 26%; right: 53%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Varijabla n</h4>
                            <p>Prema tekstu zadatka definirano je da je ulazna vrijednost za ispitivanje broj 100, što predstavlja cijeli broj. Međutim, dijeljenjem tog broja s 2 u nekom će se trenutku pojaviti decimalni dio, primjerice kod broja 25. Kako bi se osiguralo da se dobivene vrijednosti ispravno pohranjuju, varijabla <em>n</em> deklarirana je tipom podatka double. U suprotnom, decimalni dio broja ne bi se pohranio što bi direktno utjecalo na konačan rezultat. </p>
                        </div>
                    </div>

                    <!-- 3. While petlja Hotspot Dot -->
                    <div class="hotspot" style="top: 35%; right: 50%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>While petlja</h4>
                            <p><em>While</em> petlja u Javi poziva se ključnom riječju <em>while</em> nekon koje slijedi uvjet nastavka zapisan u zagradama. Prema tekstu zadatka, traže se svi brojevi koji su pri dijeljenju s 2 veći od 1, ne i njemu jednaki. S obzirom da se zadovoljavanjem uvjeta nastavka izvršavaju dvije linije instrukcija (koda), potrebno je kreirati blok naredbi vitičastim zagradama.</p>
                        </div>
                    </div>

                    <!-- 4. Blok Instrukcija  Hotspot Dot -->
                    <div class="hotspot" style="top: 50%; right: 32%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Blok instrukcija</h4>
                            <p>Ako je uvjet nastavka zadovoljen, izvršava se dijeljenje vrijednosti varijable <em>n</em> s 2 te pohrana te vrijednosti u varijablu <em>n</em> prepisivanjem njene postojeće vrijednosti. Jednako kao i dosad, čitanje koda u Javi radi se zdesna na lijevo, odnosno u ovom slučaju kao: vrijednost varijable <em>n</em> dijeli se s 2 i novodobivena vrijednost pohranjuje se u varijablu naziva <em>n</em>.<br>
                            Novoizračunata vrijednost potom se ispisuje na zaslonu računala. S obzirom da je instrukcija ispisa definirana unutar petlje, svako izvršavanje petlje završit će ispisom izračunate vrijednosti. </p>
                        </div>
                    </div>

                    <!-- 5. Ispis Hotspot Dot -->
                    <div class="hotspot" style="top: 72%; right: -7%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Ispis</h4>
                            <p>Nakon završetka petlje slijedi ispis rezultata. To je moguće pozivanjem varijable <em>n</em>. S obzirom da je varijabla <em>n</em> globalna varijabla, dostupna je i izvan bloka naredbi petlje pa je moguće ispisati njenu vrijednost i nakon završetka izvršavanja petlje.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</details>