---
layout: default
title: Kodiranje u Javi
nav_order: 2
has_children: true
---

# Kodiranje u Javi
<p align="justify">Java pripada skupini Objektno orijentiranih programskih jezika (OOP) što znači da koristi objekte kao osnovu za kreiranje programa. Drugim riječima, Java se kao OOP jezik fokusira na to što je potrebno za izvršavanje i kako se program izvršava, a ne na redoslijed kojim se izvršava (proceduralni jezici ili ne-OOP).</p>
<p align="justify">OOP jezici imaju za cilj pojednostaviti kreiranje programa na način da se jednom zapisani kod može ponovno koristiti. To olakšava pisanje programa, smanjuje redundanciju linija koda te pospješuje održavanje programa u budućnosti. </p>
<p align="justify">OOP je baziran na objektima (otkud dolazi i ime) koji predstavljaju softverske entitete za opisivanje stvari ili pojava. Svaki objekt se sastoji od dva osnovna dijela ili elementa: (1) varijabli koje opisuju kako taj objekt izgleda (npr. vrstu mjerne jedinice koju koristi) i (2) metoda, tj. onoga što taj objekt može činiti (npr. računanje površine).</p>
<p align="justify">Često je u programu potrebno kreirati više istovrsnih objekata koji se razlikuju samo po vrijednostima atributa, tj. varijabli. OOP takve objekte kreira na temelju klasa koje prestavljaju predložak za kreiranje objekata. Općenito govoreći, klasa definira zajednička svojstva koja vrijede za sve objekte iste vrste, pri čemu svaki objekt dobija svoje vlastite vrijednosti varijabli prilikom kreiranja. Objekti se još nazivaju i instancama klase.</p>
<p align="justify">Odnos klase i njenih objekata (instanci) može se razmotriti na sljedećem primjeru. Svaki student koji pohađa nastavu iz kolegija Programiranje je osoba i ima boju očiju. Međutim, neki imaju zelene oči, neki smeđe. S obzirom da svi oni dijele karakteristiku boje očiju, ona se može koristi za definiranje predloška osobe, dakle za kreiranje klase osoba, a onda će se prilikom kreiranja objekta za svakog pojedinog studenta (npr. student 1) boja očiju dodijeliti kao vrijednost varijable boja očiju.</p>
<p><strong>Po završetku ovih vježbi student će moći:</strong></p>

1. Razumjeti ulogu varijabli u pisanju koda
2. Razumjeti ulogu main metode u programskom jeziku Java
3. Znati primijeniti binarne aritmetičke operatore u programskom jeziku Java
4. Razumjeti i znati primijeniti postupke konverzije jednostavnih tipova podataka


<details>
    <summary><strong>Osnovni koncepti</strong></summary><br>
    <strong>Objekt <em>(Object)</em></strong>
    <p style="text-align: justify;">Softverski entitet sastavljen od varijabli i pripadnih metoda koji predstavlja model stvarnih ili apstraktnih objekata. </p>
    <strong>Klasa <em>(Class)</em></strong>
    <p style="text-align: justify;">Predložak za kreiranje objekata. Definira kako će izgledati budući objekt (atributi->varijable) i što će moći činiti (metode) </p>
    <ul><strong>Varijabla <em>(Variable)</em></strong>
    <p style="text-align: justify;">Imenovano mjesto u memoriji računala u koje se spremaju (promjenjivi) podaci o atributima objekata stvarnog svijeta. Osim naziva, definicija varijable uključuje i tip podatka koji se može pohraniti u memoriji. </p>
    <strong>Metoda <em>(Method)</em></strong>
    <p style="text-align: justify;">Izdvojeni skup linija koda (instrukcije) za rješavanje određenog problema. Pozivanjem metode pristupa se zapisanim instrukcijama koje se potom izvršavaju.</p>
    <ul><strong>main() metoda</strong><br>
    Posebna metoda koja u Javi označava početnu točku za izvršavanje programa. Ima specifičan potpis (zapis) kojim se razlikuje od drugih metoda. Ako u kodu programa nefostaje main() metoda, ili ako joj zapis nije ispravan, program se neće moći izvršiti.</ul>
    </ul>
    <strong>Tip podatka</strong>
    <p style="text-align: justify;">Skup vrijednosti koje neki podatak može poprimiti. Svaka varijabla mora imati definiran tip podatka da bi se znalo koji podatak se u tu varijablu može pohraniti. Tip podatka pri definiciji varijable rezervira memorijski prostor za pohranu podataka. </p>
    <ul><strong>Jednostavni tip podatka</strong><br>
    Služe za pohranjivanje osnovnih jednostavnih podataka, primjerice slova, brojeva (cijelih i decimalnih), logičke operacije (True/False).<br>
    <strong>Konverzija podataka</strong><br>
    Dodjeljivanje podatka jednog tipa varijabli definiranoj drugim tipom podatka. U nekim slučajevima moguća automatski (cijeli broj u decimalni - ne gubi se dio podatka), u nekima mora biti izričita (decimalni u cijeli broj - namjerni gubitak dijela podatka).</ul><br>
</details>

<details>
    <summary><strong>Primjer riješenog zadatka</strong></summary>
    <p style="text-align: justify;"><strong>Zadatak:</strong> Sastaviti dijagram toka i/ili pseudokod za kod koji računa površinu katastarske čestice pravokutnog oblika s proizvoljnim duljinama stranica a i b te ispisuje izračunatu površine.</p>
    <p><strong>Kod u Javi</strong></p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 600px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ '/assets/images/9_OgledniZadatak 1.png' | relative_url}}" alt="Kod u Javi">


                        <!-- 2. Klasa Hotspot Dot (Positioned at 2.5% from top, 2% from right) -->
                        <div class="hotspot" style="top: -0.5%; right: 40%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Definicija klase</h4>
                                <p><strong>class PovrsinaKatastarskeCestice</strong><br>
                                Definira da se radi o klasi naziva PovrsinaKatastarskeCestice. Prema dogovorenoj konvenciji, nazivi klasa uvijek se pišu velikim početnim slovom - omogućuje razlikovanje klase od drugim elemenata u Javi. class je ključna riječ u Javi pa se prikazuje u drugačijoj boji od ostatka sadržaja.</p><br>
                                <p><strong>public</strong><br>
                                public označava način pristupa klasi, tj. definira koji dio programa može vidjeti i pristupiti ovoj klasi. Klasa u kojoj se nalazi main metoda uvijek mora biti public. Riječ public također je ključna riječ u Javi.<br><br>
                                Svaki program mora sadržavati barem jednu klasu!</p><br>
                            </div>
                        </div>

                        <!-- 3. BlokNaredbi Hotspot Dot -->
                        <div class="hotspot" style="top: 9.5%; left: 3%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Blok instrukcija</h4>
                                <p>Vitičaste zagrede <strong>{}</strong> označavaju blok naredbi, tj. više od jedne naredbe koja se treba izvršiti pozivanjem programa. Mogu se pisati u istom retku ili sljedećem. Zagrade se moraju pažljivo postaviti kako bi obuhvatile sve instrukcije koje program treba izvršiti. Svaka otvorena zagrada mora se i zatvoriti. </p>
                            </div>
                        </div>

                        <!-- 4. MainMetoda Hotspot Dot -->
                        <div class="hotspot" style="top: 20%; right: 30%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>main metoda</h4>
                                <p>Osnovna metoda svakog Java programa bez koje se program ne može pokrenuti.</p>
                                <p><strong>public</strong><br>
                                <em>public</em> označava identifikator pristupa, tj. tko može pristupiti metodi. Main metoda uvijek <strong>mora</strong> biti definirana kao public kako bi joj se uvijek moglo pristupiti.</p>
                                <p><strong>static</strong><br>
                                <em>static</em> znači da se radi o metodi klase, a ne metodi objekta, odnosno da nije nužno kreirati objekt kako bi se metoda mogla pozvati i program pokrenuti. Main metoda uvijek <strong>mora</strong> mora biti definirana kao static kako bi se mogla pokrenuti i kada nijedan objekt nije kreiran.</p>
                                <p><strong>void</strong><br>
                                <em>void</em> znači da metoda pri pozivanju nema povratnu vrijednost - rezultat izvršavanja ostaje u metodi. Najčešće se u void metodama koristi instrukcija ispisa koja rezultat ispisuje na ekranu, a ne vraća ga dalje u kod. Main metoda uvijek <strong>mora</strong> mora biti void.</p>
                                <p><strong>main</strong><br>
                                <em>main</em> je naziv metode. Main metoda uvijek <strong>mora</strong> mora biti nazvana main. Prema konvenciji, nazivi metoda pišu se malim početnim slovom, a uvijek se vežu uz <strong>()</strong> kojima se metodi prosljeđuju parametri za izvršavanje - main(). </p>
                                <p><strong>String [] argumenti</strong><br>
                                <em>String [] argumenti</em> je parametar main metode (s čim metoda radi). Parametar je naziva <em>argumenti</em> i tipa je podatka polja Stringova. </p>
                            </div>
                        </div>

                        <!-- 5. UlazneVarijable Dot -->
                        <div class="hotspot" style="top: 35%; right: 67%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ulazne Varijable</h4>
                                <p><strong>Deklaracija</strong><br>
                                Prije korištenja varijabli, nužno ih je deklarirati. Deklaracija znači varijabli dati ime i dodijeliti joj tip tip podatka koji se u nju može pohraniti. U ovom primjeru deklaracija varijable uključuje <em>double a</em>.</p>
                                <p><strong>Inicijalizacija</strong><br>
                                Inicijalizacija označava da se prilikom deklaracije zadaje i početna vrijednost varijable. U ovom zapisu inicijalizacija se odnosi na brojeve <em>12.25</em> i <em>25.06</em>.</p><br>
                                <p><strong>NAPOMENA!</strong> U Javi znak "<strong>=</strong>" nema funkciju jednakosti, nego pridruživanja. Na ovom primjeru to znači da se broj 12,25 pridružuje varijabli a.</p><br>
                                <p>Varijable a i b su deklarirane i inicijalizirane proizvoljnim vrijednostima programera, a sukladno tekstu zadatka.</p><br>
                                <p>Svaka instrukcija u Javi mora završiti s <strong>;</strong> čime se označava kraj naredbe.</p>
                            </div>
                        </div>

                        <!-- 6. DodatneVarijable Hotspot Dot -->
                        <div class="hotspot" style="top: 50%; right: 77%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Dodatne Varijable</h4>
                                <p>Za pohranjivanje izračunate vrijednosti površine katastarske čestice, potrebno je deklarirati novu varijablu. Varijabla p definirana je samo deklaracijom prema kojoj se zove <em>p</em> i tipa je podatka double. Varijabla <em>p</em> ne može se inicijalizirati jer vrijednost površine nije unaprijed poznata i ovisi o duljinama stranica katastarske čestice.<br><br>
                                <strong>NAPOMENA!</strong> Varijabla uvijek mora biti deklarirana prije nego se koristi/poziva u kodu.</p>
                            </div>
                        </div>

                        <!-- 7. Operacija Hotspot Dot -->
                        <div class="hotspot" style="top: 60%; right: 80%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Operacija</h4>
                                <p>Računanje površine radi se prema formuli P=a*b.<br>
                                Sve varijable (ulazne i dodatne), deklarirane su prije što znači da su varijable a i b programu poznate, može ih pozvati, a novoizračunata vrijednost se istom logikom može pridružiti i pohraniti u varijablu p.</p>
                            </div>
                        </div>

                        <!-- 8. Ispis Hotspot Dot -->
                        <div class="hotspot" style="top: 70%; right: -5%;">
                            <div class="hotspot--inner" style="background: #fbb300;">
                            </div>
                            <div class="hotspot--content">
                                <h4>Ispis</h4>
                                <p>Ispisivanje izračunate površine radi se pozivanjem metode ispisa.</p>
                                <p><strong>System.out.println</strong><br>
                                <em>System.out.println()</em> je metoda u kojoj se svaki sljedeći rezultat ispisuje u novom retku. Za razliku, <em>System.out.print()</em> sve rezultate ispisuje u istom retku.</p>
                                <p><strong>parametri</strong><br>
                                <p>Parametar metode <em>System.out.println()</em> može se sastojati od doslovnog ispisa i ispisa vrijednosti:</p>
                                <ul><p><strong>navodni znaci</strong><br> 
                                Sve što je zapisano u <strong>""</strong> ispusuje se doslovno, onako kako je zapisano u kodu.<br>
                                <strong>nazivi varijabli</strong><br> 
                                Kada se koriste nazivi varijabli, ispisuje se vrijednost koja se nalazi pohranjena u varijabli, a ne njen naziv.<br>
                                Kombinirani ispis doslovnog teksta i vrijednosti varijabli omogućen je korištenjem operatora <strong>+</strong>
                                </p></ul></p>
                            </div>
                        </div>
                    </div>
                </div>
</details>