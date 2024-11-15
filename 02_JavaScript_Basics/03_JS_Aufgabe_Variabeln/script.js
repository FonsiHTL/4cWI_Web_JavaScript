let banana = "Banane";
let apple = "Apfel";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let bananaWeight = 0.22;
let appleWeight = 0.34;

let AnzahlBananenProKilo = 1 / bananaWeight;
let AnzahlAepfelProKilo = 1 / appleWeight;

console.log("Anzahl Äpfel pro Kilo: " + AnzahlAepfelProKilo);
console.log("Anzahl Bananen pro Kilo: " + AnzahlBananenProKilo);
console.log("Preis pro Apfel: "  + (applePricePerKilo * appleWeight));
console.log("Preis pro Banane: "  + (bananaPricePerKilo * bananaWeight));

console.log("Preis von 8 Äpfel: " + (applePricePerKilo * appleWeight) * 8);

console.log("Preis von 17 Bananen: " + (bananaPricePerKilo * bananaWeight) * 17);

console.log("Preis von 1 Tonne Äpfel: " + applePricePerKilo * 1000);
console.log("Preis von 1 Tonne Bananen: " + bananaPricePerKilo * 1000);