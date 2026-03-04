---
layout: default
title: Zadatci za vježbu 1
nav_order: 1
parent: Dijagram toka i pseudokod
print: true
---
# Zadatci za vježbu<br>
<strong>Zadatak 1</strong><br>
<p align="justify">Sastaviti dijagram toka i/ili pseudokod za kod koji računa opseg katastarske čestice čije su stranice proizvoljnih duljina te ispisuje izračunati opseg.
<br>
<div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-1" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-1" class="btn btn-blue">Rješenje</label>
  </div>

  <div id="pane-1" class="acc-panel" markdown="1">
### Rješenje
<strong>Dijagram toka</strong>
<br>
    <img src="{{ '/assets/images/4_Dijagram toka_rjesenje.png' | relative_url }}" style="display: block; margin: 0 auto; max-width: 20%;" alt="Centered Image">
    <br>
<strong>Pseudokod</strong><br>
<br>
<img src="{{ '/assets/images/4_Pseudokod_rjesenje.png' | relative_url }}" style="display: block; margin: 0 auto; max-width: 50%;" alt="Centered Image">
  </div>
</div>
<br>
<strong>Zadatak 2</strong><br>
<p align="justify">Sastaviti dijagram toka i pseudokôd za konverziju vrijednosti površine katastarske čestice iskazane u bečkom sustavu površina (jutro/četvorni hvat) u SI sustav površina (kvadratni metar) te potom izraziti u hektare, are i kvadratne metre.<br>
Izračun treba ispisati u obliku:<br>
… jutara i … četvornih hvati = … kvadratnih metara = … hektara … ari … kvadratnih metara
<br>
<table class="custom-grid-table">
  <thead>
    <tr>
      <th>čestica</th>
      <th>j</th>
      <th>čhv</th>
      <th>SI - m2</th>
      <th>ha</th>
      <th>ar</th>
      <th>m2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>a</td>
      <td>5</td>
      <td>9</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>b</td>
      <td>43</td>
      <td>27</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>c</td>
      <td>127</td>
      <td>27</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>c</td>
      <td>2901</td>
      <td>1599</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; align-items: start;">
    <div class="column">  
        1 j (jutro) = 1600 čhv (četvorni hvat) <br>
                1 čhv = 3,596652 m2
    </div>
    <div class="column">  
        1 ar = 100 m2 <br>
        1 ha (hektar) = 100 ar = 10 000 m2
    </div>
</div>
<div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-2" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-2" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-2" class="acc-panel" markdown="1">
### Rješenje
<strong>Dijagram toka</strong>
    <br>
    <img src="{{ '/assets/images/5_Dijagram toka_rjesenje.png' | relative_url }}" style="display: block; margin: 0 auto; max-width: 45%;" alt="Centered Image">
    <br>
    <strong>Pseudokod</strong><br>
    <br>
    <img src="{{ '/assets/images/5_Pseudokod_rjesenje.png' | relative_url }}" style="display: block; margin: 0 auto; max-width: 60%;" alt="Centered Image">

  </div>
</div>
<strong>Zadatak 3</strong><br>
<p align="justify">Sastaviti dijagram toka i pseudokôd za pretvaranje vrijednosti kuta iz seksagezimalne mjere u lučnu mjeru i obrnuto, tj. iz lučne u seksagezimalnu mjeru. Pretpostavka je da se radi o pozitivnoj vrijednosti kuta.
<br>
<div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-3" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-3" class="btn btn-blue">Rješenje</label>
  </div>

  <div id="pane-3" class="acc-panel" markdown="1">
### Rješenje
<strong>Dijagram toka</strong><br>
<br>
    <img src="{{ '/assets/images/6_Dijagram toka_rjesenje.png' | relative_url }}" style="display: block; margin: 0 auto; max-width: 30%;" alt="Centered Image">
    <br>
<strong>Pseudokod</strong><br>
<br>
<img src="{{ '/assets/images/6_Pseudokod_rjesenje.png' | relative_url }}" style="display: block; margin: 0 auto; max-width: 80%;" alt="Centered Image">
  </div>
</div>
<br>

<details>
<br>
    <summary><strong>Dodatni zadaci</strong></summary>
    <strong>Zadatak 4</strong>
    <p align="justify">Pomoću mjernog instrumenta mjereni su kutovi u seksagezimalnoj mjeri:</p>
    <ul>a) u pristupačnoj točki A između smjera prema pristupačnoj točki B i smjera prema
nepristupačnoj točki C,</ul>
    <ul>b) u pristupačnoj točki B između smjera prema pristupačnoj točki A i smjera prema
nepristupačnoj točki C,</ul>
te udaljenost između pristupačnih točaka A i B. Sastaviti dijagram toka i pseudokôd za
računanje udaljenosti nepristupačne točke C od pristupačne točke B (vidi sliku).
    <br>
    <img src="{{ '/assets/images/7_Skica.png' | relative_url }}" style="display: block; margin: 0 auto; max-width: 40%;" alt="Centered Image">
    <br><br>
    <strong>Zadatak 5</strong>
    <p align="justify">Pomoću mjernog instrumenta izmjereni su kutovi u seksagezimalnoj mjeri:</p>
    <ul>a) u pristupačnoj točki A:</ul>
    <ul>1. između smjera prema pristupačnoj točki B i smjera prema nepristupačnoj točki
D,</ul>
    <ul>2. između smjera prema pristupačnoj točki B i smjera prema nepristupačnoj točki
C;</ul>
    <ul>b) u pristupačnoj točki B:</ul>
    <ul>1. između smjera prema pristupačnoj točki A i smjera prema nepristupačnoj točki
C,</ul>
    <ul>2. između smjera prema pristupačnoj točki A i smjera prema nepristupačnoj točki
D;</ul>
    te udaljenost između pristupačnih točaka A i B.
    <br>
    Sastaviti dijagram toka i pseudokôd za računanje udaljenosti dviju nepristupačnih
točaka C i D (vidi sliku).<br>
    <img src="{{ '/assets/images/8_Skica.png' | relative_url }}" style="display: block; margin: 0 auto; max-width: 40%;" alt="Centered Image">
    <br><br>
    <strong>Zadatak 6</strong>
    <p align="justify">Pomoću mjernog instrumenta u trokutu su jednakom točnošću mjerena 3 kuta αmj, βmj i γmj u seksagezimalnoj mjeri te duljina stranice a nasuprot kuta αmj.</p>
    Sastaviti dijagram toka i pseudokôd za:<br>
    <ul>a) određivanje kutne nesuglasice f i popravke v = f/3,</ul>
    <ul>b) određivanje izjednačenih, tj. popravljenih vrijednosti kuteva,</ul>
    <ul>c) određivanje nepoznatih duljina stranica b i c u trokutu, te</ul>
    <ul>d) kontrolu računanja</ul>
    pomoću sinusova poučka (uvjeta).<br>
    Kontrola računanja vezana je uz izračunate vrijednosti duljina b i c, odnosno njima
nasuprotnih izjednačenih kuteva βizj i γizj.
</details>