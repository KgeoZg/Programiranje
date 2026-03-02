---
layout: default
title: Klase, metode i paketi
nav_order: 8
has_children: true
---

# Klase, metode i paketi
<p align="justify">Osnovna ideja objektno orijentiranih programskih jezika (OOP) je modeliranje stvarnog svijeta objektima kroz njihova stanja i ponašanje. Objekti su osnovna jedinica OOP jezika, a kreiraju se temeljem klasa. Klasa je koncept koji opisuje kategorije pojava iz stvarnog svijeta, primjerice čovjeka, a temeljem jedne klase može se kreirati neograničen broj objekata iste vrste. Klase su korisnički definiran tip podatka, a u Javi se klasificiraju kao složeni tip podatka.</p>
<p align="justify">Klasa opisuje kako bi trebao izgledati objekt (instanca) koji se kreira temeljem klase. Zbog toga, klasu se može smatrati predloškom ili receptom za kreiranje objekata. Svaka klasa sastoji se od dva osnovna dijela, varijabli i metoda. Varijable su atributi (svojstva) klase, kako ta klasa odnosno objekt te klase izgledaju, a metode opisuju što klasa odnosno objekt koji je kreiran temeljem klase može činiti (ponašanje). Kod klase, razlikujemo varijable i metode klase i varijable i metode objekta. Osnovna razlika u njima je da je za korištenje varijabli i metoda objekta potrebno kreirati objekt temeljem klase. Takve varijable i metode se nazivaju nestatički članovi klase. Nasuprot njima, statički članovi klase (varijable i metode klase) ne zahtjevaju kreiranje objekata da bi ih se moglo koristiti. Kreiranje objekata temeljem klase moguće je korištenjem konstruktora.</p>
<p align="justify">Metode opisuju ponašanje objekta, odnosno ono što taj objekt može činiti. Najpoznatiji primjer je specifična <em>main()</em> metoda koja služi za pokretanje programa, odnosno njegovo izvršvanje. Unutar klase moguće je kreirati i korisničke metode. Neovisno o vrsti, sve klase imaju deklaraciju, odnosno formalan zapis kojim je definiran način pristupanja, tip povratne vrijednosti, ime metode, formalni parametri i vrsta metode (statična ili nestatična).</p>
<p align="justify">Paketi označavaju grupu povezanih klasa. Može ih se smatrati mapama u kojima se nalaze datoteke. Korištenje paketa omogućuje bolju organizaciju klasa.</p>
<p align="justify">Objektno orijentirani programski jezici (OOP) - Java organizirani su oko objekata koji objedinjuju podatke i metode, a što u konačnici osigurava modularnost, lako održavanje programa i ponovnu upotrebnu koda.</p>

<p><strong>Po završetku ovih vježbi student će moći:</strong></p>

1. Razumjeti ulogu klasa i objekata u objektno orijentiranoj paradigmi programiranja
2. Razumjeti i znati primijeniti sintaksu Jave za kreiranja objekata temeljem klasa - konstruktora
3. Razumjeti i znati primijeniti metode u Javi
4. Znati koristiti objekte s njihovim varijablama i metodama

<details>
    <summary><strong>Osnovni koncepti</strong></summary><br>
    <strong>Objekt</strong>
    <p style="text-align: justify;">Osnovni element objektno orijentiranih programskih jezika (Jave). Kreira se temeljem predloška, klase, korištenjem konstruktora.<br></p>
    <strong>Klasa</strong>
    <p style="text-align: justify;">Predložak za kreiranje objekata. Pojednostavljen prikaz kategorizacije stvarnog svijeta koji objekte opisuje kroz varijable i metode. Temeljem jedne klase može se kreirati više objekata tipa te klase. Korisnički je tip podatka, a definira se se kao složeni tip podatka u Javi. Svaka klasa može uključivati varijable i metode. </p>
    <strong>Paket</strong>
    <p style="text-align: justify;">Više povezanih klasa objedinjeno je u paket.</p>
    <strong>Metode</strong>
    <p style="text-align: justify;">Element programskog jezika koji opisuje ponašanje. Postoje metode klase (statične) i metode objekta (nestatične). Statične metode u deklaraciji koriste ključnu riječ <em>static</em> koja označava da nije potrebno kreirati objekt tipa te klase kako bi ih se moglo pozvati. Najpoznatiji primjer statične metode je <em>main()</em> metoda koja je preduvjet za pokretanje programa, dakle mora se moći pozvati da bi se uopće mogao kreirati objekt.<br>
    <ul><strong>Metode klase</strong><br>
    Metode klase dostupne za pozivanje/izvršavanje bez prethodnog kreiranja objekta tipa te klase. Označuju se ključnom rječju <em>static</em>.</ul>
    <ul><strong>Metode objekta</strong><br>
    Metode klase vezane uz objekte kojima se može pristupiti samo ako je kreiran objekt tipa te klase. U izvršavanju klasa koristi varijable usko vezane uz stanja objekta (varijable).</ul></p>
    <strong>Konstruktor</strong>
    <p style="text-align: justify;">Element programskog jezika koji omogućuje kreiranje objekta tipa klase. Nosi naziv identičan nazivu klase i piše se na isti način (početnim velikim slovom). Definira kako će se kreirati objekt prema predlošku klase.</p>
</details>

<details>
    <summary><strong>Primjeri riješenih zadataka</strong></summary>
    <p style="text-align: justify;">U radu s klasama i objektima koriste se metode koje mogu biti metode klase i metode objekta. Imaju različitu primjenu, a s obzirom da se u nastavnim materijalima koriste obje vrste, u nastavku je tablično prikazana njihova međusobna usporedba.</p>
        <table class="custom-grid-table">
        <thead>
            <tr>
            <th>Metode klase</th>
            <th>Metode objekta</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Pripada klasi</td>
            <td>Pripada objektu</td>
            </tr>
            <tr>
            <td>Nije potrebno imati objekt tipa klase</td>
            <td>Nužno kreiranje objekta</td>
            </tr>
            <tr>
            <td>Univerzalno za klasu</td>
            <td>Koristi vrijednosti varijabli pojedinog objekta</td>
            </tr>
            <tr>
            <td>Opisuje logiku</td>
            <td>Opisuje ponašanje stvarnog svijeta</td>
            </tr>
        </tbody>
        </table>
        U nastavku je korištenje metoda prikazano na konkretnim primjerima zadataka. Svrha primjera je studentima približiti konceptualne pristupe (kada/kako koristiti) i sintaksu Jave za korištenje klasa, metoda i objekata, a u svrhu lakšeg razumijevanja nastavnog sadržaja. 
        <details>
            <summary><strong>Metode klase</strong></summary>
        <p align="justify"><strong>Zadatak:</strong> Sastaviti dijagram toka i/ili pseudokod za klasu <em><strong>Povrsina</strong></em> koja u metodi <em><strong>main()</strong></em> pomoću tipkovnice učitava vrijednost duljina stranica a i b katastarske čestice pravokutnog oblika i na ekranu monitora ispisuje vrijednost površine katastarske čestice, a koja se izračunava u metodi <em><strong>racunajPovrsinu()</strong></em>.</p>
        <p>Smjernice za razumijevanje zadatka:</p>
        <ul><li>Koristi se jedna klasa, <em>Povrsina</em></li></ul> 
        <ul><li>Klasa <em>Povrsina</em> ima dvije metode: (1) <em>main()</em> i (2) <em>racunajPovrsinu</em> <br>
            <ul><li> unutar metode <em>main()</em>:<br>
                (1) učitavanje duljina stranica a i b, i (2) ispisivanje površine </li></ul>
            <ul><li> unutar metode <em>racunajPovrsinu()</em>:<br>
                (1) računanje površine </li></ul>
        </li></ul>
                <p><strong>Predloženi dijagram toka</strong></p>
                <ul><p><strong>Napomena!</strong> Oznake <em>Povrsina, main(), racunajPovrsinu() i pravokutnici isprekidanog obruba</em> prikazani u sivoj boji nisu sastavni dio dijagrama toka i služe isključivo za razumijevanje prikazanog sadržaja.</p></ul>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 500px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ '/assets/images/17_OgledniZadatak_Dijagram.png' | relative_url}}" alt="Dijagram toka">
                        <!-- 0.1. Klasa Povrsina Hotspot Dot -->
                        <div class="hotspot" style="top: -5%; right: 5%;">
                            <div class="hotspot--inner" style="background: #26fb00;"></div>
                            <div class="hotspot--content">
                                <h4>Klasa <em>Povrsina</em></h4>
                                <p>Klasa <em>Povrsina</em> sastoji se od dvije metode: <em>main()</em> i <em>racunajPovrsina()</em>.</p>
                            </div>
                        </div>
                        <!-- 0.2. Metoda main Hotspot Dot -->
                        <div class="hotspot" style="top: 2%; right: 52%;">
                            <div class="hotspot--inner" style="background: #26fb00;"></div>
                            <div class="hotspot--content">
                                <h4>Metoda <em>main()</em></h4>
                                <p>Metoda <em>main()</em> zadužena je za izvršavanje programa.</p>
                            </div>
                        </div>
                        <!-- 2. Programske poruke Hotspot Dot (Positioned at 30% from top, 47% from right) -->
                        <div class="hotspot" style="top: 25%; right: 61%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Programske poruke</h4>
                                <p>Prema tekstu zadatka, potrebno je uzeti korisničke vrijednosti duljina stranica <em>a</em> i <em>b</em> i izračunati površinu katastarske čestice. Upisivanje njihove vrijednosti sastavni je dio <em>main()</em> metode pa se ispis programske poruke (i korisnički unos) događaju unutar metode <em>main()</em>.</p>
                            </div>
                        </div>
                        <!-- 3. Ulaz Hotspot Dot -->
                        <div class="hotspot" style="top: 38%; right: 65%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ulaz</h4>
                                <p>Po ispisivanju programskih poruka, korisnik unosi vrijednosti duljina stranica katastarske čestice. Te se vrijednosti pohranjuju u varijable naziva <em>a</em> i <em>b</em>.</p>
                            </div>
                        </div>
                        <!-- 4. Metoda Hotspot Dot -->
                        <div class="hotspot" style="top: 50%; right: 56%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Metoda <em>racunajpovrsinu()</em></h4>
                                <p>Nakon što su unesene vrijednosti duljina stranica, potrebno je izračunati površinu pravokutne katastarske čestice. Prema tekstu zadatka, računanje površine radi se unutar metode <em>racunajPovrsinu()</em> klase <em>Povrsina</em>. <br>
                                Metoda <em>racunajPovrsinu()</em> druga je metoda unutar klase <em>Povrsina</em> (uz metodu <em>main()</em>). Ideja ovdje je da se unutar <em>main()</em> metode pozove vanjski blok naredbi koji za nju treba odrediti dio računanja i novoizračunatu vrijednost vratiti natrag, a <em>main()</em> metoda će ju pohraniti u lokalnu varijablu <em>p</em>. Taj vanjski blok naredbi je upravo metoda <em>racunajPovrsinu()</em>, a iz main metode joj se pristupa pozivanjem njenog imena i dodjeljivanjem parametara <em>a</em> i <em>a</em>. Parametri metode će u ovom slučaju biti konkretne vrijednosti koje će metoda koristiti za računanje površine.<br>
                                <em>Main()</em> metoda služi za izvršavanje programa, a mogućnost pozivanja vanjskih metoda da za nju odrade dio računanja omogućuje modularnost koda i ponovnu upotrebljivost kreiranih instrukcija. Time program postaje robustan i lak za održavanje (promjene je potrebno napraviti na samo jednom mjestu u kodu).  </p>
                            </div>
                        </div>
                        <!-- 5. Ispis Hotspot Dot -->
                        <div class="hotspot" style="top: 63%; right: 65%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ispis</h4>
                                <p>Prema tekstu zadatka, <em>main()</em> metoda zadužena je za (1) unos korisničkih podataka i (2) ispis vrijednosti površine. Kako je izračunata površina u prethodnom koraku pohranjena u lokalnu varijablu programa (<em>p</em>), dostupna je za ispis unutar programa. U ovom koraku se dakle ispisuje konačna vrijednost površine katastarske čestice koja predstavlja konačan rezultat zadatka.  </p>
                            </div>
                        </div>
                        <!-- 6. Metoda racunajPovrsinu Hotspot Dot -->
                        <div class="hotspot" style="top: 12%; right: 14%;">
                            <div class="hotspot--inner" style="background: #26fb00;"></div>
                            <div class="hotspot--content">
                                <h4>Metoda <em>racunajPovrsinu()</em></h4>
                                <p>Metoda <em>racunajPovrsinu()</em> druga je metoda klase <em>Povrsina</em>. Pripadajući blok naredbi definiran je izvan main() metode i po potrebi se poziva. To znači da se instrukcije mogu zapisati jednom, a pozivati kad god u programu postoji potreba računanja površine pravokutnika.</p>
                            </div>
                        </div>
                        <!-- 7. Ulaz metoda racunajPovrsinu Hotspot Dot -->
                        <div class="hotspot" style="top: 27%; right: 16%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ulaz metoda <em>racunajPovrsinu()</em></h4>
                                <p>Da bi metoda u potpunosti ispunila svoju svrhu, tj. izračunala vrijednost površine u ovisnosti o korisnički definiranim vrijednostima (koje su proizvoljne i promjenjive), deklaracija metode podrazumijeva dva formalna parametra. To znači da kada se metoda bude pozivala, moraju joj se proslijediti i parametri s kojima će računati. Parametri se upisuju u zagradu točno određenim redoslijedom, onako kako je definirano deklaracijom metode. <br>
                                U deklaraciji metode koriste se univerzalne oznake formalnih parametara, primjerice <em>x</em> i <em>y</em>. U ovom konkretnom slučaju, a prema strukturi <em>main()</em> metode, varijabla <em>a</em> predstavljat će parametar <em>x</em>, dok će varijabla <em>b</em> predstavljat parametar <em>y</em>. </p>
                            </div>
                        </div>
                        <!-- 8. Racunanje povrsine Hotspot Dot -->
                        <div class="hotspot" style="top: 39%; right: 16%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Racunanje povrsine</h4>
                                <p>Smisao metode <em>racunajPovrsinu()</em> je da na temelju vrijednosti parametara, koje unutar metode postaju varijable, izračuna vrijednost površine. U ovom koraku, dakle, definirano je kako će se površina računati kao <em>p=x*y</em>, da rezultat pohraniti u varijablu <em>p</em>. S obzirom kojim redoslijedom su parametri zapisani u pozivanju metode, i kako su oni definirani deklaracijom metode, metoda točno zna koji parametar predstavlja <em>x</em>, a koji <em>y</em>.</p>
                            </div>
                        </div>
                        <!-- 8. Povrat Korak Hotspot Dot -->
                        <div class="hotspot" style="top: 51%; right: 16%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Povratak vrijednosti</h4>
                                <p>Metoda <em>racunajPovrsinu()</em> definirana je tako da za metodu <em>main()</em> odradi dio računanja. S obzirom da je u tekstu zadatka zadano da se računanje površine radi u metodi <em>racunajPovrsinu()</em>, a da se ispis rezultata događa u metodi <em>main()</em>, metoda <em>racunajPovrsinu()</em> mora na mjesto odakle je pozvana vratiti vrijednost površine jednom kad ju izračuna. Kako bi se to ostvarilo, metoda <em>racunajPovrsinu()</em> mora imati definiran mehanizam povrata vrijednosti.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p><strong>Predloženi pseudokod</strong></p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 280px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ '/assets/images/17_OgledniZadatak_Pseudokod.png' | relative_url}}" alt="Dijagram toka">
                    </div>
                </div>
            <p><strong>Predloženi kod u Javi</strong></p>
            <div class="hotspot-wrapper">
                <div class="hotspot-container" style="width: 650px; margin: 0 auto; display: inline-block;">
                    <!-- 1. Your Main Image -->
                        <img src="{{ '/assets/images/17_OgledniZadatak_Kod.png' | relative_url}}" alt="Dijagram toka">
                    <!-- 2. Pozivanje metode Hotspot Dot (Positioned at 2.5% from top, 2% from right) -->
                    <div class="hotspot" style="top: 52%; right: 52%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Pozivanje vanjske metode</h4>
                            <p>Sintaksa ove linije koda sastavljena je od nekoliko dijelova. Idući zdesna na lijevo interpretacija je sljedeća:<br>
                            Pozivanje vanjske metode unutar <em>main()</em> metode radi se upisivanjem naziva metode i prosljeđivanjem parametara metode. Metoda se u ovom slučaju zove <em>racunajPovrsinu()</em>, a parametri su korisničke vrijednosti duljina stranica pravokutnika pohranjeni u varijable <em>a</em> i <em>b</em>.<br>
                            Izvršavanjem programa, <em>Java Virtual Machine</em> nailazi na oznaku <em>racunajPovrsinu()</em> i pregledava gdje se u kodu cijele klase nalazi isti naziv metode. Jednom kad ga pronađe, pročita definiciju metode te argumente iz zagrade (<em>a</em> i <em>b</em>) proslijedi kao parametre metode. Izvršavanje programa tada staje, i nastavlja se jednom kad dobije povratnu vrijednost iz metode <em>racunajPovrsinu()</em>.<br>
                            Vrijednost koju je vratila metoda <em>racunajPovrsinu()</em> pohranjuje se u varijablu <em>p</em> koja je tipa podatka double. </p>
                        </div>
                    </div>
                    <!-- 3. Metoda racunajPovrsinu Hotspot Dot -->
                    <div class="hotspot" style="top: 70%; right: 24%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Metoda <em>racunajPovrsinu()</em></h4>
                            <p>Deklaracija metode sastavljena je od nekoliko ključnih riječi:<br>
                            <em><strong>public</strong></em><br>
                            Ključna riječ <em>public</em> u deklaraciji metode označava da je metoda javno dostupna, odnosno da je dostupna za pozivanje i izvan klase u kojoj se nalazi.<br>
                            <em><strong>static</strong></em><br>
                            <em>Static</em> označava da za pristupanje metodi nije potreban objekt, odnosno da se metodi može pristupiti i bez kreiranja objekta. Konkretnije, <em>static</em> označava da se radi o metodi klase.<br>
                            <em><strong>double</strong></em><br>
                            <em>Double</em> je tip povratne vrijednosti metode. To je tip podatka koji će se vratiti na mjesto odakle je metoda pozvana. U ovom slučaju se očekuje da će rezultat množenja biti decimalni broj pa je zbog toga tip povratne vrijednosti <em>double</em>. Svaka metoda može imati samo jednu povratnu vrijednost.<br>
                            <em><strong>racunajPovrsinu()</strong></em><br>
                            <em>racunajPovrsinu()</em> je naziv metode, odnosno kako se ta metoda poziva. Vrijedi pravilo da naziv metode uvijek započinje malim slovom.<br>
                            <em><strong>double x, double y</strong></em><br>
                            <em>x</em> i <em>y</em> su parametri metode. Metoda može imati više parametara, a u ovom slučaju su definirana dva, <em>x</em> i <em>y</em>. Bitan je poredak, odnosno kada se metoda poziva, prvi proslijeđeni parametar bit će dodijeljen argumentu <em>x</em>, a drugi argumentu <em>y</em>. Svaki parametar mora biti definiran tipom podatka što je u ovom slučaju za oba parametra <em>double</em>.<br>
                            <strong>Važno!</strong> Tip podatka varijable koji se prosljeđuje metodi kao parametar mora biti usklađen s tipom podatka parametra definiranim u deklaraciji metode. </p>
                        </div>
                    </div>
                    <!-- 3. Racunanje povrsine metode Hotspot Dot (Positioned at 2.5% from top, 2% from right) -->
                    <div class="hotspot" style="top: 77%; right: 74%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Racunanje povrsine</h4>
                            <p>Površina pravokutnika računa se po formuli p=x*y. <em>x</em> i <em>x</em> su nedvosmisleno definirani pa metoda zna koje vrijedosti koristiti. Izračunata vrijednost se pohranjuje u varijablu <em>p</em> koja je tipa podatka double. S obzirom da je ovo vrijednost koja se treba vratiti u <em>main()</em> metodu, tip podatka varijable <em>p</em> mora se podudarati s tipom povratne vrijednosti metode (prema deklaraciji metode).<br>
                            <strong>Napomena:</strong> Varijabla za rezultat može imati bilo koji naziv, tj. oznaka <em>p</em> nije uvjetovana time što se u metodi <em>main()</em> tako označava varijabla za površinu. Varijable su definirane lokalno unutar metoda i među njima ne postoji poveznica osim one koju joj mi dodijelimo.</p>
                        </div>
                    </div>
                    <!-- 4. Povratna vrijednost Hotspot Dot (Positioned at 2.5% from top, 2% from right) -->
                    <div class="hotspot" style="top: 83%; right: 82%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Povratna vrijednost</h4>
                            <p>Prosljeđivanje (povratak) izračunate vrijednosti natrag na mjesto gdje je metoda pozvana postiže se korištenjem ključne riječi <em>return</em> s nazivom varijable čija se vrijednost šalje. <em>Return</em> će u ovom slučaju u metodu <em>main()</em> vratiti broj pohranjen u varijablu <em>p</em> i, prema kodu u <em>main()</em> metodi, pohraniti ga u odgovarajuću varijablu programa. </p>
                        </div>
                    </div>
                </div>
            </div>
            </details>
            <details>
            <summary><strong>Metode objekta</strong></summary>
            <p align="justify"><strong>Zadatak:</strong> Sastaviti dijagram toka i/ili pseudokod za klasu <em><strong>Povrsina</strong></em> koja u metodi <em><strong>main()</strong></em> pomoću tipkovnice učitava vrijednost duljina stranica a i b katastarske čestice pravokutnog oblika, kreira objekt tipa klase <em><strong>Cestica</strong></em> i na ekranu monitora ispisuje vrijednost površine katastarske čestice. Površina katastarske čestice računa se nestatičkom metodom <em><strong>racunajPovrsinu()</strong></em> klase <em><strong>Cestica</strong></em>.</p>
        <p>Smjernice za razumijevanje zadatka:</p>
        <ul><li>Koriste se dvije klase, <em>Povrsina</em> i <em>Cestica</em> </li></ul>
        <ul><li>Klasa <em>Cestica</em> ima jednu, nestatičnu, metodu, <em>racunajPovrsinu()</em><br>
            <ul><li> nestatična metoda <em>racunajPovrsinu()</em>:<br>
                računa površinu katastarske čestice </li></ul>
            <ul><li> nestatična metoda <em>racunajPovrsinu()</em> zahtijeva objekt (instancu) tipa klase <em>Cestica</em>:<br>
                potreban konstruktor za kreiranje objekta </li></ul>
        </li></ul>
        <ul><li>Klasa <em>Povrsina</em> ima jednu metodu, <em>main()</em><br>
            <ul><li> unutar metode <em>main()</em>:<br>
                (1) učitavanje duljina stranica a i b, (2) kreiranje objekta tipa klase <em>Cestica</em> i (3) ispisivanje površine katastarske čestice </li></ul>
        </li></ul>
                <p><strong>Predloženi dijagram toka</strong></p>
                <ul><p><strong>Napomena!</strong> Oznake <em>Povrsina, main(), racunajPovrsinu() i pravokutnici isprekidanog obruba</em> prikazane u sivoj boji nisu sastavni dio dijagrama toka i služe isključivo za razumijevanje prikazanog sadržaja.</p></ul>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 350px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ '/assets/images/17_OgledniZadatak_Dijagram_2.png' | relative_url}}" alt="Dijagram toka">
                        <!-- 0.1. Klasa Povrsina Hotspot Dot (Positioned at 30% from top, 47% from right) -->
                        <div class="hotspot" style="top: -3%; right: 15%;">
                            <div class="hotspot--inner" style="background: #26fb00;"></div>
                            <div class="hotspot--content">
                                <h4>Klasa <em>Povrsina</em></h4>
                                <p>Prema tekstu zadatka, klasa <em>Povrsina</em> sastoji se od jedne metode, metode <em>main()</em>.</p>
                            </div>
                        </div>
                        <!-- 0.2. Metoda main() Hotspot Dot (Positioned at 30% from top, 47% from right) -->
                        <div class="hotspot" style="top: 8%; right: 20%;">
                            <div class="hotspot--inner" style="background: #26fb00;"></div>
                            <div class="hotspot--content">
                                <h4>Metoda <em>main()</em></h4>
                                <p>Metoda <em>main()</em> izvršna je metoda koja pokreće program.</p>
                            </div>
                        </div>
                        <!-- 2. Programska poruka Hotspot Dot (Positioned at 30% from top, 47% from right) -->
                        <div class="hotspot" style="top: 12.5%; right: 40%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Programska poruka</h4>
                                <p>U klasi <em>Povrsina</em> nalazi se <em>main()</em> metoda koja počinje izvršavanje programa. Nakon pokretanja, korisniku se prikazuju programske poruke koje od korisnika traži unos duljina stranica <em>a</em> i <em>b</em>.</p>
                            </div>
                        </div>
                        <!-- 3. Ulazni podaci Hotspot Dot -->
                        <div class="hotspot" style="top: 23%; right: 39%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ulazni podaci</h4>
                                <p>Nakon što se ispišu programske poruke, korisnik redom unosi vrijednosti duljina katastarske čestice, a te vrijednosti se pohranjuju u predviđene varijable <em>a</em> i <em>b</em>.</p>
                            </div>
                        </div>
                        <!-- 4. Objekt cestica1 Hotspot Dot -->
                        <div class="hotspot" style="top: 30%; right: 39%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Objekt <em>cestica1</em></h4>
                                <p>Prema tekstu zadatka, unutar <em>main()</em> metode potrebno je kreirati objekt tipa klase <em>Cestica</em> kojem će se računati površina. Objekt <em>cestica1</em> radi se prema predlošku klase <em>Cestica</em>, a temeljem vrijednosti duljina stranica u varijablama <em>a</em> i <em>b</em>. Kad se kreira objekt <em>cestica1</em>, moći će se pristupiti njegovoj metodi <em>racunajPovrsinu()</em> koja računa površinu pravokutnika. Dakle, ideja je kreirati objekt temeljem klase <em>Cestica</em>, pozvati njegovu metodu <em>racunajPovrsinu()</em> koja će izračunati površinu i rezultat vratiti natrag u metodu <em>main()</em>.<br>
                                Pozivanje vanjskih linija koda u dijagramu toka označava se dvostukim pravokutnikom. </p>
                            </div>
                        </div>
                        <!-- 5. Ispis Hotspot Dot -->
                        <div class="hotspot" style="top: 37%; right: 36%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ispis</h4>
                                <p>Prema tekstu zadatka, u metodi <em>main()</em> klase <em>Povrsina</em> ispisuje se vrijednost površine izračunate u metodi <em>racunajPovrsinu()</em> objekta <em>cestica1</em>. Pozivanje metode <em>racunajPovrsinu()</em> dodano je direktno u ispis rezultata zbog praktičnosti koda. Druga mogućnost je pohranjivanje rezultata metode <em>racunajPovrsinu()</em> u lokalnu varijablu klase <em>Povrsina</em> te ispis njenim pozivanjem. Takva mogućnost je prikladna kad se s iznosom površine trebaju raditi daljnje operacije, što u ovom primjeru nije slučaj.</p>
                            </div>
                        </div>
                        <!-- 6.0 Konstruktor Hotspot Dot -->
                        <div class="hotspot" style="top: 60%; right: 8%;">
                            <div class="hotspot--inner" style="background: #26fb00;"></div>
                            <div class="hotspot--content">
                                <h4>Klasa <em>Cestica</em></h4>
                                <p>Klasa <em>Cestica</em> druga je klasa zahtijevana tekstom zadatka. Ona se sastoji od dva dijela, konstruktora <em>Cestica()</em> i metode <em>racunajPovrsinu()</em>. Svaka klasa prema kojoj će se kreirati objekt mora sadržavati konstruktor. U ovom slučaju, klasa <em>Cestica</em> sastoji se  </p>
                            </div>
                        </div>
                        <!-- 6.1 Konstruktor Hotspot Dot -->
                        <div class="hotspot" style="top: 67%; right: 62%;">
                            <div class="hotspot--inner" style="background: #26fb00;"></div>
                            <div class="hotspot--content">
                                <h4>Konstruktor <em>Cestica()</em></h4>
                                <p>Svaka klasa prema kojoj će se kreirati objekt mora sadržavati konstruktor. Prilikom kreiranja novog objekta, konstruktor popunjava varijable klase i tako stvara objekt. U ovom slučaju, klasa <em>Cestica</em> sastoji se od parametarskog konstruktora <em>Cestica()</em>.</p>
                            </div>
                        </div>
                        <!-- 6. Konstruktor Hotspot Dot -->
                        <div class="hotspot" style="top: 75%; right: 63%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Parametri konstruktora <em>Cestica()</em></h4>
                                <p>U trenutku kada se kreira objekt <em>cestica1</em> temeljem klase <em>Cestica</em>, poziva se konstruktor klase koji definira kako će se predložak klase popunjavati i stvoriti objekt tipa te klase. Konstruktor <em>Cestica()</em> je parametarski konstruktor što znači da kreira objekt temeljem parametara koje mu daje korisnik. Ti parametri predstavljaju ulaz u blok instrukcija konstruktora.</p>
                            </div>
                        </div>
                        <!-- 7. Tijelo konstruktora Hotspot Dot -->
                        <div class="hotspot" style="top: 82%; right: 63%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Konstruktor</h4>
                                <p>Kako bi se kreirao objekt <em>cestica1</em>, konstruktor traži dva parametra, <em>x</em> i <em>y</em>, i pohranjuje ih u lokalne varijable klase, <em>a</em> i <em>b</em> . Drugim riječima, konstruktor uzima vrijednosti koje mu je dao korisnik, pohranjuje ih u točno određene varijable klase i na taj način stvara objekt.</p>
                            </div>
                        </div>
                        <!-- 7.1 Metoda Hotspot Dot -->
                        <div class="hotspot" style="top: 67%; right: 20%;">
                            <div class="hotspot--inner" style="background: #26fb00;"></div>
                            <div class="hotspot--content">
                                <h4>Metoda <em>racunajPovrsinu()</em></h4>
                                <p>Metoda <em>racunajPovrsinu()</em> je definirana kao metoda objekta. Uzima vrijednosti koje su pohranjene u objektu, duljine stranica, i temeljem njih računa površinu.</p>
                            </div>
                        </div>
                        <!-- 8. Ulaz Hotspot Dot -->
                        <div class="hotspot" style="top: 75%; right: 15%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Ulaz</h4>
                                <p>Kao i svaka, metoda <em>racunajPovrsinu()</em> koristi ulazne podatke za računanje. Za razliku od dosad, metoda <em>racunajPovrsinu()</em> ne traži da joj se eksplicitno definiraju parametri, već ih ona povlači iz objekta. Drugim riječima, prilikom kreiranja objekta <em>cestica1</em> vrijednosti koje su prosljeđene konstruktoru su se zapisale u sam objekt. Pozivanje metode objekta u tom slučaju ima pristup tim vrijednostima i nije ih potrebno ponovno prosljeđivati jednom kada se metoda poziva.</p>
                            </div>
                        </div>
                        <!-- 9. Računanje površine Hotspot Dot -->
                        <div class="hotspot" style="top: 82%; right: 16%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Računanje površine</h4>
                                <p>Svrha metode je računanje površine pravokutne katastarske čestice stoga se u ovom koraku zapisuje formula po kojoj se kalkulacija izvodi, <em>p=a*b</em>.</p>
                            </div>
                        </div>
                        <!-- 10. Povrat vrijednosti Hotspot Dot -->
                        <div class="hotspot" style="top: 89%; right: 16%;">
                            <div class="hotspot--inner" style="background: #fbb300;"></div>
                            <div class="hotspot--content">
                                <h4>Povratak vrijednosti</h4>
                                <p>Svaka metoda ima dvije mogućnosti za povratni tip podatka: (1) <em>void</em> koji ne vraća rezultat na mjesto odakle je metoda pozvana (koristi se za direktan ispis iz metode) i (2) <em>tip_povratne_vrijednosti</em> koji može biti bilo koji tip podatka. Kako je tekstom zadatka definirano da se ispis rezultata radi unutar metode <em>main()</em> klase <em>Povrsina</em>, tip povratne vrijednosti u ovom slučaju ne smije biti void. Zbog toga, metoda <em>racunajPovrsinu()</em> mora uključivati instrukciju povrata vrijednost, a to se postiže ključnom rječju "vrati" i nazivom varijable iz koje se vrijednost prosljeđuje. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p><strong>Predloženi pseudokod</strong></p>
                <div class="hotspot-wrapper">
                    <div class="hotspot-container" style="width: 350px; margin: 0 auto; display: inline-block;">
                        <!-- 1. Your Main Image -->
                            <img src="{{ '/assets/images/17_OgledniZadatak_Pseudokod_2.png' | relative_url}}" alt="Dijagram toka">
                    </div>
                </div>
            <p><strong>Predloženi kod u Javi</strong></p>
            <div class="hotspot-wrapper">
                <div class="hotspot-container" style=
                "width: 580px; margin: 0 auto; display: inline-block;">
                    <!-- 1. Your Main Image -->
                        <img src="{{ '/assets/images/17_OgledniZadatak_Kod_2.png' | relative_url}}" alt="Dijagram toka">
                    <!-- 2. Klasa Povrsina Hotspot Dot -->
                    <div class="hotspot" style="top: 3%; right: 71%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Klasa <em>Povrsina</em></h4>
                            <p>Klasa <em>Povrsina</em> opisana je blokom naredbi koji u sebi sadrži <em>main()</em> metodu. To znači da je klasa <em>Povrsina</em> izvršna klasa i da se izvršava ono što je zapisano u tom bloku instrukcija.</p>
                        </div>
                    </div>
                    <!-- 3. Objekt tipa klase Cestica polja Hotspot Dot -->
                    <div class="hotspot" style="top: 34%; right: 48%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Objekt <em>cestica1</em></h4>
                            <p>Kreiranje objekta <em>cestica1</em> temeljem klase <em>Cestica</em> radi se kombinacijom ključne riječi <em>new</em> te pozivanjem konstruktora (istog naziva kao i klasa) s parametarima. U ovom primjeru to je označeno kao <em>new Cestica(a,b)</em>. Ključna riječ <em>new</em> u sintaksi označava da konstruktor <em>Cestica()</em> kreira novi objekt temeljem zadanih parametara koji se potom pohranjuje u varijablu (objekt) <em>cestica1</em> koji je tipa klase <em>Cestica</em>.<br>
                            <strong>Važno!</strong> Naziv pozvanog konstruktora mora odgovarati tipu podatka varijable (objekta).</p>
                        </div>
                    </div>
                    <!-- 4. Klasa Cestica Hotspot Dot -->
                    <div class="hotspot" style="top: 53.5%; right: 72%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Klasa <em>Cestica</em></h4>
                            <p>Klasa <em>Cestica</em> je druga klasa koja u sebi ne sadrži metodu <em>main()</em> i služi za kreiranje objekta <em>cestica1</em> i računanje njegove površine metodom <em>racunajPovrsinu()</em>. S obzirom da ne sadrži metodu <em>main()</em>, u izvršavanju programa izvršit će se samo oni blokovi instrukcija koji su pozvani iz <em>main()</em> metode klase <em>Povrsina</em> i to prema redoslijedu kako su tamo zapisani.</p>
                        </div>
                    </div>
                    <!-- 5. Lokalne varijable Hotspot Dot -->
                    <div class="hotspot" style="top: 61%; right: 71%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Lokalne varijable <em>a</em> i <em>b</em></h4>
                            <p>Prilikom kreiranja objekta, pravilo je da se vrijednosti s kojima je objekt kreiran i pohrane unutar samog objekta. U ovom slučaju to je postignuto deklariranjem varijabli <em>a</em> i <em>b</em> koje su tipa podatka <em>double</em>, a po identifikatoru pristupa <em>private</em>. <em>Private</em> znači da su varijable dostupne samo unutar klase unutar koje se nalaze (<em>Cestica</em>), odnosno na taj način osiguravamo da se one ne mogu pozivati iz drugih klasa i mijenjati. </p>
                        </div>
                    </div>
                    <!-- 6. Konstruktor Hotspot Dot -->
                    <div class="hotspot" style="top: 70%; right: 55%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Konstruktor <em>Cestica</em></h4>
                            <p>S obzirom da će se objekt temeljem klase kreirati korištenjem korisničkih vrijednosti, nužno je deklarirati parametre konstruktora. U ovom primjeru, konstruktor ima dva parametra, <em>a</em> i <em>b</em> koji su tipa podatka <em>double</em>. U definiciji konstruktora nužno je deklarirati tip podatka parametara kako bi konstruktor znao koje vrijednosti može primiti za kreiranje objekta. To sprječava da se kreira cestica koja za duljinu stranice <em>a</em> ima vrijednost "c".<br>
                            Kako bi konstruktor znao kako kreirati objekt temeljem klase, unutar bloka instrukcija definira se poveznica između varijabli klase i parametara konstruktora. U ovom primjeru vrijednost parametra <em>x</em> će se pohraniti u lokalnu varijablu <em>a</em>, a vrijednost parametra <em>y</em> u varijablu <em>b</em>. Na taj način parametri za kreiranje objekta bit će pohranjeni unutar objekta, odnosno u njegovim varijablama em>a</em> i <em>b</em>. </p>
                        </div>
                    </div>
                    <!-- 7. Metoda racunajPovrsinu Hotspot Dot -->
                    <div class="hotspot" style="top: 81%; right: 53%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Metoda <em>racunajPovrsinu()</em></h4>
                            <p>Metoda <em>racunajPovrsinu()</em> definirana je na sljedeći način:<br>
                            <strong>public</strong><br>
                            Metoda kojoj je identifikator pristupa <em>public</em> može biti pozvana iz neke druge klase. U ovom zadatku to je jako bitno jer je ideja da se metodi pristupa iz <em>main()</em> metode koja je dio klase <em>Povrsina</em>. Ukoliko bi identifikator pristupa metodi bio <em>private</em>, program se ne bi mogao izvršiti.<br>
                            <strong>double</strong><br>
                            <em>double</em> označava tip povratne vrijednosti metode, odnosno koji tip podatka će biti rezultat koji se prosljeđuje natrag na mjesto otkud je metoda pozvana. S obzirom da se površina računa kao <em>p=a*b</em> pri čemu su vrijednosti <em>a</em> i <em>b</em> proizvoljni brojevi, moramo se osigurati da će metoda u svakom slučaju dati točan rezultat. Primjerice, da je ti povratne vrijednosti <em>int</em> metoda bi proslijedila netočnu vrijednost površine.<br>
                            <strong>racunajPovrsinu()</strong><br>
                            <em>racunajPovrsinu</em> je naziv metode, odnosno kako će ta metoda biti pozivana u programu.<br>
                            <strong>parametri</strong><br>
                            Ova metoda nema formalnih parametara jer koristi vrijednosti koje su pohranjene u varijablama objekta. Zbog toga ih nije potrebno ponovno prosljeđivati prilikom pozivanja metode, odnosno metoda zna gdje te vrijednosti pronaći.<br>
                            <strong>Važno!</strong> Definicija metode ne smije uključivati riječ <em>static</em> jer bi to označavalo da se radi o metodi klase, odnosno da nije potrebno kreirati objekt tipa klase da bi joj se pristupilo, a to je u suprotnosti s tekstom zadatka.</p>
                        </div>
                    </div>
                    <!-- 8. Povrsina racunajPovrsinu Hotspot Dot -->
                    <div class="hotspot" style="top: 84.5%; right: 73%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Racunanje površine</h4>
                            <p>S obzirom da je katastarska čestica pravokutnog oblika, površina se računa po formuli <em>a*b</em>, a vrijednost se pohranjuje u varijablu <em>p</em> tipa podatka <em>double</em>.</p>
                        </div>
                    </div>
                    <!-- 9. Povratna vrijednost Hotspot Dot -->
                    <div class="hotspot" style="top: 88.5%; right: 79%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Povratna vrijednost</h4>
                            <p>Tip povratne vrijednosti metode je <em>double</em> što znači da metoda na mjesto gdje je pozvana mora vratiti neku vrijednost, tj. program očekuje da metoda vrati rezultat tipa podatka <em>double</em>. Prosljeđivanje povratne vrijednosti natrag u <em>main()</em> metodu radi se ključnom rječju <em>return</em> te nazivom varijable u koju je ta vrijednost pohranjena.</p>
                        </div>
                    </div>
                     <!-- 10. Ispis rezultata Hotspot Dot -->
                    <div class="hotspot" style="top: 38%; right: 12%;">
                        <div class="hotspot--inner" style="background: #fbb300;"></div>
                        <div class="hotspot--content">
                            <h4>Ispis rezultata</h4>
                            <p>Prema tekstu zadatka, <em>main()</em> metoda učitava korisničke podatke, kreira objekt tipa klase <em>Cestica</em> i ispisuje vrijednost površine izračunate u klasi <em>Cestica</em>. U ovom primjeru, metoda <em>racunajPovrsinu()</em> objekta <em>cestica1</em> pozvana je direktno u metodu ispisa korištenjem <em>cestica1.racunajPovrsinu()</em>. To u izvršavanju programa znači: metoda ispisa <em>System.out.println()</em> poziva metodu <em>racunajPovrsinu()</em> objekta <em>cestica1</em> koja računa površinu i natrag šalje izračunatu vrijednost. U ispisu će se ta vrijednost prikazati kao broj umjesto <em>"cestica1.racunajPovrsinu()"</em>, uz doslovan ispis "Površina iznosi".<br>
                            Vrijednost površine mogla se pohraniti u lokalnu varijablu klase <em>Povrsina</em> te potom pozvati u metodu ispisa, ali s obzirom da se s površinom ne rade nikakva daljnja računanja, kod bi nepotrebno bio opterećen viškom varijabli.</p>
                        </div>
                    </div>
                </div>
            </div>
            </details>
            
</details>