---
layout: default
title: Dvodimenzionalna polja
nav_order: 7
has_children: true
---

# Dvodimenzionalna polja
<p align="justify">Ako je jednodimenzionalno polje interpretirano kao stupac, odnosno vektor vrijednosti (1D), dvodimenzionalno polje može se smatrati matricom (2D). Java izvorno ne podržava dvo- ili višedimenzionalna polja, ali ih se može simulirati na način da se umjesto elementa polja unese cijelo polje. Na taj način svaki element polja je zapravo polje, odnosno polje sadržava više polja unutar sebe čime se kreira struktura redaka i stupaca. Zbog toga retci (elementi izvornog polje) mogu imati različitu duljinu po stupcima (polja koja su elementi izvornog polja mogu biti različite duljine). To znači da dvodimenzionalno polje nije uvijek u formi pravilne matrice, ali ga se zbog jednostavnosti razmuijevanja tako često naziva.</p>
<p align="justify">Sva pravila koja su vrijedila za jednodimenzionalna polja (deklaracija polja, tip podataka polja, naziv polja, veličina polja) ostaju vrijediti i u dvodimenzionalnim poljima, ali se nadograđuju dopunama koje podržavaju rad s više dimenzija. Tako se dvodimenzionalna polja označavaju dvostukim umjesto jednostrukim uglatim zagradama, <em><strong>[ ][ ]</strong></em>, gdje prva uglata zagrada označava duljinu 2D polja po retcima, a druga označava duljinu svakog retka (tj. definira broj stupaca u retku). Struktura redaka i stupaca zahtijeva i korištenje dvostuke <em>for</em> petlje za popunjavanje/pristupanje elementima polja, po jedna za svaku dimenzije polja.</p>
<p><strong>Po završetku ovih vježbi student će moći:</strong></p>

1. Razumjeti ulogu dvodimenzionalnih polja u pohranjivanju podataka pri izvršavanju programa
2. Razumjeti i znati primijeniti sintaksu dvonodimenzionalnog polja u zapisu koda
3. Znati pristupati elementima dvodimenzionalnih polja prilikom izvršavanja koda

<details>
    <summary><strong>Osnovni koncepti</strong></summary><br>
    <strong>Dvodimenzionalno polje</strong>
    <p style="text-align: justify;">Složeni tip podatka za strukturirano pohranjivanje podataka istog tipa pod zajedničkim imenom. Sastoji se od dvije dimenzije koji se često nazivaju retcima i stupcima. Izvorno nije podržano programskim jezikom Java, ali se simulira korištenjem polja kao elemenata u jednodimenzionalnom polju. Sadržava samo referencu na mjesto gdje se podaci nalaze, ne i stvarnu vrijednost podataka.<br> </p>
    <strong>Deklaracija polja</strong>
    <p style="text-align: justify;">Definiranje naziva polja i tipa podataka u njemu sadržanih, ne i zauzimanje prostora u memoriji računala. Deklaracija dvodimenzionalnog polja prati logiku deklaracije jednodimenzionalnog polja<br>
    <em>tip_podatka [ ] [ ] ime_polja</em><br>
    gdje je <em>tip_podatka</em> tip podataka pohranjenih u polju, <em>[ ] [ ]</em> oznaka dvodimenzionalnog polja, a <em>ime_polja</em> naziv polja (kako će se polje dalje u kodu pozivati).</p>
    <strong>Dodjeljivanje memorije za polje</strong>
    <p style="text-align: justify;">Da bi se polju dodijelila odgovarajuća količina memorije u računalu, koristi se ključna riječ <em>new</em> zajedno s veličinom polja po obje dimenzije (broj redaka i elemenata u svakom retku - stupaca): <br>
    <em>ime_polja = <strong>new</strong> tip_podatka [veličina_polja] [veličina_polja]</em><br>
    Izrazom <em>new tip_podatka [veličina polja] [veličina polja]</em> kreira se novo polje određene veličine (po retcima i stupcima), a u <em>ime_polja</em> se smješta referenca na to polje - gdje se nalaze podaci. Tip podatka pri deklaraciji i dodjeljivanju memorije za polje moraju biti isti!  </p>
    <strong>Element polja</strong>
    <p style="text-align: justify;">U slučaju dvodimenzionalnih polja, element vanjskog (izvornog) polja je polje, a element unutarnjeg polja je vrijednost. <br>
    <ul><strong>Indeks elementa</strong><br>
    Identifikatori elementa unutar polja, tj. pozicija elementa u dvodimenzionalnom polju. Omogućuje pristupanje elementu unutar polja (za primjerice pozivanje ili izmjenu vrijednosti). Indeksiranje polja opet počinje s 0, a svaka dimenzija polja ima svoju skupinu indeksa koji u kombinaciji jednoznačno definiraju poziciju elementa unutar strukture redaka i stupaca.</ul></p>
    <strong>Inicijalizator polja</strong>
    <p style="text-align: justify;">Postupak dodjeljivanja podataka u trenutku deklaracije polja. Koristi se kada se polje želi deklarirati i popuniti vrijednostima istovremeno. Za inicijalizaciju dvodimenzionalnog polja koriste se vitičaste zagrade <em>{}</em>, pri čemu je potrebno incijalizirati polja iznutra prema vani (npr. incijaliziraju se unutarnja polja koja se pohranjuju u odgovarajuće elemente vanjskog polja). <br>Inicijalizator polja se ne može koristiti u kombinaciji s ključnom riječi <em>new</em> (dodjeljivanje memorije) jer se inicijalizacijom polja polje i deklarira i popunjavaju se sve vrijednosti pa je duljina po dimenzijama automatski određena.</p>
</details>

<details>
    <summary><strong>Primjer riješenog zadatka</strong></summary>
        <p><strong>Zadatak:</strong> Sastaviti dijagram toka i/ili pseudokod za kod koji pomoću tipkovnice učitava elemente dvodimenzionalnog polja (matrice) tipa 3x3 i ispisuje zbroj svih elemenata matrice. Elementi matrice su cijeli brojevi.</p>    
                <p><strong>Predloženi dijagram toka</strong></p>
                <p><strong>Napomena!</strong> Oznake <em>For petlji</em> prikazane u sivoj boji nisu sastavni dio dijagrama toka i služe isključivo za razumijevanje prikazanog sadržaja.</p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 500px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ 'assets\images\16_OgledniZadatak_Dijagram.png' | relative_url}}" alt="Dijagram toka">
                        <!-- 2. Ulaz Hotspot Dot (Positioned at 30% from top, 47% from right) -->
                        <div class="hotspot" style="top: 5.5%; right: 53%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ulaz</h4>
                                <p>Tekstom zadatka definirano je da je matrica tipa 3x3, što znači da su duljine polja 3, odnosno da je ulazna vrijednost 3.</p>
                            </div>
                        </div>
                        <!-- 3. Pomocne varijable Hotspot Dot -->
                        <div class="hotspot" style="top: 12.5%; right: 71%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Varijable</h4>
                                <p>S obzirom da zadatak definira matrica, potrebno je definirati varijablu 2D polja. U ovom primjeru nazvana je <em>a</em>, a definirana duljinom <em>n</em> koja odgovara ulaznoj vrijednosti 3.<br>
                                Za zbrajanje elemenata matrice definirana je globalna varijabla zbroj u koju će se pohranjivati rezultati zbrajanja. O varijabli <em>zbroj</em> pročitati više u dijelu <em>Predloženi kod u Javi</em>.<br>
                                Za izvršavanje petlje potrebno je postaviti početnu vrijedost brojača, zbog čega je uvedena varijabla <em>i</em> i inicijalizirana na vrijednost 0.</p>
                            </div>
                        </div>
                        <!-- 4. Uvjet nastavka Hotspot Dot -->
                        <div class="hotspot" style="top: 24%; right: 55%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Uvjet nastavka</h4>
                                <p>S obzirom da je tekstom zadatka definirano da je matrica tipa 3x3, znači da ima 3 retka sa po 3 elementa. Pristupanje elementima polja radi se kombinacijom indeksa po retku i stupcu, a za to nužno je u svakom koraku zamrznuti varijablu koji predstavlja brojača. U ovom primjeru varijabla  <em>i</em> koristi se za brojanje redaka matrice i njezinim zamrzavanjem će se u daljnjim koracima razmatrati elementi po stupcima, jedan po jedan. Kako je varijabla <em>i</em> inicijalizana na vrijednost 0, a petlja se izvršava tri puta, uvjet nastavka glasi <em>i<3</em>. Uvjet se mogao postaviti i u obliku <em>i<=2</em>.</p>
                            </div>
                        </div>
                        <!-- 5. Uvjet nastavka Hotspot Dot -->
                        <div class="hotspot" style="top: 36%; right: 56%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Uvjet nastavka</h4>
                                <p>Zadovoljavanjem uvjeta <em>i<3</em> kreće izvršavanje bloka instrukcija <em>for</em> petlje u kojem se nalazi nova <em>for</em> petlja. Unutarnja <em>for</em> petlja se koristi za šetanje po stukturi retka, odnosno po elementima stupaca u razmatranom retku.<br>
                                Kako je varijabla <em>i</em> već iskorištena unutar bloka naredbi vanjske <em>for</em> petlje, potrebno je uzeti novi naziv varijable koja će predstavljati brojača unutarnje <em>for</em> petlje. U ovom slučaju to je varijabla <em>j</em>. <br>
                                Svaka <em>for</em> petlja mora imati brojač i taj brojač mora biti incijaliziran na neku vrijednost. Zbog toga je brojač <em>j</em> u ovom koraku inicijaliziran na vrijednost nula. </p>
                            </div>
                        </div>
                        <!-- 6. Ispis Hotspot Dot -->
                        <div class="hotspot" style="top: 47%; right: 56%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ispis</h4>
                                <p>Unutarnja <em>for</em> petlja se kao i vanjska mora izvršiti tri puta (svaki redak ima 3 elementa). Nakon inicijalizacije brojača, slijedi ispitivanje uvjeta nastavka unutarnje <em>for</em> petlje, <em>j<3</em>, te u slučaju da je on zadovoljen, s izvršavanjem pripadajućeg bloka instrukcija.<br>
                                Korištenje ugniježđene <em>for</em> petlje ima sljedeću interpretaciju: brojač vanjske petlje, varijabla <em>i</em>, koristi se za šetanje po retcima 2D polja, a brojač unutarnje petlje, varijabla <em>j</em>, koristi se za pristupanje elementima retka, odnosno stupcima. Korištenjem  brojača <em>for</em> petlji, formiraju se kombinacije indeksa i omogućuje pristupanje pojedinačnim elementima unutar 2D polja. To će biti korisno kasnije, u pohranjivanju korisničkih vrijednosti na točno određeno mjesto u 2D polja. </p>
                            </div>
                        </div>
                        <!-- 7. Programska poruka Hotspot Dot -->
                        <div class="hotspot" style="top: 59%; right: 52%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Programska poruka</h4>
                                <p>Ukoliko je zadovoljen uvjet nastavka unutarnje <em>for</em> petlje, kreće se u izvršavanje pripadajućeg bloka naredbi. U tom slučaju program mora ispisati poruku u kojoj od korisnika traži unos elemenata kojima će se polje popuniti. Kako bi se organizirao unos i točno znalo koji element 2D polja se razmatra za unos, programska poruka sadrži informaciju o indeksima tog elementa koji su zapravo vrijednosti brojača u <em>for</em> petljama.<br>
                                Usklađivanje numeracije elemenata polja između računalnog i govornog jezika se, kao i kod jednodimenzionalnog polja, postigla izrazom (i+1) i (j+1).</p>
                            </div>
                        </div>
                        <!-- 8. Ulaz Hotspot Dot -->
                        <div class="hotspot" style="top: 73%; right: 52%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ulaz</h4>
                                <p>Ispisivanjem programske poruke korisnik u svakom trenutku zna kojem elementu matrice pristupa.Unošenjem vrijednosti, 2D polje se popunjava element po element.</p>
                            </div>
                        </div>
                        <!-- 9 Zbrajanje Korak Hotspot Dot -->
                        <div class="hotspot" style="top: 80%; right: 52%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Operacija zbrajanja</h4>
                                <p>Kombinacija indeksa (brojača <em>for</em> petlji), u prethodnom je koraku svaki uneseni element pohranjen na poziciju 2D polja s adresom a[i][j]. Iskorištavanje razmatrane kombinacije indeksa, a[i][j] u ovom je koraku iskorišteno za pribrajanje novounesenog elementa polja prethodnom zbroju. Na taj način, svaki korak petlje ažurira vrijednost zbroja, a to će u konačnici dati ukupan zbroj jednom kad se obje petlje završe.</p>
                            </div>
                        </div>
                        <!-- 10. Korak unutarnje petlje Hotspot Dot -->
                        <div class="hotspot" style="top: 88%; right: 54%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Korak brojača <em>j</em></h4>
                                <p>Jednom kad su završene sve operacije na razmatranoj poziciji polja (unos i zbrajanje), mijenja se vrijednost brojača <em>j</em> - on se uvećava za jedan. S obzirom da se trenutno razmatra brojač unutarnje petlje, brojač vanjske petlje ostaje isti pa se u novom izvršavanju petlje dobije kombinacije indeksa a[i][j+1]. Time se osigurava pristupanje idućem elementu u istom retku. </p>
                            </div>
                        </div>
                        <!-- 11. Korak Vanjske petlje Hotspot Dot -->
                        <div class="hotspot" style="top: 38%; right: 85%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Korak brojača <em>i</em></h4>
                                <p>Jednom kad je unutarnja petlja došla do zadnjeg elementa u razmatranom retku, uvjet nastavka više nije zadovoljen i petlja se vraća u vanjsku <em>for</em> petlju. Tamo se događa korak u kojem se mijenja vrijednost brojača <em>i</em>. On se opet povećava za jedan.<br>
                                Obje petlje se tako izvršavaju dok uvjeti nastavka obiju petlji nisu neispunjeni.</p>
                            </div>
                        </div>
                        <!-- 12. Ispis rezultata Hotspot Dot -->
                        <div class="hotspot" style="top: 34%; right: 4%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ispis rezultata <em>i</em></h4>
                                <p>Kada uvjet nastavka vanjske <em>for</em> petlje više nije zadovoljen, program nastavlja dalje i ispisuje vrijednost dobivenog zbroja. S obzirom da se u svakom koraku izvršavanja petlji zbroj uvećavao za vrijednost novog elementa, i da je varijabla <em>zbroj</em> deklarirana izvan polja, moguće je pristupiti njenoj vrijednosti i ispisati je na ekranu zaslona. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p><strong>Predloženi pseudokod</strong></p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 450px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ 'assets\images\16_OgledniZadatak_Pseudokod.png' | relative_url}}" alt="Dijagram toka">
                    </div>
                </div>
            <p><strong>Predloženi kod u Javi</strong></p>
            <div class="hotspot-wrapper">
                <div class="hotspot-container" style="width: 650px; margin: 0 auto; display: inline-block;">
                    <!-- 1. Your Main Image -->
                        <img src="{{ 'assets\images\16_OgledniZadatak_Kod.png' | relative_url}}" alt="Dijagram toka">
                    <!-- 2. Deklaracija polja Hotspot Dot -->
                    <div class="hotspot" style="top: 29%; right: 63%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Deklaracija polja i dodjela memorije računala</h4>
                            <p>Korištenje 2D polja unutar koda programa zahtijeva njegovu deklaraciju i dodjelu memorije računala za pohranu vrijednosti polja, kao i kod jednodimenzionalnih polja. Kako je prema tekstu zadatka definirano da je matrica tipa 3x3, odnosno da ima tri retka i tri stupca, i da su elementi matrice cijeli brojevi, izrazom <em>new int [3] [3]</em> u memoriji računala rezervirana su mjesta za devet vrijednosti koje su tipa podatka int. Deklaracija polja i dodjela memorije računala osnovni su preduvjet za nastavak korištenja polja u kodu programa.</p>
                        </div>
                    </div>
                    <!-- 3. Dodatna varijabla Hotspot Dot -->
                    <div class="hotspot" style="top: 34%; right: 78.5%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Dodatna varijabla <em>zbroj</em></h4>
                            <p>Prema tekstu zadatka potrebno je kao rezultat ispisati zbroj svih elemenata matrice. Razmišljajući o petlji, može se zaključiti da petlja u jednom koraku izvršavanja razmatra samo jednu vrijednost zbroja, odnosno da u idućem koraku razmatra različitu, novu vrijednost. Kako bi se osiguralo da se koristi samo jedna varijabla zbroja u cijelom zadatku, potrebno ju je deklarirati i inicijalizirati izvan petlje i po potrebi pozivati u kodu.<br>
                            U ovom primjeru, deklarirana je varijabla <em>zbroj</em>. Ideja je u svakom koraku izvršavanja petlje učitati određeni element matrice i odmah ga pribrojiti u varijablu <em>zbroj</em>. Kako je varijabla <em>zbroj</em> globalna varijabla, vrijednost pohranjena unutra bit će dostupna i u idućem koraku izvršavanja petlje. Drugim riječima, ideja je učitati vrijednost elementa matrice i pribrojiti ga na prethodnu vrijednost zbroja što će predstavljati ulazni zbroj za idući korak petlje. Po završetku izvršavanja petlje, vrijednost u varijabli <em>zbroj</em> odgovarat će zbroju svih elemenata matrice.<br>
                            Varijabla <em>zbroj</em> inicijalizirana je na vrijednost nula jer je nula neutralni element zbrajanja; tj. ne utječe na rezultat. </p>
                        </div>
                    </div>
                    <!-- 4. for petlja Hotspot Dot -->
                    <div class="hotspot" style="top: 43%; right: 62%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>For petlje</h4>
                            <p>Na primjeru jednodimenzionalnog polja demonstrirano je kako i zašto se koristi <em>for</em> petlja - brojač se koristi kao indeks polja što omogućuje šetanje po strukturi polja i pristupanje vrijednostima njegovih elemenata. S obzirom da je 2D polje definirano dvjema veličinama polja, [ ][ ], potrebne su potrebne su dvije ugniježđene <em>for</em> petlje, koje će osigurati dva (različita) brojača za for petlje. <br>
                            U unutarnjoj <em>for</em> petlji korišten je brojač naziva <em>j</em> koji radi na istom principu kao i onaj u vanjskoj <em>for</em> petlji. Te dvije petlje u sinergiji rade na sljedeći način: Prva <em>for</em> petlja u prvom koraku uzima brojač i=0 i kreće izvršavanje bloka naredbi. Unutar tog bloka nalazi se druga petlja čija je inicijalna vrijednost brojača j=0 i po izvršenju uvjeta nastavka izvršava se njen blok naredbi. Kad se završi prvi korak unutarnje petlje, brojač postaje j=1 i ponovno se izvršava unutarnja <em>for</em> petlja dok god je uvjet zadovoljen. Kad se završi izvršavanje unutarnje <em>for</em> petlje, kod se vraća u vanjsku i povećava brojač <em>i</em> za 1. <br>
                            U praksi to ima sljedeću interpretaciju: prva for petlja fiksira šetanje po strukturi 2D polja na prvi redak, druga <em>for</em> petlja zatim šeta po stupcima tog retka. Nakon toga, petlja se prebacuje na drugi redak i njegove stupce i tako sve dok ne dode do kraja polja. </p>
                        </div>
                    </div>
                    <!-- 5. Input korisnika polja Hotspot Dot -->
                    <div class="hotspot" style="top: 52%; right: -4%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Poruka programa korisniku</h4>
                            <p>U bilo kakvoj komunikaciji računala s korisnikom, u svrhu što bolje organiziranosti tj. kako bi se znalo što korisnik u kojem trenutku izvršavanja programa mora unijeti, uputno je koristiti programske poruke. Korištenjem programskih poruka osigurano je da korisnik u svakom trenutku zna koji točno podatak program od njega treba.<br>
                            U ovom primjeru je kao i kod jednodimenzionalnih polja korišteno usklađivanje indeksacije računalnog jezika s govornim jezikom čovjeka. Korišteni su izrazi "i+1" i "j+1" koji od korisnika traže element prema govornom jeziku, a ti isti računalu su poznati kao <em>i</em> i <em>j</em>.</p>
                        </div>
                    </div>
                    <!-- 6. Ucitavanje podatka Hotspot Dot -->
                    <div class="hotspot" style="top: 58%; right: 39%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Učitavanje i pohrana podatka u polje</h4>
                            <p>Korištenjem metode <em>Integer.parseInt</em> korisnički unos pretvara se u tip podatka integer što je u skladu s definicijom polja <em>a</em>.<br>
                            Prema definiciji tipa podatka polje, elementima 2D polja pristupa se preko nihovih indeksa u 1D poljima, a to je formalizirano sintaksom <em>naziv_polja[indeks_polja][indeks_polja]</em>. Npr. ako se želi pristupiti prvom elementu matrice, pozivamo ga s <em>a[0][0]</em>. S obzirom da je popunjavanje polja automatizirano petljom, oznake indeksa moraju biti varijabilne, odnosno koraci petlje moraju utjecati na promjenu vrijednosti indeksa po nekom redoslijedu. U ovom kodu to je postignuto indeksiranjem elementa polja unutar petlje brojačima petlje, kao <em>a[i][j]</em>. <br>
                            Kod dvodimenzionalnih polja koriste se dvije <em>for</em> petlje, u prvom koraku izvršavanja vanjske petlje početno stanje brojača <em>i</em> je 0, a u prvom koraku izvršavanja unutarnje <em>for</em> petlje početno stanje brojača <em>j</em> je također 0. Pozivanjem polja njegovim nazivom s brojačima kao indeksima omogućit će pristup elementima u memoriji i tamo pohraniti korisnikovu vrijednost. Koraci petlje osigurat će da se u svakom koraku razmatra različit element 2D polja.</p>
                        </div>
                    </div>
                    <!-- 7. Zbrajanje Hotspot Dot -->
                    <div class="hotspot" style="top: 64%; right: 64%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Zbrajanje</h4>
                            <p>Varijabla <em>zbroj</em> deklarariana je izvan petlje i inicijalizirana na neutralnu vrijednost za zbrajanje, nulu. Svaki korak izvršavanja petlje učitava novu korisničku vrijednost elementa polja i pohranjuje ga na poziciju u 2D polju koja je određena tim korakom petlje (preko brojača <em>i</em> i <em>j</em>). Individualno razmatranje svake pozicije u polju iskorišteno je u operaciji zbrajanja. Naime, osim što se element u razmatranom koraku petlje pohranjuje u polje, odmah se pribraja na prethodnu vrijednost zbroja (kroz <em>zbroj+a[i][j]</em>) i zapisuje kao nova vrijedonost zbroja (<strong>zbroj =</strong>zbroj+a[i][j]). <br>
                            Slikovitije, ako je početna vrijednost zbroj=0 i učitan je element a[0][0]=2, izraz zbroj+a[i][j] bit će jednak 2 i kao takav će se pohraniti kao nova vrijednost varijable zbroj. Nova vrijednost u varijabli zbroj će postati ulazna vrijednost zbroja u idućem koraku petlje. </p>
                        </div>
                    </div>
                    <!-- 8. Ispis rezultata Hotspot Dot -->
                    <div class="hotspot" style="top: 82%; right: 24%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Ispis rezultata</h4>
                            <p>Ispisivanje rezultata radi se metodom <em>System.out.println()</em>.<br>
                            Ispisuje se konačna vrijednost svih elemenata u zbroju.</p>
                        </div>
                    </div>
                </div>
            </div>
</details>