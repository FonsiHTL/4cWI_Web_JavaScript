function rechne(a, b, callback) {
    console.log("Berechnung wird durchgeführt...");
    return callback(a, b);
  }
  
  function addieren(x, y) {
    return x + y;
  }
  
  function multiplizieren(x, y) {
    return x * y;
  }
  
  // Verwendung
  let summe = rechne(5, 3, addieren);
  console.log("Summe:", summe); // Ausgabe: Summe: 8
  
  let produkt = rechne(5, 3, multiplizieren);
  console.log("Produkt:", produkt); // Ausgabe: Produkt: 15
  