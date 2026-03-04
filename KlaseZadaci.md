---
layout: default
title: Zadatci za vježbu 8
nav_order: 1
parent: Klase, metode i paketi
print: true
---
# Zadatci za vježbu<br>
<strong>Zadatak 1</strong><br>
<p align="justify">Sastavite dijagram toka ili pseudokôd i kôd u Javi za klasu <strong><em>Yfun</em></strong> koja u metodi <strong><em>main()</em></strong> pomoću tipkovnice učitava vrijednost argumenta x, čija je apsolutna vrijednost manja od 1 $(∣x∣<1)$ , i na ekranu monitora ispisuje vrijednost funkcije y, a koja se izračunava u metodi <strong><em>funkcijaY()</em></strong> klase <em>Yfun</em> po formuli: 
$$ y(x) = x + \frac {x^3}{3} + \frac {x^5}{5} + \frac {x^7}{7} + \frac {x^9}{9} + ... $$
s točnošću na 10^-7, tj. da zbroj preostalih članova reda koji nisu uzeti u obzir ne utječu na 7. decimalu.
</p>
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
1. Kreirati metodu main() i u njoj učitati te provjeriti je li unesena vrijednost od x zadovoljava postavljeni uvjet
2. Kreirati novu metodu funkcijaY() u kojoj se računa vrijednost od y
3. Unutar metode main() na ispravan način pozvati metodu funkcijaY() te ispisati izračunatu
vrijednost funkcije – y
  </div>

  <div id="pane-2" class="acc-panel" markdown="1">
### Rješenje
Za vrijednost argumenta x= 0.5, vrijednost funkcije je y= 0, 549306137599134.
  </div>
</div>
<br>
<strong>Zadatak 2</strong><br>
<p align="justify">Sastavite dijagram toka ili pseudokôd i kôd u Javi za klasu <strong><em>RacAiB</em></strong> koja u metodi <strong><em>main()</em></strong> pomoću tipkovnice učitava vrijednosti od <em>y</em> te izračunava i ispisuje vrijednosti od <em>a</em> i <em>b</em>. Vrijednosti od <em>a</em> i <em>b</em> izračunavaju se po formulama:
$$ a = \frac {6+y}{y^2+\sqrt 1+2y+3y^2} $$
$$ a = \frac {sin(y)}{y^4+\sqrt 1+2y+3y^2} $$
upotrebom metode <strong><em>nazivnik()</em></strong> klase RacAiB koja vraća vrijednost nazivnika navedenih
formula. Vrijednost nazivnika u metodi <em>nazivnik()</em> izračunava se pomoću funkcije:
$$ g(x) = x^2+{(1+2x+3x^2)^\frac{1}{2}} $$
</p>
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
1. Kreirati metodu main() i u njoj učitati vrijednost y
2. Kreirati metodu nazivnik() u kojoj se računa vrijednost nazivnika
3. Iz metode main() dohvatiti vrijednost nazivnika i izračunati vrijednosti a i b
4. U metodi main() ispisati izračunate vrijednosti a i b
  </div>

  <div id="pane-4" class="acc-panel" markdown="1">
### Rješenje
Za vrijednost y=3: a= 0.6068389988594105 i b= 0.0014520548929627716.
  </div>
</div>
<br>
<strong>Zadatak 3</strong><br>
<p align="justify">Sastavite dijagram toka ili pseudokôd i kôd u Javi za klasu <strong><em>Kolicnik</em></strong> koja u metodi <strong><em>main()</em></strong> pomoću tipkovnice učitava 2 prirodna broja <em>a</em> i <em>b</em> te na ekranu monitora ispisuje vrijednost od <em>c</em> koja se izračunava po formuli:
$$ c = \frac {b!}{a!(a+b)!} $$ <br>
gdje je ! oznaka za faktorijele. <br>
Vrijednosti faktorijela, npr. a!, izračunavaju se:
<ul>a) pomoću rekurzivne metode <strong><em>fact()</em></strong> klase <strong><em>Kolicnik</em></strong>,</ul>
<ul>b) pomoću rekurzivne metode <strong><em>fact()</em></strong> klase <strong><em>Fraktorijele</em></strong></ul>
</p>
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
1. Kreirati metodu main() klase Količnik i u njoj učitati vrijednosti a i b
2. Razumjeti značenje rekurzivne metode i primijeniti u računanju faktorijela
3. a) kreirati metodu fact() unutar klase Količnik u kojoj se računa faktorijel
4. Iz metode main() pozvati metodu fact() i koristiti ju za računanje vrijednosti c
5. U metodi main() ispisati vrijednost od c
6. b) Kreirati klasu Faktorijele i u njoj deklarirati metodu fact()
7. Iz metode main() pozvati metodu fact() klase Faktorijele i koristiti ju za računanje vrijednosti c
8. U metodi main() ispisati vrijednost od c
  </div>

  <div id="pane-6" class="acc-panel" markdown="1">
### Rješenje
Za vrijednost a=3 i b=4, c= 7.93650793*10^-4.
  </div>
</div>
<br>
<strong>Zadatak 4</strong><br>
<p align="justify">Sastavite dijagram toka ili pseudokôd i kôd u Javi za klasu <strong><em>MainKatCest</em></strong> koja u metodi <strong><em>main()</em></strong> pomoću tipkovnice učitava vrijednosti koordinata (E i N) 4 točke (poredane po redu u smjeru kazaljke na satu), kreira objekt tipa klase <strong><em>KatCest</em></strong> naziva <strong><em>cestica</em></strong> te na ekranu ispisuje vrijednost opsega katastarske čestice koji se računa po formuli:
$$ o = \sum\limits_{i=1}^n d_i $$
gdje je
$$ d_i=\sqrt {(x_{i+1}-x_i)^2+(y_{i+1}-y_i)^2} $$
Duljina dužine između rubnih točaka katastarske čestice (stranica) i opseg katastarske čestice računaju se, redom, pomoću metoda <strong><em>stranica()</em></strong> i <strong><em>opseg()</em></strong> klase <strong><em>KatCest</em></strong>.
</p>
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
1. Kreirati klasu KatCest koja sadrži parametarski konstruktor (čiji su parametri vrijednosti koordinata rubnih točaka katastarske čestice)
2. Kreirati metodu stranica() klase KatCest
3. Kreirati metodu opseg() klase KatCest koja poziva metodu stranica()
4. Kreirati klasu main() klase MainKatCest i u njoj učitati vrijednosti koordinata točaka
5. U metodi main() klase MainKatCest kreirati objekt tipa klase KatCest
6. U metodi main() klase MainKatCest pozvati metodu opseg() klase KatCest koja računa opseg
7. Ispisati vrijednost opsega katastarske čestice
  </div>

  <div id="pane-8" class="acc-panel" markdown="1">
### Rješenje
Za vrijednosti koordinata točaka 1 (530,36; 420,36), 2 (620,47; 375,68), 3 (570,16; 125,78) i 4 (487,52; 215,88) opseg iznosi 686,6717410084151.
  </div>
</div>
<br>
<details>
    <br>
    <summary><strong>Dodatni zadaci</strong></summary>
    <strong>Zadatak 5</strong>
    <p align="justify">Sastavite dijagram toka ili pseudokôd i kôd u Javi za klasu <strong><em>FiboNiz</em></strong> koja u metodi <strong><em>main()</em></strong> pomoću tipkovnice učitava nenegativan cijeli broj n te na ekranu monitora ispisuje prvih n članova, tj. od prvog do n-tog člana, Fibonaccijeva niza. Članovi Fibonaccijevog niza rekurzivno se računaju u metodi <strong><em>fibonacci()</em></strong>
    <ul>a) klase <strong><em>FiboNiz</em></strong></ul>
    <ul>b) klase <strong><em>Fibonacci</em></strong></ul>
    prema formuli: 
    $$ F(i) = 
\begin{cases} 
F(i-1) + F(i-2) & \text{ako je } i > 1; \\
1 & \text{ako je } i = 1; \\
0 & \text{ako je } i = 0.
\end{cases} $$
    </p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-9" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-9" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-9" class="acc-panel" markdown="1">
### Rješenje
Dobivenu vrijednost usporediti s ručno izračunatom vrijednošću.
  </div>
  <br>
  <strong>Zadatak 6</strong>
    <p align="justify">Za zadane vrijednosti y1 i y2 potrebno je izračunati konstantu k po formuli:
    $$ k = \frac {1}{6} (m_1 + 4m_m + m_2) $$
    gdje je:
    $$
\begin{align*}
m_1 &= 1 + \frac{y_1^2}{2R^2} + \frac{y_1^4}{24R^4} , \\
m_2 &= 1 + \frac{y_2^2}{2R^2} + \frac{y_2^4}{24R^4} , \\
m_m &= 1 + \frac{y_m^2}{2R^2} + \frac{y_m^4}{24R^4} , \\
y_m &= \frac{1}{2} (y_1 + y_2) \dots \\
R &= 6370290 \text{ m}
\end{align*}
$$
<strong>Upute:</strong>
<ul>1. double varijable y1, y2 i ym,</ul>
<ul>2. static int varijablu R,</ul>
<ul>3. podrazumijevani konstruktor za inicijalizaciju varijabli,</ul>
<ul>4. parametarski konstruktor za inicijalizaciju varijabli sa stvarnim vrijednostima,</ul>
<ul>5. metodu mjerilo() za računanje vrijednosti mjerila m,</ul>
<ul>6. metodu konstanta() za računanje vrijednosti konstante k pozivanjem metode mjerilo().</ul>
Napisati klasu <strong><em>MainKonstanta</em></strong> u kojoj se kreira objekt tipa klase <strong><em>Konstanta</em></strong> i ispisuje vrijednost konstante k kreiranog objekta.
    </p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-10" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-10" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-10" class="acc-panel" markdown="1">
### Rješenje
Dobivenu vrijednost usporediti s ručno izračunatom vrijednošću.
  </div>
  <br>
  <strong>Zadatak 7</strong>
    <p align="justify">Izračunati smjerni kut s točke $T_a$ ($E_a$, $N_a$) na točku $T_b$($E_b$, $N_b$).
<strong>Upute:</strong>
<ul>1. U paketu <strong><em>geodezija</em></strong> definirati klasu <strong><em>SmjerniKut</em></strong> koja sadrži:</ul>
<ul>2. double varijable $E_a$, $N_a$, $E_b$, $N_b$, deltaE, deltaN;</ul>
<ul>3. podrazumljevani konstruktor za inicijalizaciju varijabli;</ul>
<ul>4. parametarski konstruktor za inicijalizaciju varijabli sa stvarnim vrijednostima;</ul>
<ul>5. metodu <em>smjerni()</em> za računanje smjernog kuta;</ul>
<ul>6. metodu <em>smjerniStMiSe()</em> koja poziva metodu <em>smjerni()</em> i pretvara vraćenu vrijednost smjernog kuta iz radijana u stupnjeve, minute, sekunde. Metoda <em>smjerniStMiSe()</em> vraća jedan String podatak, npr.: "167,2,7.898".</ul>
U paketu <strong><em>prog12</em></strong> napisati klasu <strong><em>MainSmjerni</em></strong> u kojoj se kreira objekt tipa klase <strong><em>SmjerniKut</em></strong> paketa geodezija i ispisuje vrijednost smjernog kuta kreiranog objekta u obliku "stupnjevi
minute sekunde", npr. 167 02 07.898.
    </p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-11" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-11" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-11" class="acc-panel" markdown="1">
### Rješenje
Dobivenu vrijednost usporediti s ručno izračunatom vrijednošću.
  </div>
  <br>