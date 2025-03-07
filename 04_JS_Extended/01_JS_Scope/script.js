

/* 
Verschiedene Scopes mit var, let und const

*/

//Die Var Variable existiert innerhalb einer Funktion und ist daher auch ausserhalb des IF-Statements sichtbar
if (true){
    var varVariable = "Paul ist im Fahrstuhl"
}

console.log(varVariable);


/*Die Let Variable existiert nur innerhalb eines Blocks (Ein Block ist der Code zwischen den geschwungenen Klammern {}) 
    und kann deshalb nicht ausserhalb des IF-Statements gesehen werden
*/

/*
if(true){
    let letVariable = "Bob ist auf der Bühne"

}
console.log(letVariable);

/*Const funktioniert genau wie let, aber Const-Variabeln können im Nachhinein nicht geändert werden - nicht sichtbar ausserhabl des Blocks

if(true){
    const constVariable = "Markus ist in New Yok"

}
console.log(constVariable);
*/

// Man kann zwar den Wert der Const Variable durch andere Funktionen etc. nicht ändern, allerdings kann man, falls die Variable ein JSON, Objekt ist,
//die Werte ändern
const constVar1 = {name: "Bob"}

constVar1.name = "Paul";
console.log(constVar1);