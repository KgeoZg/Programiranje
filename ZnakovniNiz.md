---
layout: default
title: Znakovni niz
nav_order: 9
has_children: true
---

# Znakovni niz
<p align="justify"><em>String</em> u javi je klasa koja se koristi za rad s tekstualnim podacima - nizom znakova, i smatra se tipom tekstualnog podatka. Svaki tekstualni podatak smatra se objektom tipa klase <em>String</em>, a označava se dvostukim navodnicima (<em>" "</em>). Klasa <em>String</em> dostupna je unutar paketa java.lang.</p>
<p align="justify">S obzirom da su podaci objekti tipa klase <em>String</em>, mogu se koristiti metodama klase za različite manipulacije s tekstualnim podacima. Primjerice, određivanje duljine znakovnog niza (<em>length()</em>) ili pretvaranje oblika zapisa u sve velika (<em>toUpperCase()</em>). </p>
<p align="justify">String predstavlja nepromjenjivi znakovni niz što znači da se jednom pohranjeni sadržaj ne može mijenjati. Ako se mijenja, kreira se novi objekt tipa klase <em>String</em> pod istom referencom (nazivom varijable).</p>
<p><strong>Po završetku ovih vježbi student će moći:</strong></p>

1. Razumjeti ulogu objekata klase String u pohrani i obradi znakovnog niza
2. Razumjeti i znati primijeniti sintaksu znakovnog niza (Stringa) u zapisu koda

<details>
    <summary><strong>Osnovni koncepti</strong></summary><br>
    <strong>String</strong>
    <p style="text-align: justify;">Klasa koja se koristi za pohranjivanje tekstualnih podataka. Razlikuje se od tipa podatka <em>char</em> jer predstavlja podatkovni niz, a ne jedan znak.<br> </p>
    <strong>Objekti tipa klase <em>String</em></strong>
    <p style="text-align: justify;">Podaci znakovnog niza (teksta) pohranjuju se u objekte tipa klase <em>String</em> što im omogućuje korištenje metoda te klase za manupulaciju i obradu.</p>
    <strong>Nepromjenjivi niz</strong>
    <p style="text-align: justify;">Sadržaj znakovnog niza ne može se mijenjati, ali naziv objekta može referencirati na drugi objekt tipa klase <em>String</em>.</p>
</details>

<details>
    <summary><strong>Primjer riješenog zadatka</strong></summary>
        <p><strong>Zadatak:</strong> Sastaviti dijagram toka i/ili pseudokod za kod koji pomoću tipkovnice učitava vaše ime i prezime pravopisno ispravno i ispisuje ga u verzalu (velikim slovima) i kurentu (malim slovima).</p>    
                <p><strong>Predloženi dijagram toka</strong></p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 230px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ '/assets\images\18_OgledniZadatak_Dijagram.png' | relative_url}}" alt="Dijagram toka">
                        <!-- 2. Programska poruka Hotspot Dot (Positioned at 30% from top, 47% from right) -->
                        <div class="hotspot" style="top: 8%; right: 33%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Programska poruka</h4>
                                <p>S obzirom da zadatak definira korisnički unos preko tipkovnice, program korisniku ispisuje uputu da unese ime i prezime.</p>
                            </div>
                        </div>
                        <!-- 3. Ulaz Hotspot Dot -->
                        <div class="hotspot" style="top: 24%; right: 33%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ulaz</h4>
                                <p>Podatke koje korisnik unese program pohranjuje kao tekst, odnosno pohranjuje ih u varijablu naziva punoIme. Informacija o tipu podatka bit će potrebna kasnije, za sada je dovoljno prepoznati da je se unesene vrijednosti pohranjuju u varijablu.</p>
                            </div>
                        </div>
                        <!-- 4. metoda UCASE nastavka Hotspot Dot -->
                        <div class="hotspot" style="top: 35%; right: 5%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Metoda <em>UCASE</em></h4>
                                <p>Prema tekstu zadatka, uneseni tekstualni podatak potrebno je izmijeniti tako da zapis bude u verzalu. Umjesto ručnog mijenjanja, program poziva metodu <em>UCASE()</em> koja je definirana u klasi <em>String</em>. Metoda <em>UCASE()</em> sastavni je dio klase <em>String</em> koja je sastavni dio Java programskog jezika pa ju nije potrebno korisnički zapisivati.<br>
                                Povratna vrijednost metode se pohranjuje u varijablu <em>imeVerzal</em> odakle je dostupna za ispis.</p>
                            </div>
                        </div>
                        <!-- 5. Ispis Hotspot Dot -->
                        <div class="hotspot" style="top: 46%; right: 27%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ispis</h4>
                                <p>Zapis teksta u varijabli <em>imeVerzal</em> ispisuje se sukladno uputama u tekstu zadatka.</p>
                            </div>
                        </div>
                        <!-- 6. Metoda LCASE Hotspot Dot -->
                        <div class="hotspot" style="top: 63%; right: 5%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Metoda <em>LCASE</em></h4>
                                <p>Isto kao i za varijablu <em>imeVerzal</em>, koristi se metoda <em>LSACE</em> klase <em>String</em>, a dobivena vrijednost pohranjuje u varijablu <em>imeKurent</em>.</p>
                            </div>
                        </div>
                        <!-- 7. Ispis Korak Hotspot Dot -->
                        <div class="hotspot" style="top: 73%; right: 27%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ispis</h4>
                                <p>Zapis teksta u varijabli <em>imeVerzal</em> ispisuje se sukladno uputama u tekstu zadatka.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p><strong>Predloženi pseudokod</strong></p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 400px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ '/assets\images\18_OgledniZadatak_Pseudokod.png' | relative_url}}" alt="Dijagram toka">
                        <!-- 2. Zapis stringa Hotspot Dot -->
                        <div class="hotspot" style="top: 35%; right: 36%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Objekt tipa klase String</h4>
                                <p>U pseudokodu, oznaku da je nešto tipa klase <em>String</em> označavamo znakom dolara nakon imena varijable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            <p><strong>Predloženi kod u Javi</strong></p>
            <div class="hotspot-wrapper">
                <div class="hotspot-container" style="width: 550px; margin: 0 auto; display: inline-block;">
                    <!-- 1. Your Main Image -->
                        <img src="{{ '/assets\images\18_OgledniZadatak_Kod.png' | relative_url}}" alt="Dijagram toka">
                    <!-- 2. Objekt String Hotspot Dot -->
                    <div class="hotspot" style="top: 45%; right: 50%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Objekt tipa klase String</h4>
                            <p>Nakon što je korisnik unio ime i prezime, objekt <em>citac</em>, tipa klase <em>BufferedReader</em>, čita unos i pohranjuje ga u varijablu <em>punoIme</em> koja predstavlja objekt tipa klase <em>String</em>.</p>
                        </div>
                    </div>
                    <!-- 3. Promjena stanja varijable Hotspot Dot -->
                    <div class="hotspot" style="top: 52%; right: 37%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Promjena sadržaja teksta <em>zbroj</em></h4>
                            <p>Objekt <em>punoIme</em> tipa klase <em>String</em> je nepromjenjiv, tj. sadržaj u njemu ne može se mijenjati. Svaka promjena uzrokovat će stvaranje novog objekta tipa klase <em>String</em>. U ovom slučaju, nova vrijednost ručno je pohranjena u varijablu naziva <em>imeVerzal</em>. S obzirom da je <em>String</em> klasa, ona ima metode koje se mogu koristiti za obradu teksta. U ovom slučaju, a prema tekstu zadatka, korištena je metoda objekta <em>toUpperCase()</em> koja uzima tekst iz objekta <em>punoIme</em> i zapisuje ga velikim slovima. Metoda objekta poziva se kao: <em>ime_objekta.naziv_metode()</em>. U ovom slučaju to je <em>punoIme.toUpperCase()</em>. Metodi nije proslijeđen nijedan parametar jer ih metoda pronalazi u samom objektu.</p>
                        </div>
                    </div>
                    <!-- 4. Ispis Hotspot Dot -->
                    <div class="hotspot" style="top: 59%; right: 2%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Ispis</h4>
                            <p>Prema tekstu zadatka, ispisuje se vrijednost imena i prezimena u verzalu.</p>
                        </div>
                    </div>
                    <!-- 5. Input korisnika polja Hotspot Dot -->
                    <div class="hotspot" style="top: 69%; right: 37%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Promjena sadržaja teksta</h4>
                            <p>Isto kao i kod zapisa teksta u verzalu, poziva se metoda iz klase <em>String</em>. Metoda je u ovom slučaju <em>toLowerCase()</em> koja tekst zapisuje malim slovima. Dobiveni rezultat metode pohranjuje se kao objekt <em>imeKurent</em> tipa klase <em>String</em>.</p>
                        </div>
                    </div>
                    <!-- 6. Ispis Hotspot Dot -->
                    <div class="hotspot" style="top: 76%; right: 2%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Ispis</h4>
                            <p>Tekst zadatka predviđa ispis imena i prezimena u kurentu pa je u ovoj liniji koda ispisana vrijednost varijable <em>imeKurent</em>.</p>
                        </div>
                    </div>
                </div>
            </div>
</details>