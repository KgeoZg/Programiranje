---
layout: default
title: Zadatci za vježbu 9
nav_order: 1
parent: Znakovni niz
print: true
---
# Zadatci za vježbu<br>
<strong>Zadatak 1</strong><br>
<p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja pomoću tipkovnice učita jednu riječ te ju potom ispiše onoliko puta koliko zadana riječ ima znakova.
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
1. Učitati proizvoljnu riječ
2. Odrediti duljinu riječi temeljem broja znakova
3. Upotrijebiti prikladnu petlju za ispisati riječ onoliko puta koliko ima znakova
  </div>

  <div id="pane-2" class="acc-panel" markdown="1">
### Rješenje
U ovisnosti o odabranoj riječi, ručno provjeriti rezultat.
  </div>
</div>
<br>
<strong>Zadatak 2</strong><br>
<p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja pomoću tipkovnice učita rečenicu (bez dijakritičkih znakova) te prebroji koliko u zadanoj rečenici ima samoglasnika, a koliko suglasnika.
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
1. Učitati proizvoljnu rečenicu
2. Prebaciti zapis rečenice u format bez velikih početnih slova riječi
3. Definirati brojače koji će bilježiti koliko pojedinih slova ima (npr. varijable samo i sugl)
4. Odrediti duljinu rečenice i broj znakova u rečenici
5. Primjenom prikladnih petlji provjeriti svaki pojedini znak u rečenici – usporediti ga s poznatim samoglasnicima (a, e, i, o, u) i bilježiti je li samoglasnik ili suglasnik
6. Ispisati dobivene rezultate
  </div>

  <div id="pane-4" class="acc-panel" markdown="1">
### Rješenje
U rečenici „Programiranje je zakon“ ima 8 samoglasnika i 12 suglasnika.
  </div>
</div>
<br>
<strong>Zadatak 3</strong><br>
<p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja pomoću tipkovnice učita neki decimalni broj te izračuna zbroj i umnožak znamenaka zadanog decimalnog broja. Koristiti
objekte klase String.
<br>
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
1. Učitati decimalni broj i pohraniti ga kao objekt klase String
2. Provjeriti je li broj pozitivan ili negativan i postaviti ga na pozitivnu vrijednost
3. Rastaviti broj na znakove i pohraniti ih u niz
4. Definirati nove varijable za zbroj i umnožak
5. Upotrebom priklanih petlji izračunati zbroj i umnožak znamenki
6. Ispisati rezultate
  </div>

  <div id="pane-6" class="acc-panel" markdown="1">
### Rješenje
Za vrijednost decimalnog broja -3,12, zbroj znamenki je 6, a umnožak 6.
  </div>
</div>
<br>
<details>
    <br>
    <summary><strong>Dodatni zadaci</strong></summary>
    <strong>Zadatak 4</strong>
    <p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja pomoću tipkovnice učita riječ te ju rastavlja na slogove koji završavaju samoglasnikom.
    </p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-7" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-7" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-7" class="acc-panel" markdown="1">
### Rješenje
Dobiveni rezultat usporediti s ručno određenim slogovima.
  </div>
  </div>
  <br>
    <strong>Zadatak 5</strong>
    <p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja pomoću tipkovnice učita prirodni broj s neparnim brojem znamenaka te potom ispiše njegovu srednju znamenku.
    </p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-8" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-8" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-8" class="acc-panel" markdown="1">
### Rješenje
Dobiveni rezultat usporediti s ručno određenom znamenkom.
  </div>
  </div>
  <br>
  <strong>Zadatak 6</strong>
    <p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja pomoću tipkovnice učita neki tekst te ga ispiše u obrnutom redoslijedu, tj. od kraja teksta prema njegovom početku. Koristiti metodu charAt() klase String.
    </p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-9" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-9" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-9" class="acc-panel" markdown="1">
### Rješenje
Dobiveni rezultat usporediti s ručno određenim rezultatom.
  </div>
  </div>
  <br>
  <strong>Zadatak 7</strong>
    <p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja učita neku riječ pomoću tipkovnice te provjeri je li zadana riječ palindrom, tj. da li se riječ čita jednako s početka i s kraja. Koristiti metodu charAt() klase String.
    </p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-10" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-10" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-10" class="acc-panel" markdown="1">
### Rješenje
Dobiveni rezultat usporediti s ručno određenim rezultatom.
  </div>
  </div>
  <br>
  <strong>Zadatak 8</strong>
    <p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja učita neku riječ pomoću tipkovnice te provjeri je li zadana riječ palindrom, tj. da li se riječ čita jednako s početka i s kraja. Koristiti metodu reverse() klase StringBuffer
    </p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-11" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-11" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-11" class="acc-panel" markdown="1">
### Rješenje
Dobiveni rezultat usporediti s ručno određenim rezultatom.
  </div>
  </div>
  <br>
  <strong>Zadatak 9</strong>
    <p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja pomoću tipkovnice učita rečenicu, te:
    <ul>a) prebroji koliko u zadanoj rečenici ima riječi,</ul>
    <ul>b) ispisuje riječi iz zadane rečenice.</ul>
    </p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-12" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-12" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-12" class="acc-panel" markdown="1">
### Rješenje
Dobiveni rezultat usporediti s ručno određenim rezultatom.
  </div>
  </div>
  <br>
  <strong>Zadatak 10</strong>
    <p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja pomoću tipkovnice učitava nazive, x i y koordinate dviju točaka te izračuna udaljenost tih dviju točaka. Podaci za pojedinu točku zadaju se u jednom retku.<br>
    Rezultat ispisati u obliku:<br>
    Udaljenost točaka <em>nazivPrveTočke</em> i <em>nazivDrugeTočke</em> iznosi ...
    </p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-13" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-13" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-13" class="acc-panel" markdown="1">
### Rješenje
Dobiveni rezultat usporediti s ručno određenim rezultatom.
  </div>
  </div>
  <br>
  <strong>Zadatak 11</strong>
    <p align="justify">Sastaviti dijagram toka ili pseudokôd i kôd u Javi za klasu koja pomoću tipkovnice učitava elemente 2D polja koje ima m redaka (m>3) s različitim brojem elemenata u retcima te izračuna zbroj svih elemenata tog polja. Svi elementi pojedinog retka zadaju se odjednom, odvajajući ih praznim mjestima (“space” tipka).
    </p>
    <div class="btn-acc-group">
  <!-- Change to checkbox and remove 'name' -->
  <input type="checkbox" id="acc-14" class="acc-state">

  <div class="acc-btn-row">
    <label for="acc-14" class="btn btn-blue">Rješenje</label>
  </div>
  <div id="pane-14" class="acc-panel" markdown="1">
### Rješenje
Dobiveni rezultat usporediti s ručno određenim rezultatom.
  </div>
  </div>
</details>
  <br>
<button class="btn btn-blue" onclick="var details=document.querySelectorAll('details'); details.forEach(function(d){ d.setAttribute('open', 'true'); }); window.print();">
  🖨 Ispiši
</button>