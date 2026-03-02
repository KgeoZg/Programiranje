---
layout: default
title: Zadatci za vježbu 3
nav_order: 1
parent: Petlja if...else
---
# Zadatci za vježbu<br>
<strong>Zadatak 1</strong><br>
<p align="justify">Sastaviti algoritam (dijagram toka ili pseudokôd) i kôd u Javi za klasu koja učitava dva prirodna broja n1 i n2, i ispituje je li n2 djeljiv s n1 bez ostatka.
<br>
<div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-4" class="acc-state">
  <input type="checkbox" id="acc-5" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-4" class="btn btn-blue">Smjernice</label>
    <label for="acc-5" class="btn btn-blue">Rješenje</label>
  </div>

  <div id="pane-4" class="acc-panel" markdown="1">
### Smjernice
1. Koristiti operator modul (ostatak pri dijeljenju)
  </div>

  <div id="pane-5" class="acc-panel" markdown="1">
### Rješenje
Uzeti dva broja 1-10 za koja se lako može provjeriti jesu li djeljiva bez ostatka.
  </div>
</div>
<br>
<strong>Zadatak 2</strong><br>
<p align="justify">Sastaviti algoritam (dijagram toka ili pseudokôd) i kôd u Javi za klasu koja na temelju koordinata vrhova trokuta (xa, ya, xb, yb, xc, yc) ispituje je li trokut jednakostraničan do na zadanu točnost (toleranciju). Pretpostavka je da su točke (po koordinatama) međusobno različite.
<br>
<div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-6" class="acc-state">
  <input type="checkbox" id="acc-7" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-6" class="btn btn-blue">Smjernice</label>
    <label for="acc-7" class="btn btn-blue">Rješenje</label>
  </div>

  <div id="pane-6" class="acc-panel" markdown="1">
### Smjernice
1. Izračunati duljine stranica između točaka A, B i C
2. Provjeriti je li razlika duljina stranica manja od unaprijed zadane točnosti
  </div>

  <div id="pane-7" class="acc-panel" markdown="1">
### Rješenje
1. Za vrijednosti A (9122,297; 1542,478), B (9240,044; 1489,441) i C (9227,101; 1617,932) i
toleranciju 0,002; trokut je jednakostraničan
2. Za vrijednosti A (9122,301; 1542,478), B (9240,044; 1489,441) i C (9227,101; 1617,932) I
toleranciju 0,002; trokut nije jednakostraničan
  </div>
</div>
<br>
<strong>Zadatak 3</strong><br>
<p align="justify">Sastaviti algoritam (dijagram toka ili pseudokôd) i kôd u Javi za klasu koja na temelju koordinata E i N točaka A i B određuje smjerni kut νA B. Zanemariti situacije kada je koordinatna razlika uzduž jedne ili druge osi jednaka 0, tj. uzeti u obzir:<br>
<ul>a) ΔE>0 i ΔN>0 -> I. kvadrant</ul>
<ul>b) ΔE>0 i ΔN<0 -> II. kvadrant</ul>
<ul>c) ΔE<0 i ΔN<0 -> III. kvadrant</ul>
<ul>d) ΔE<0 i ΔN>0 -> IV. kvadrant</ul>
<div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-8" class="acc-state">
  <input type="checkbox" id="acc-9" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-8" class="btn btn-blue">Smjernice</label>
    <label for="acc-9" class="btn btn-blue">Rješenje</label>
  </div>

  <div id="pane-8" class="acc-panel" markdown="1">
### Smjernice
1. Odrediti vrijednosti koordinatnih razlika između zadanih točaka
2. Postaviti ugniježđenu if/else petlju koja će provjeravati više uvjeta odjednom (npr. a) i b) ) i izračunati smjerni kut
3. Pretvoriti dobiveni smjerni kut u seksagezimalnu mjeru, tj. zapis u stupnjevima, minutama i sekundama
  </div>

  <div id="pane-9" class="acc-panel" markdown="1">
### Rješenje
1. Rezultat se može usporediti s ručno izračunatom vrijednošću smjernog kuta
2. Sastaviti kod koji će na temelju dobivenog kuta i koordinata jedne točke izračunati koordinate druge točke. Koordinate druge točke moraju biti identične onima koje su unesene za računanje smjernog kuta
  </div>
</div>
<br>
<details>
    <br>
    <summary><strong>Dodatni zadaci</strong></summary>
    <strong>Zadatak 4</strong>
    <p align="justify">Sastaviti algoritam (dijagram toka ili pseudokôd) i kôd u Javi za klasu koja na temelju koordinata E i N točaka A i B određuje smjerni kut ν s A na B. Razmotriti sve moguće slučajeve, tj:</p>
    <ul>a) ΔE=0 i ΔN=0 -> staviti da je kut 0°</ul>
    <ul>b) ΔE=0 i ΔN>0 -> 0°</ul>
    <ul>c) ΔE>0 i ΔN>0 -> I. kvadrant</ul>
    <ul>d) ΔE>0 i ΔN=0 -> 90°</ul>
    <ul>e) ΔE>0 i ΔN<0 -> II. Kvadrant</ul>
    <ul>f) ΔE=0 i ΔN<0 -> 180°</ul>
    <ul>g) ΔE<0 i ΔN<0 -> III. Kvadrant</ul>
    <ul>h) ΔE<0 i ΔN=0 -> 270°</ul>
    <ul>i) ΔE<0 i ΔN>0 -> IV. Kvadrant</ul>
    <br>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-10" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-10" class="btn btn-blue">Rješenje</label>
  </div>

  <div id="pane-10" class="acc-panel" markdown="1">
### Rješenje
Unijeti vrijednost koordinata točaka A i B za koje se unaprijed zna u kojem se kvadrantu nalazi smjerni kut.
  </div>