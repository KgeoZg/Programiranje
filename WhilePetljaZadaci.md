---
layout: default
title: Zadatci za vježbu 5
nav_order: 1
parent: Petlja while
print: true
---
# Zadatci za vježbu<br>
<strong>Zadatak 1</strong><br>
<p align="justify">Sastaviti dijagram toka ili pseudokôd te kôd u Javi za klasu koja uzima cjelobrojnu vrijednost kuta koja je veća od 2000° te ju normalizira na interval 0°-360°. Potrebno je ispisati normaliziranu vrijednost kuta.
<br>
<div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-1" class="acc-state">
  <input type="checkbox" id="acc-2" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-1" class="btn btn-blue">Smjernice</label>
    <label for="acc-2" class="btn btn-blue">Rješenje</label>
  </div>

  <div id="pane-1" class="acc-panel" markdown="1">
### Smjernice
1. Deklarirati i inicijalizirati varijablu za vrijednost kuta
2. Definirati <em>while</em> petlju s prikladnim uvjetom nastavka
3. Sastaviti tijelo petlje (blok naredbi) za normalizaciju vrijednosti kuta
4. Ispisati normaliziranu vrijednost kuta
  </div>

  <div id="pane-2" class="acc-panel" markdown="1">
### Rješenje
Za vrijednost kuta 2563°, normalizirana vrijednost kuta iznosi 43°.
  </div>
</div>
<br>
<strong>Zadatak 2</strong><br>
<p align="justify">Ako znamo da je izmjerena duljina opterećena pogreškom σ=±5mm, i ako znamo da višestruko mjerenje iste dužine može umanjiti tu pogrešku prema formuli: $$ σ_{sr} = \frac{σ}{\sqrt{n}} $$ potrebno je odrediti koliko puta se dužina mora izmjeriti kako bi joj duljina bila određena s točnošću manjom od ±2mm ($ σ_{sr} $ < 2mm). Sastaviti dijagram toka ili pseudokôd te kôd u Javi za klasu koja računa broj potrebnih mjerenja duljine kako bi se zadovoljila zahtijevana točnost izračunate duljine te ispisuje pripadnu pogrešku.
<br>
<div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-3" class="acc-state">
  <input type="checkbox" id="acc-4" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-3" class="btn btn-blue">Smjernice</label>
    <label for="acc-4" class="btn btn-blue">Rješenje</label>
  </div>

  <div id="pane-3" class="acc-panel" markdown="1">
### Smjernice
1. Deklarirati i inicijalizirati poznate varijable: voditi računa o tipu podataka varijabli
2. Postaviti prikladan uvjet nastavka <em>while</em> petlje tako da se osigura ponovljeno izvršavanje petlje
3. Razmisliti što petlja mora činiti kako bi se u sljedećem koraku izvršavanja dobila nova vrijednost pogreške mjerenja. Voditi računa kako poredak linija koda utječe na izvršavanje petlje
4. Ispisati minimalni broj mjerenja i pripadnu pogrešku izmjerene duljine
  </div>

  <div id="pane-4" class="acc-panel" markdown="1">
### Rješenje
Minimalni broj mjerenja je 7, pogreška mjerenja iznosi 1.889822365046136.
  </div>
</div>
<br>
<strong>Zadatak 3</strong><br>
<p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja izračunava vrijednost zbroja $$ y=1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \frac{1}{9} - .. $$
sa zadanom točnošću te koliko je članova potrebno uzeti za postizanje te točnosti.
Zadatak treba riješiti korištenjem petlje:<br>
<ul>a) while</ul>
<ul>b) do/while</ul></p>
<div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-5" class="acc-state">
  <input type="checkbox" id="acc-6" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-5" class="btn btn-blue">Smjernice</label>
    <label for="acc-6" class="btn btn-blue">Rješenje</label>
  </div>

  <div id="pane-5" class="acc-panel" markdown="1">
### Smjernice
1. Duljina niza nije uvjetovana brojem članova već točnošću koja se treba zadovoljiti – dodaje se član po član dok se ne ostvari zadana točnosti
2. Prepoznati obrazac niza i povezati ga s koracima u petlji
3. Voditi računa da će se u do/while petlji ponavljanje izvršiti jednom prije provjeravanja uvjeta
  </div>

  <div id="pane-6" class="acc-panel" markdown="1">
### Rješenje
1. Za postizanje točnosti od 0,01 potrebno je uzeti 51 član i u tom je slučaju y =
0.7902996532467627
2. Za postizanje točnosti od 0,001 potrebno je uzeti 501 član i u tom je slučaju y=
0.7858971648964472
  </div>
</div>
<br>
<strong>Zadatak 4</strong><br>
<p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja pomoću zadane vrijednosti argumenta x sa svojstvom ∣x∣ < ∞ izračunava vrijednost funkcije y $$ y=1 + \frac{x}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} $$
s točnošću na 10^−7, tj. da zbroj preostalih članova reda koji nisu uzeti u obzir ne utječu na 7. decimalu, te određuje koliko je članova potrebno uzeti za postizanje zadane točnosti.</p>
<div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-7" class="acc-state">
  <input type="checkbox" id="acc-8" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-7" class="btn btn-blue">Smjernice</label>
    <label for="acc-8" class="btn btn-blue">Rješenje</label>
  </div>

  <div id="pane-7" class="acc-panel" markdown="1">
### Smjernice
1. Duljina niza nije uvjetovana brojem članova već točnošću koja se treba zadovoljiti – dodaje se član po član dok se ne ostvari zadana točnosti
2. Prepoznati obrazac niza i povezati ga s koracima u petlji
  </div>

  <div id="pane-8" class="acc-panel" markdown="1">
### Rješenje
Uz vrijednost x = 0,5, za postizanje točnosti 10-7 potrebno je u obzir uzeti 9 članova i u tom je slučaju y = 1,6487212650359622.
  </div>
</div>
<br>
<details>
    <br>
    <summary><strong>Dodatni zadaci</strong></summary>
    <strong>Zadatak 5</strong>
    <p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja izračunava vrijednost zbroja $$ y = \sum\limits_{n=0}^{n} (-1)^n (\frac {1}{2n+1}) $$ sa zadanom točnošću te koliko je članova potrebno uzeti za postizanje te točnosti.<br>
    Zadatak treba riješiti korištenjem petlje:
    <ul>a) while</ul>
    <ul>b) do/while</ul>
    </p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-9" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-9" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-9" class="acc-panel" markdown="1">
### Rješenje
1. Za postizanje točnosti od 0,01 potrebno je uzeti 51 član i u tom je slučaju y =
0,7902996532467627
2. Za postizanje točnosti od 0,001 potrebno je uzeti 501 član i u tom je slučaju y=
0,7858971648964472
  </div>
  </div>
  <br>
  <strong>Zadatak 6</strong>
    <p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja pomoću zadane vrijednosti argumenta x sa svojstvom x > 1 izračunava vrijednost funkcije y $$ y= \frac{x-1}{x} + \frac {(x-1)^2}{2x^2} + \frac {(x-1)^3}{3x^3} + \frac {(x-1)^4}{4x^4} + ... $$
    s točnošću na 10^−7, tj. da zbroj preostalih članova reda koji nisu uzeti u obzir ne utječu na 7. decimalu, te određuje koliko je članova potrebno uzeti za postizanje zadane točnosti.</p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-10" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-10" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-10" class="acc-panel" markdown="1">
### Rješenje
Uz vrijednost x = 4, za postizanje točnosti 10-7 potrebno je u obzir uzeti 43 člana i u tom je slučaju y = 1,3862940890080955.
  </div>
  </div>
  <br>
  <strong>Zadatak 7</strong>
    <p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja pomoću zadane vrijednosti argumenta x sa svojstvom ∣x∣ < 1 izračunava vrijednost funkcije y $$ y=x^2 - \frac {x^4}{2} + \frac {x^6}{3} - \frac {x^8}{4} + \frac {x^10}{5} - \frac {x^12}{6} + ... $$</p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-11" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-11" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-11" class="acc-panel" markdown="1">
### Rješenje
Uz vrijednost x = 0,5, za postizanje točnosti 10-7 potrebno je u obzir uzeti 10 članova i u tom je slučaju y = 0,22314353367638967.
  </div>
  </div>
  <br>
  <strong>Zadatak 8</strong>
    <p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja izračunava zbroj recipročnih vrijednosti prirodnih brojeva od k do n.<br>
    Zadatak treba riješiti korištenjem petlje:
    <ul>a) while i</ul>
    <ul>b) do/while</ul></p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-12" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-12" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-12" class="acc-panel" markdown="1">
### Rješenje
Dobivenu vrijednost usporediti s ručno izračunatom vrijednošću za bliske brojeve k i n.
  </div>
  </div>
  <br>
  <strong>Zadatak 9</strong>
    <p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja računa drugi korijen iz zadanog realnog broja rb (rb > 0) s točnošću 0.0000001 po formuli: $$ x_{i+1} = \frac {1}{2} (x_i + \frac{rb}{x_i}) $$ $$ i=0, 1, 2, ... $$ $$ x_0 =rb $$ upotrebom petlje do/while.</p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-13" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-13" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-13" class="acc-panel" markdown="1">
### Rješenje
Dobivenu vrijednost usporediti s vrijednošću izračunatom u vanjskom programu (npr. Microsoft Excel).
  </div>
  </div>
  <br>
  <strong>Zadatak 10</strong>
    <p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja metodom iteracije rješava sustav jednadžbi:
    $$ x = 2 + \frac {x^2+y}{20} $$ $$ y = 1 + \frac {x+y^2}{20} $$ s točnošću 0,01, počevši s x = 0 i y = 0 kao početnom aproksimacijom te izračunava broj iteracija potrebnih za postizanje zadane točnosti. (iteracija = uzastopno izvođenje nekog postupka, tako da se pri svakom izvođenju upotrebljavaju rezultati iz prethodnog izvođenja).</p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-14" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-14" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-14" class="acc-panel" markdown="1">
### Rješenje
Dobivenu vrijednost usporediti s vrijednošću izračunatom u vanjskom programu (npr. Microsoft Excel).
  </div>
  </div>
  <br>
  <strong>Zadatak 11</strong>
    <p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja zadani prirodni broj rastavlja na proste faktore, tj. ispisuje ga kao umnožak prostih brojeva.<br>Npr. 600 = 1⋅2⋅2⋅2⋅3⋅5⋅5 .</p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-15" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-15" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-15" class="acc-panel" markdown="1">
### Rješenje
Za broj 600, ispis glasi 1⋅2⋅2⋅2⋅3⋅5⋅5.
  </div>
  </div>
</details>
<br>
<button class="btn btn-blue" onclick="var details=document.querySelectorAll('details'); details.forEach(function(d){ d.setAttribute('open', 'true'); }); window.print();">
  🖨 Ispiši
</button>