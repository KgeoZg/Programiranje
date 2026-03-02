---
layout: default
title: Jednodimenzionalna polja
nav_order: 6
has_children: true
---

# Jednodimenzionalna polja
<p align="justify">Polje je složeni tip podatka, tj. predstavlja skup podataka istog tipa poredanih slijedno bez praznina između; jedan za drugim, i pohranjenih pod zajedničkim imenom. Polje <strong>ne sadržava stvarnu vrijednost podatka</strong> nego samo referencu na podatak tj. poveznicu na adresu u memoriji računala gdje se nalazi određeni podatak. Svako polje je uvjetovano tipom podatka koji definira koja vrsta podataka se u polje može pohraniti - svi podaci u polju su istog tipa podatka (npr. cijeli brojevi). Pojedinačni podatak unutar polja se naziva elementom polja, a kako bi mu se pristupilo koristi se indeks polja. Razlikujemo jednodimenzionlna i višedimenzionalna polja.</p>
<p align="justify">Jednodimenzionalno polje je polje linearnog oblika koje se može zamisliti kao skupina ćelija u kojima se nalaze podaci. Deklaracija polja radi se analogno deklaracijama jednostavnih podataka, uz razliku naznake polja uglatim zagradama. Primjerice, double [ ] a; pri čemu je <em>double</em> tip podataka pohranjenih u polju ili jednostavnije tip polja, <em>[ ]</em> označava da se radi o polju i <em>a</em> je naziv polja. Deklaracijom polja <strong>ne zauzima se prostor u memoriji</strong> - rezervacija prostora u memoriji radi se postavljanjem veličine polja.</p>
<p><strong>Po završetku ovih vježbi student će moći:</strong></p>

1. Razumjeti ulogu jednodimenzionalnih polja u pohranjivanju podataka pri izvršavanju programa
2. Razumjeti i znati primijeniti sintaksu jednodimenzionalnog polja u zapisu koda
3. Znati koristiti polja u strukturiranju koda
4. Znati pristupati elementima polja prilikom izvršavanja koda
5. Znati komunicirati s programom preko tipkovnice

<details>
    <summary><strong>Osnovni koncepti</strong></summary><br>
    <strong>Polje</strong>
    <p style="text-align: justify;">Složeni tip podatka za pohranjivanje podataka istog tipa pod zajedničkim imenom. Sadržava samo referencu na mjesto gdje se podaci nalaze, ne i stvarnu vrijednost podataka.<br>
    <ul><strong>Jednodimenzionalno polje</strong><br>
    Polje linearnog oblika (jedan redak ili stupac) koji se još naziva i vektorom. </ul></p>
    <strong>Deklaracija polja</strong>
    <p style="text-align: justify;">Definiranje naziva polja i tipa podataka u njemu sadržanih, ne i zauzimanje prostora u memoriji računala. Deklaracija polja prati logiku deklaracije varijabli jednostavnih tipova podataka<br>
    <em>tip_podatka [ ] ime_polja</em><br>
    gdje je <em>tip_podatka</em> tip podataka pohranjenih u polju, <em>[ ]</em> oznaka varijable polja, a <em>ime_polja</em> naziv polja (kako će se polje dalje u kodu pozivati).</p>
    <strong>Dodjeljivanje memorije za polje</strong>
    <p style="text-align: justify;">Da bi se polju dodijelila odgovarajuća količina memorije u računalu, koristi se ključna riječ <em>new</em> zajedno s veličinom polja (duljina polja): <br>
    <em>ime_polja = <strong>new</strong> tip_podatka [veličina_polja]</em><br>
    Izrazom <em>new tip_podatka [veličina polja]</em> kreira se novo polje određene veličine, a u <em>ime_polja</em> se smješta referenca na to polje - gdje se nalaze podaci i kako su poredani u polju (struktura polja). Tip podatka pri deklaraciji i dodjeljivanju memorije za polje moraju biti isti!  </p>
    <strong>Element polja</strong>
    <p style="text-align: justify;">Svaki pojedinačni podatak pohranjen u polju. <br>
    <ul><strong>Indeks elementa</strong><br>
    Identifikator elementa unutar polja, tj. pozicija elementa u polju. Omogućuje pristupanje elementu unutar polja (za primjerice pozivanje ili izmjenu vrijednosti). Indeksiranje polja počinje s 0, odnosno prvi element polja ima indeks 0.</ul></p>
    <strong>Inicijalizator polja</strong>
    <p style="text-align: justify;">Postupak dodjeljivanja podataka u trenutku deklaracije polja. Koristi se kada se polje želi deklarirati i popuniti vrijednostima istovremeno. Za inicijalizaciju polja koriste se vitičaste zagrade <em>{}</em>. <br>Inicijalizator polja se ne može koristiti u kombinaciji s ključnom riječi <em>new</em> (dodjeljivanje memorije) jer se inicijalizacijom polja polje i deklarira i popunjavaju se sve vrijednosti pa je duljina automatski određena.</p>
</details>

<details>
    <summary><strong>Ulaz podataka preko tipkovnice</strong></summary><br>
    <p style="text-align: justify;">Pisanje koda u Javi je kao crtanje na praznom platnu - sve što program treba raditi mora biti eksplicitno definirano u kodu jer inače ne postoji. To znači da ako želimo programu davati ulazne podatke nakon što je on već pokrenut, potrebno je definirati instrukcije koje će omogućiti komunikaciju korisnika s programom korištenjem tipkovnice. Principi za komunikaciju već postoje, nije ih potrebno izmišljati, ali je pripadajuće instrukcije potrebno dodati u kod programa i tako omogućiti spomenutu funkcionalnost.<br>
    Dva su najčešća pristupa koja korisniku dopuštaju komunikaciju s programom u Javi:</p>
        <details>
            <summary><strong>Objekt klase BufferedReader</strong></summary>
            <p style="text-align: justify;">Korištenje objekta klase BufferedReader u programu omogućuje robustan pristup komunikaciji korisnika s računalom. Klasa <em>BufferedReader</em> oblikovana je za efikasnost, a pruža korisniku potpunu kontrolu nad načinom unosa, korištenjem i pohranjivanjem podataka u programu. Upravo zbog toga, klasa <em>BufferedReader</em> može zadovoljiti potrebe zahtjevnih programa u kojima su brzina učitavanja podataka i kontrola obrade prije pohrane od iznimne važnosti. Međutim, takva robusnost dolazi s ograničenjem. Prvenstveno se tu misli na to da je zbog većeg broja instrukcija potrebnih za osiguravanje navedenih funkcionalnosti programer u svakom trenutku odgovoran za  njihovo ispravno izvršavanje.<br>
            Komunikacija korisnika s računalom (programom) preko tipkovnice korištenjem objekta tipa klase <em>BufferedReader</em> ima sljedeći oblik:</p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 650px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ '/assets/images/13_BufferedReader.png' | relative_url}}" alt="Dijagram toka">


                        <!-- 2. Tip podatka Hotspot Dot (Positioned at 30% from top, 47% from right) -->
                        <div class="hotspot" style="top: -60%; right: 88%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Tip podatka <em>BufferedReader</em></h4>
                                <p><em>BufferedReader</em> je klasa unutar Jave. Od ranije je poznato da je klasa u Javi složeni tip podatka. Prateći pravila koja vrijede za jednostavni tip podatka, kada želimo deklarirati varijablu prvo se definira tip podatka, a zatim naziv varijable. U ovom slučaju vrijedi isto. Razlika je u tome što je tip podatka sada klasa (neka određena), a ne jednostavni podatak, i što varijabla više nije klasična varijabla nego referentna varijabla, tj. ona referencira/pokazuje na objekt. Iz tog razloga, sintaksa u Javi započinje s <em>BufferedReader</em>. </p>
                            </div>
                        </div>

                        <!-- 3. Naziv varijable Hotspot Dot -->
                        <div class="hotspot" style="top: -60%; right: 76%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Naziv varijable <em>citac</em></h4>
                                <p>Koristeći ponovno pravila za deklariranje varijabli, nakon tipa podatka slijedi naziv varijable, odnosno ime pod kojim će se ta varijabla kasnije koristiti i pozivati. Kod kreiranja varijable složenog tipa podatka - klase, umjesto <em>referetne varijable</em> uvriježeno je koristiti izraz objekt. Naziv objekta je uvijek proizvoljan, započinje malim početnim slovom i ne smije koristiti neku od ključnih riječi jezika Jave. U ovim materijalima za objekt tipa podatka klase <em>BufferedReader</em> koristit će se naziv <em>citac</em>.</p>
                            </div>
                        </div>

                        <!-- 4. Pridruživanje Hotspot Dot -->
                        <div class="hotspot" style="top: -60%; right: 71.5%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Pridruživanje "="</h4>
                                <p>Varijabli naziva <em>citac</em> koja je tipa podatka klase <em>BufferedReader</em> pridružuje se zdesna kreirani objekt. Tad kažemo da je citac objekt tipa klase <em>BufferedReader</em>.</p>
                            </div>
                        </div>
                        <!-- 5. Ključna riječ Hotspot Dot -->
                        <div class="hotspot" style="top: -60%; right: 67%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ključna riječ <em>New</em></h4>
                                <p>Ključna riječ <strong><em>new</em></strong> koristi se za rezervaciju memorije za pohranu novokreiranog objekta i pozivanje konstruktora (sljedeća riječ u sintaksi Jave). Bez nje, objekt se ne bi mogao kreirati temeljem klase.</p>
                            </div>
                        </div>
                        <!-- 6. Konstruktor 1 Hotspot Dot -->
                        <div class="hotspot" style="top: -60%; right: 53%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Konstruktor <em>BufferedReader()</em></h4>
                                <p>Konstruktor (engl. <em>constructor</em>: stvoriti, izgraditi) je element jezika Java koji omogućuje kreiranje objekta temeljem klase (predloška). Pozivanjem konstruktora, poziva se dio klase u kojem je zapisano kako bi objekt trebao izgledati i temeljem toga se objekt stvara. Naziv konstruktora je identičan nazivu klase kojoj pripada, u ovom slučaju <em>BufferedReader</em>. U sintaksi Jave se uz naziv konstruktora zapisuju zagrade <strong>()</strong> u kojim se mogu definirati parametri za stvaranje objekta; vrijednosti za stvaranje objekta po predlošku klase.<br>
                                U ovom slučaju, konstruktor kao parametar uzima cijeli objekt tipa klase InputStreamReader. </p>
                            </div>
                        </div>
                        <!-- 7. Konstruktor 2 Hotspot Dot -->
                        <div class="hotspot" style="top: -60%; right: 25%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Konstruktor <em>InputStreamReader()</em></h4>
                                <p>Konstruktor <em>BufferedReader</em> ne može raditi sam jer ne zna otkud čitati podatke (ne zna za tipkovnicu) i ne zna interpretirati bajtove koji nastaju kad se pritisne tipka na tipkovnici. Za te svrhe, potreban je "međukorak", tj. objekt koji zna otkud čitati podatke i kako ih pretvoriti u slovo/broj/znak -  objekt tipa klase <em>InputStreamReader</em>. <em>InputStreamReader</em> je klasa koja služi kao konverter zapisa - pretvara bitove pritisnutog slova tipkovnice u znak kojeg predstavljaju, i objekt tipa te klase konstruktoru <em>BufferedReader</em> može isporučiti vrijednosti za kreiranje objekta tipa klase <em>BufferedReader</em>. Drugim riječima, objekt tipa klase <em>InputStreamReader</em> je izvor znakova koje prima konstruktor <em>BufferedReader</em> za kreiranje objekta. </p>
                            </div>
                        </div>
                        <!-- 8. System.in Hotspot Dot -->
                        <div class="hotspot" style="top: -60%; right: 6.5%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4><em>System.in</em></h4>
                                <p><em>System</em> je ugrađena klasa Jave koja odgovara zahtjevima parametra konstruktora (<em>InputStreamReader</em>), a koja prepoznaje tipkovnicu kao ulaz i čita bajtove koji nastaju pritiskanjem tipki. <br>
                                <strong>Važno!</strong> System.in čita bajtove, a ne tekst direktno. Zbog toga je potreban objekt tipa klase <em>InputStreamReader</em>. </p>
                            </div>
                        </div>
                        <!-- 9. Čitanje Korak Hotspot Dot -->
                        <div class="hotspot" style="top: -9%; right: -4%;">
                            <div class="hotspot--inner" style="background: #ee107f;"></div>
                            <div class="hotspot--content">
                                <h4>Interpretacija sintakse</h4>
                                <p>Sintaksa u javi se uvijek čita i interpretira zdesna na lijevo (iznutra prema van).<br>
                                <em>System.in</em> čita bajtove korisničkog unosa na tipkovnici, <em>new InputStreamReader()</em> pretvara bajtove u znakove, a <em>new BufferedReader</em> učitava te znakove i čita cijeli red teksta kojeg je korisnik upisao. Objekt tipa klase <em>BufferedReader()</em> pridružuje se referentnoj varijabli <em>citac</em> čijim se metodama onda kasnije u kodu može pristupati (konkretnije, može se koristiti za učitavanje teksta u druge variable).</p>
                            </div>
                        </div>
                        <!-- 10. Varijabla Korak Hotspot Dot -->
                        <div class="hotspot" style="top: 100%; right: 94%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Varijabla x</h4>
                                <p>Deklaracija varijable x koja je tipa podatka double.</p>
                            </div>
                        </div>
                        <!-- 11. Pretvorba formata zapisa Korak Hotspot Dot -->
                        <div class="hotspot" style="top: 100%; right: 70%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Pretvorba formata zapisa</h4>
                                <p><em>Double</em> u <em>Double.parseDouble</em> je klasa za jednostavni tip podatka koja omogućuje da se decimalni broj (double) tretira kao objekt (ne kao primitivni broj), za koji je dostupna metoda <em>parseDouble(</em>). Ta metoda pretvara String u tip podatka double.<br>
                                Jednostavno rečeno, <em>Double.parseDouble()</em> pretvara zapis teksta (tip podatka String) u decimalni broj (tip podatka double).<br>
                                <strong>Važno!</strong> Double.parseDouble je samo primjer i koristi se kada se zapis pretvara iz <em>Stringa</em> u <em>double</em>. Za pretvorbu u druge tipove podataka, npr. <em>Integer</em>, koristiti prikladne klase i metode, npr. <em>Integer.parseInt()</em>.<br>
                                <strong>Važno!</strong> Jednostavni tip podatka od njegove klase razlikuje se po početnom slovu. Jednostavni tip podatka započinje malim početnim slovom, a naziv klase velikim - double i Double. </p>
                            </div>
                        </div>
                        <!-- 12. Učitavanje Stringa Korak Hotspot Dot -->
                        <div class="hotspot" style="top: 100%; right: 50%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Učitavanje podataka</h4>
                                <p><em>readLine()</em> je metoda objekta <em>citac</em>, odnosno opisuje što taj objekt može činiti. Prethodno je definirano kako se objekt <em>citac</em> koristi za čitanje korisničkog unosa preko tipkovnice. Pozivanjem njegove metode <em>readLine()</em> čita se linija teksta koju je taj objekt dobio korisničkim unosom, a koja je uvijek tipa podatka <em>String</em>. </p>
                            </div>
                        </div>
                        <!-- 13. Interpretacija sintakse 2 Korak Hotspot Dot -->
                        <div class="hotspot" style="top: 57%; right: 36%;">
                            <div class="hotspot--inner" style="background: #ee107f;"></div>
                            <div class="hotspot--content">
                                <h4>Interpretacija sintakse</h4>
                                <p>Čitajuči zdesna na lijevo, sintaksa u Javi ima sljedeće značenje:<br>
                                Koristeći metodu <em>readLine()</em> objekta <em>citac</em>, pročitaj vrijednost koju je korisnik unio preko tipkovnice. S obzirom da je ta vrijednost uvijek tipa podatka <em>String</em>, koristeći metodu <em>parseDouble()</em> klase <em>Double</em> pretvori tekst u oblik decimalnog broja, a potom ga dodijeli varijabli <em>x</em> koja je tipa podatka <em>double</em>.<br>
                                <strong>Važno!</strong> Pretvoreni tip podatka parsiranjem (enlg. parse) uvijek mora odgovarati tipu podatka varijable u koji se podatak sprema. <br>Double.parseDouble() -> double,<br> Integer.parseInt() -> int,<br> itd.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </details>
        <details>
            <summary><strong>Objekt klase Scanner</strong></summary>
            <p style="text-align: justify;">Za razliku od klase <em>BufferedReader</em>, klasa <em>Scanner</em> je oblikovana da bude jednostavna za upotrebu, što je posebno korisno za učenje i izradu jednostavnih programa. Osnovna prednost joj je što direktno čita strukturirani ulaz (cijeli ili decimalni broj, tekst, ...) i automatski ga pretvara u zadani tip podatka. Loše strane su što je učitavanje podataka sporije te to što se konverzija podataka događa automatski, a to  može biti ograničavajući faktor za razvoj robusnih programa.<br>
            Komunikacija korisnika s računalom (programom) preko tipkovnice korištenjem objekta tipa klase <em>Scanner</em> ima sljedeći oblik:</p>
            <div class="hotspot-wrapper">
                <div class="hotspot-container" style="width: 330px; margin: 0 auto; display: inline-block;">
                    <!-- 1. Your Main Image -->
                        <img src="{{ '/assets/images/14_Scanner.png' | relative_url}}" alt="Dijagram toka">


                    <!-- 2. Tip podatka Hotspot Dot (Positioned at 2.5% from top, 2% from right) -->
                    <div class="hotspot" style="top: -50%; right: 87%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Tip podatka <em>Scanner</em></h4>
                            <p><em>Scanner</em> je kao i <em>BufferedReader</em> klasa unutar Jave, odnosno složeni tip podatka pa je logika sintakse ista kao i kod kreiranja objekta tipa <em>BufferedReader</em>.</p>
                        </div>
                    </div>

                    <!-- 3. Objekt Citac Hotspot Dot -->
                    <div class="hotspot" style="top: -50%; right: 72%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Naziv varijable <em>citac</em></h4>
                            <p>Varijabla <em>citac</em> ima istu interpretaciju kao i u prethodnom primjeru.</p>
                        </div>
                    </div>

                    <!-- 4. Scanner  Hotspot Dot -->
                    <div class="hotspot" style="top: -50%; right: 40%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Konstruktor <em>Scanner</em></h4>
                            <p>Kao i u prethodnom primjeru, <em>new Scanner</em> označava kreiranje objekta pozivanjem konstruktora <em>Scanner</em>. Za kreiranje objekta, konstruktor <em>Scanner</em> traži poveznicu s tipkovnicom pa se isto kao i u prethodnom slučaju poziva <em>System.in</em>.</p>
                        </div>
                    </div>
                    <!-- 5. Interpretacija sintakse  Hotspot Dot -->
                    <div class="hotspot" style="top: -5%; right: -8%;">
                        <div class="hotspot--inner" style="background: #ee107f;"></div>
                        <div class="hotspot--content">
                            <h4>Interpretacija sintakse</h4>
                            <p>Citajuci zdesna na lijevo, sintaksa ima sljedeću interpretaciju:<br>
                            <em>System.in</em> čita korisnički unos, <em>Scanner</em> interpretira unos i kreira objekt koji se pohranjuje u varijablu <em>citac</em>.</p>
                        </div>
                    </div>
                    <!-- 6. Varijabla sintakse  Hotspot Dot -->
                    <div class="hotspot" style="top: 100%; left: 10%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Varijabla <em>x</em></h4>
                            <p>Deklaracija varijable x koja je tipa podatka double.</p>
                        </div>
                    </div>
                    <!-- 7. Metoda objekta  Hotspot Dot -->
                    <div class="hotspot" style="top: 100%; left: 45%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Metoda nextDouble() <em>x</em></h4>
                            <p><em>nextDouble()</em> je metoda objekta koja je u ovom slučaju vezana uz objekt <em>citac</em>. Ona učitava korisnikovu vrijednost i automatski ju konvertira u tip podatka <em>double</em>. </p>
                        </div>
                    </div>
                    <!-- 6. Interpretacija sintakse  Hotspot Dot -->
                    <div class="hotspot" style="top: 58%; right: 18%;">
                        <div class="hotspot--inner" style="background: #ee107f;"></div>
                        <div class="hotspot--content">
                            <h4>Interpretacija sintakse</h4>
                            <p>Citajuci zdesna na lijevo, sintaksa ima sljedeću interpretaciju:<br>
                            <em>citac.nextDouble()</em> čita korisnički unos i pretvara ga u decimalni broj, a "=" ga pohranjuje u varijablu <em>x</em> tipa podatka double.</p>
                        </div>
                    </div>
                </div>
            </div> 
        </details>
        <p style="text-align: justify;">Usporedba klasa korištenih za učitavanje podatak kroz prednosti i nedostatke može biti prikazana tablicom:</p>
        <table class="custom-grid-table">
        <thead>
            <tr>
            <th>Značajka</th>
            <th>BufferedReader</th>
            <th>Scanner</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Paket</td>
            <td>java.io</td>
            <td>java.util</td>
            </tr>
            <tr>
            <td>Primarna svrha</td>
            <td>Brzo čitanje teksta</td>
            <td>Konverzija ulaznog tipa podatka</td>
            </tr>
            <tr>
            <td>Brzina izvođenja</td>
            <td>Brži</td>
            <td>Sporiji</td>
            </tr>
            <tr>
            <td>Automatska konverzija</td>
            <td>Ne</td>
            <td>Da</td>
            </tr>
            <tr>
            <td>Čitanje zapisa</td>
            <td>Cijeli redak </td>
            <td>Riječi</td>
            </tr>
            <tr>
            <td>Obrada velikih datoteka</td>
            <td>Izvrsna</td>
            <td>Dobra, ali spora</td>
            </tr>
            <tr>
            <td>Prikladnost</td>
            <td>Robusni programi</td>
            <td>Jednostavni programi</td>
            </tr>
        </tbody>
        </table>
</details>

<details>
    <summary><strong>Primjer riješenog zadatka</strong></summary>
        <p><strong>Zadatak:</strong> Sastaviti dijagram toka i/ili pseudokod za kod koji pomoću tipkovnice učitava 3 elementa jednodimenzionalnog polja tipa double i ispisuje vrijednost srednjeg elementa.</p>   
                <p><strong>Predloženi dijagram toka</strong></p>
                <p><strong>Napomena!</strong> Oznake <em>For petlje</em> prikazane u sivoj boji nisu sastavni dio dijagrama toka i služe isključivo za razumijevanje prikazanog sadržaja.</p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 350px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ '/assets/images/15_OgledniZadatak_Dijagram.png' | relative_url}}" alt="Dijagram toka">


                        <!-- 2. Ulaz Hotspot Dot (Positioned at 30% from top, 47% from right) -->
                        <div class="hotspot" style="top: 13%; right: 47%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ulaz</h4>
                                <p>Tekstom zadatka definirano je da je duljina polja 3, što znači da je ulazna vrijednost 3.</p>
                            </div>
                        </div>

                        <!-- 3. Pomocne varijable Hotspot Dot -->
                        <div class="hotspot" style="top: 24.5%; right: 50%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Varijable</h4>
                                <p>S obzirom da zadatak definira korištenje polja, potrebno je definirati varijablu polja. U ovom primjeru nazvana je <em>a</em>, a definirana duljinom <em>n</em> koja odgovara ulaznoj vrijednosti 3.<br>
                                Za izvršavanje petlje potrebno je postaviti početnu vrijedost brojača, zbog čega je uvedena varijabla <em>i</em> i inicijalizirana na vrijednost 0.</p>
                            </div>
                        </div>

                        <!-- 4. Uvjet nastavka Hotspot Dot -->
                        <div class="hotspot" style="top: 39%; right: 60%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Uvjet nastavka</h4>
                                <p>S obzirom da je tekstom zadatka definirano da polje mora imati 3 elementa, petlja se mora izvršiti tri puta, odnosno tri puta se mora unijeti vrijednost elementa. Kako je brojač inicijalizan na vrijednost 0, a petlja se izvršava tri puta, uvjet nastavka glasi <em>i<3</em>. Uvjet se mogao postaviti i u obliku <em>i<=2</em>.</p>
                            </div>
                        </div>
                        <!-- 5. Ispis Hotspot Dot -->
                        <div class="hotspot" style="top: 54%; right: 60%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ispis</h4>
                                <p>Kako bi se ostvarila organizacija u redoslijedu upisivanja vrijednosti, program će u svakom koraku reći korisniku koju vrijednos očekuje. U konkretnom primjeru program će od korisnika tražiti vrijednosti elemenata na 1., 2. pa na 3. mjestu u polju. To je osigurano kroz varijabilni dio poruke ispisa u kojoj varijabla <em>i</em> poprima vrijednost brojača u trenutno razmatranom koraku petlje. </p>
                            </div>
                        </div>
                        <!-- 6. Ulaz Hotspot Dot -->
                        <div class="hotspot" style="top: 73%; right: 60%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ulaz</h4>
                                <p>Svaku vrijednost koju je upisao korisnik program će tretirati kao ulaz i pohraniti u polje <em>a</em> na poziciju s indeksom <em>i</em>. Isto kao i kod ispisa, vrijednost varijable <em>i</em> mjenjat će se u svakom koraku petlje pa će se tako vrijednosti upisivati u elemente na pozicijama polja: <em>a1</em>, <em>a2</em>, <em>a3</em>.</p>
                            </div>
                        </div>
                        <!-- 7. Korak brojaca Hotspot Dot -->
                        <div class="hotspot" style="top: 85%; right: 60%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Korak</h4>
                                <p>Nakon izvršavanja instrukcija unutar <em>for</em> petlje, potrebno je povećati vrijednost brojača za jedan kako bi u novom koraku petlje bila razmatrana iduća pozicija unutar polja.</p>
                            </div>
                        </div>
                        <!-- 8. Ispis Korak Hotspot Dot -->
                        <div class="hotspot" style="top: 52%; right: 5%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ispis</h4>
                                <p>Nakon završetka popunjavanja elemenata, prema tekstu zadatka potrebno je ispisati vrijednost srednjeg elementa u polju. S obzirom da indeksacija elemenata u polju, tj. numeracija pozicija na kojoj se elementi nalaze kreće od 0, za polje od tri elementa indeksi su 0, 1 i 2. Prema tome, srednji element polja ima indeks 1. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p><strong>Predloženi pseudokod</strong></p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 300px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ '/assets/images/15_OgledniZadatak_Pseudokod.png' | relative_url}}" alt="Dijagram toka">

                    </div>
                </div>
            
            <p><strong>Predloženi kod u Javi</strong></p>
            <div class="hotspot-wrapper">
                <div class="hotspot-container" style="width: 600px; margin: 0 auto; display: inline-block;">
                    <!-- 1. Your Main Image -->
                        <img src="{{ '/assets/images/15_OgledniZadatak_Kod.png' | relative_url}}" alt="Dijagram toka">


                    <!-- 2. Ucitavanje paketa Hotspot Dot (Positioned at 2.5% from top, 2% from right) -->
                    <div class="hotspot" style="top: -3%; right: 75%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Učitavanje paketa java.io</h4>
                            <p>Za komunikacija korisnika s računalom u ovom primjeru korišten je objekt tipa klase BufferedReader. Ta klasa dostupna je unutar paketa java.io, a da bi se mogla koristiti u kodu zadatka, potrebno je cijeli paket eksplicitno pozvati. Učitavanje paketa se obavezno radi prije definicije klase. Linija koda oblika je <em>java.io.*</em>, a <em><strong>*</strong></em> označava da će se odjednom učitati sve klase iz paketa, a ne jedna po jedna.<br>
                            U programima koji učitavaju podatke preko tipkovnice, obavezno je koristiti <em>import</em> gotovih paketa, ali to je samo jedan od koraka za njihovo osposobljavanje u kodu. U slučaju <em>BufferedReadera</em>, <em>import java.io.*;</em> 1. je korak od njih 3.  </p>
                        </div>
                    </div>

                    <!-- 3. Main metoda Hotspot Dot -->
                    <div class="hotspot" style="top: 20%; right: 17%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Main metoda</h4>
                            <p>Uz klasičnu interpretaciju main metode u Javi, u ovom slučaju ona je proširena s <em>throws IOException</em>. Prilikom učitavanja podataka preko tikovnice korištenjem objekta tipa klase <em>BufferedReader</em>, može se dogoditi neka pograška (error) pa program treba smjernice kako dalje postupiti. Korištenje klase <em>IOException</em>, odnosno sintakse <em>throws IOException</em> program će prestati s izvršavanjem i obavijestiti korisnika. Dodavanje <em>throws IOException</em> u definiciju main metode 2. je korak (od 3) u osposobljavanju komunikacije korisnika s programom preko tipkovnice. Bez toga, izvršavanje koda javit će pogrešku.  </p>
                        </div>
                    </div>

                    <!-- 4. Objekt citac  Hotspot Dot -->
                    <div class="hotspot" style="top: 28%; right: -5%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Objekt tipa klase BufferedReader</h4>
                            <p>Da bi se korisnički unos preko tipkovnice mogao ispravno interpretirati i koristiti u kodu, potrebno je kreirati objekt tipa klase <em>BufferedReader</em>. Metode objekta <em>citac</em> dalje će poslužiti za učitavanje korisničkog unosa na točno određeno mjesto u kodu, odnosno pohranu u točno određenu varijablu. Kreiranje objekta tipa klase <em>BufferedReader</em> je 3. korak (od 3) u osposobljavanju komunikacije korisnika s programom preko tipkovnice. </p>
                        </div>
                    </div>

                    <!-- 5. Deklaracija polja Hotspot Dot -->
                    <div class="hotspot" style="top: 37%; right: 57%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Deklaracija polja i dodjela memorije računala</h4>
                            <p>Korištenje polja unutar koda programa zahtijeva njegovu deklaraciju i dodjelu memorije računala za pohranu vrijednosti polja.<br><em>double [] a</em> označava deklaraciju polja naziva <em>a</em> koje će pohranjivati vrijednosti tipa podatka double. Kako je prema tekstu zadatka definirano da je polje duljine 3, odnosno da pohranjuje tri broja, izrazom <em>new double [3]</em> u memoriji računala rezervirano je mjesta za tri vrijednosti koje su tipa podatka double. Deklaracija polja i dodjela memorije računala osnovni su preduvjet za nastavak korištenja polja u kodu programa.</p>
                        </div>
                    </div>
                    <!-- 6. Popunjavanje elemenata polja Hotspot Dot -->
                    <div class="hotspot" style="top: 45%; right: 63%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Popunjavanje elemenata polja</h4>
                            <p>Polje je složeni tip podatka, a može se smatrati podatkom sastavljenim od više podataka. Ti podaci nazivaju se elementima polja i vizualiziraju polje kao vektor s ćelijama. Popunjavanje tih ćelija (elemenata polja) može se raditi ručno na način da se svakoj ćeliji (elementu) pristupa indeksom polja (lokacijom unutar strukture polja) i ručno unese vrijednost. Kod dugačkih polja to bi zahtijevalo višestruko ponavljanje linija koda pa se u praksi zasebne instrukcije zamjenjuju <em>for</em> petljom. Na taj način automatizirano je ponavljanje istih instrukcija, a broj koraka izvršavanja petlje jednak je duljini polja. U ovom slučaju duljina polja jednaka je 3 pa je uvjet nastavka petlje <em>i<3</em>.</p>
                        </div>
                    </div>
                    <!-- 7. Input korisnika polja Hotspot Dot -->
                    <div class="hotspot" style="top: 52%; right: 26%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Poruka programa korisniku</h4>
                            <p>U trenutku kada je pozvan objekt <em>citac</em> (idući redak), program aktivira mogućnost čitanja onog što je korisnik unio. Kako bi kod bio uredan, i kako bi se znalo što korisnik u kojem trenutku izvršavanja programa mora unijeti, uputno je koristiti programske poruke. Korištenjem programskih poruka osigurano je da korisnik u svakom trenutku zna koji točno podatak program od njega treba, a važnost toga postaje izražena kod kompleksnijih programa s višestrukim korisničkim unosima.<br>
                            Računalo indeksiranje elemenata polja započinje s 0, dok je u govornom jeziku uobičajeno govoriti 1. element polja. Usklađivanje razumijevanja u ovom primjeru postignuto je korištenjem zapisa "i+1". Na taj način korisniku će se ispisat npr. 1, dok će u računalu to značiti 0"+1", dakle 0.</p>
                        </div>
                    </div>
                    <!-- 8. Ucitavanje podatka Hotspot Dot -->
                    <div class="hotspot" style="top: 60%; right: 35%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Učitavanje i pohrana podatka u polje</h4>
                            <p>Korištenjem metode <em>Double.parseDouble</em> korisnički unos pretvara se u tip podatka double što je u skladu s definicijom polja <em>a</em>.<br>
                            Prema definiciji tipa podatka polje, elementima polja pristupa se preko nihovog indeksa u polju, a to je formalizirano sintaksom <em>naziv_polja[indeks_polja]</em>. Npr. ako se želi pristupiti prvom elementu polja, pozivamo ga s <em>a[0]</em>. S obzirom da je popunjavanje polja automatizirano petljom, oznaka indeksa mora biti varijabilna, odnosno svaki idući korak petlje mora utjecati na idući element u polju. U ovom kodu to je postignuto indeksiranjem elementa polja unutar petlje samim brojačem petlje, kao <em>a[i]</em>. S obzirom da je početno stanje brojača 0, u prvom koraku izvršavanja petlje a[i] označit će a[0], u drugom a[1] i tako sve dok se ne dođe do zadnjeg elementa.</p>
                        </div>
                    </div>
                    <!-- 9. Ispis rezultata Hotspot Dot -->
                    <div class="hotspot" style="top: 76%; right: 29%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Ispis rezultata</h4>
                            <p>Ispisivanje rezultata radi se metodom <em>System.out.println()</em>.<br>
                            Kako je polje <em>a</em> globalno definirano, tj. definirano je izvan petlje, može mu se pristupiti i nakon izvršavanja petlje. U tom slučaju, pozivanje nekog njegovog elementa moguće je unosom točnog indeksa na kojem se taj element nalazi. U ovom zadatku, traži se vrijednost srednjeg elementa u polju duljine 3, dakle 2. elementa, što je element polja s indeksom 1.</p>
                        </div>
                    </div>
                </div>
            </div>
        
</details>