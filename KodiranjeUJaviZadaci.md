---
layout: default
title: Zadatci za vježbu 2
nav_order: 1
parent: Kodiranje u Javi
print: true
---
# Zadatci za vježbu<br>
<strong>Zadatak 1</strong><br>
<p align="justify">Sastaviti dijagram toka i pseudokôd za kôd programa koji računa opseg katastarske čestice čije su stranice proizvoljnih duljina te ispisuje izračunatu vrijednost.
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
1. Deklarirati i inicijalizirati varijable proizvoljnim vrijednostima duljina stranica katastarske čestice. Deklarirati novu varijablu za pohranu vrijednosti opsega čestice
2. Izračunati opseg kao zbroj duljina stranica katastarske čestice
3. Ispisati vrijednost opsega
  </div>

  <div id="pane-5" class="acc-panel" markdown="1">
### Rješenje
Za proizvoljne vrijednosti duljina stranica katastarske čestice:<br>
<strong>a</strong>=15,90m  <strong>b</strong>=21,90m  <strong>c</strong>=19,70m  <strong>d</strong>=24,40m<br>
Opseg iznosi 81,90m.
  </div>
</div>
<br>
<strong>Zadatak 2</strong><br>
<p align="justify">Sastaviti dijagram toka i pseudokôd za kôd programa koji kovertira vrijednost površine katastarske čestice iskazane u bečkom sustavu površina (jutro/četvorni hvat) u SI sustav površina (kvadratni metar) te ju izražava u hektarima, arima i kvadratnim metrima.<br>
Ispis rezultata treba biti u obliku:<br>
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
  <input type="checkbox" id="acc-6" class="acc-state">
  <input type="checkbox" id="acc-7" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-6" class="btn btn-blue">Smjernice</label>
    <label for="acc-7" class="btn btn-blue">Rješenje</label>
  </div>

  <div id="pane-6" class="acc-panel" markdown="1">
### Smjernice
1. Izračunati površinu u četvornim hvatima:<br> (1) jutra pretvoriti u četvorne hvate i (2) pribrojiti im iznos zadanih četvornih hvata<br>
2. Izračunati površinu u kvadratnim metrima – SI m2: prema formuli veze čhv i m2<br>
3. Površinu u kvadratnim metrima rastaviti na udio hektara, ara i m2 prema formulama
međusobnih odnosa
  </div>

  <div id="pane-7" class="acc-panel" markdown="1">
### Rješenje
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
      <td>28805,59</td>
      <td>2</td>
      <td>88</td>
      <td>5,59</td>
    </tr>
    <tr>
      <td>b</td>
      <td>43</td>
      <td>27</td>
      <td>247546,77</td>
      <td>24</td>
      <td>75</td>
      <td>46,77</td>
    </tr>
    <tr>
      <td>c</td>
      <td>127</td>
      <td>27</td>
      <td>731321,64</td>
      <td>73</td>
      <td>13</td>
      <td>21,64</td>
    </tr>
    <tr>
      <td>c</td>
      <td>2901</td>
      <td>1599</td>
      <td>16699970,79</td>
      <td>1669</td>
      <td>99</td>
      <td>70,79</td>
    </tr>
  </tbody>
</table>
  </div>
</div>
<br>
<strong>Zadatak 3</strong><br>
<p align="justify">Sastaviti dijagram toka i pseudokôd za kôd programa koji pretvara vrijednost kuta iz seksagezimalne mjere u lučnu mjeru te ponovno u seksagezimalnu mjeru. Pretpostavka je da se radi o pozitivnoj vrijednosti kuta.<br>
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
1. Pretvoriti zapis stupnjeva, minuta i sekundi u zapis decimalnog stupnja<br>
(npr. 12°11'3''->12°,18417)
2. Uspostaviti vezu između seksagezimalne mjere (°) i lučne mjere (radijan) preko relacije koja
definira njihov odnos
3. Vrijednost kuta u lučnoj mjeri (radijan) pretvoriti u seksagezimalnu mjeru (°) preko relacije koja
definira njihov odnos
4. Seksagezimalni zapis kuta u decimalnom obliku rastaviti na iznos stupnjeva, minuta i sekundi
  </div>

  <div id="pane-9" class="acc-panel" markdown="1">
### Rješenje
Iznos ispisane vrijednosti kuta mora biti identičan unesenim vrijednostima.
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
te udaljenost između pristupačnih točaka A i B. <br>
Sastaviti dijagram toka i pseudokôd za kôd programa koji računa udaljenost nepristupačne točke C od pristupačne točke B (vidi sliku).
    <br>
    <img src="{{ 'assets\images\7_Skica.png' | relative_url }}" style="display: block; margin: 0 auto; max-width: 40%;" alt="Centered Image">
    <br>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-10" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-10" class="btn btn-blue">Rješenje</label>
  </div>

  <div id="pane-10" class="acc-panel" markdown="1">
### Rješenje
Dobiveni rezultat usporediti s ručno izračunatom vrijednošću.
  </div>
    <br>
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
    Sastaviti dijagram toka i pseudokôd za kôd programa koji računa udaljenosti dviju nepristupačnih točaka C i D (vidi sliku).<br>
    <img src="{{ 'assets\images\8_Skica.png' | relative_url }}" style="display: block; margin: 0 auto; max-width: 40%;" alt="Centered Image">
    <br>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-11" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-11" class="btn btn-blue">Rješenje</label>
  </div>

  <div id="pane-11" class="acc-panel" markdown="1">
### Rješenje
Dobiveni rezultat usporediti s ručno izračunatom vrijednošću.
  </div>
    <br>
    <strong>Zadatak 6</strong>
    <p align="justify">Pomoću mjernog instrumenta u trokutu su jednakom točnošću mjerena 3 kuta αmj, βmj i γmj u seksagezimalnoj mjeri te duljina stranice a nasuprot kuta αmj.</p>
    Sastaviti dijagram toka i pseudokôd za kôd programa koji:<br>
    <ul>a) određuje kutne nesuglasice f i popravke v = f/3,</ul>
    <ul>b) određuje izjednačene, tj. popravljene vrijednosti kuteva,</ul>
    <ul>c) određuje nepoznate duljine stranica b i c u trokutu, te</ul>
    <ul>d) radi kontrolu računanja pomoću sinusova poučka (uvjeta).</ul>
    Kontrola računanja vezana je uz izračunate vrijednosti duljina b i c, odnosno njima
nasuprotnih izjednačenih kuteva βizj i γizj.
    <br>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-12" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-12" class="btn btn-blue">Rješenje</label>
  </div>

  <div id="pane-12" class="acc-panel" markdown="1">
### Rješenje
Dobiveni rezultat usporediti s ručno izračunatom vrijednošću.
  </div>
