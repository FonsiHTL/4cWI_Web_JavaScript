function begruessen(name, callback) {
    console.log("Hallo " + name);
    callback();
  }
  
  function abschied() {
    console.log("Auf Wiedersehen!");
  }
  
  begruessen("Max", abschied);
  // Ausgabe:
  // Hallo Max
  // Auf Wiedersehen!
  