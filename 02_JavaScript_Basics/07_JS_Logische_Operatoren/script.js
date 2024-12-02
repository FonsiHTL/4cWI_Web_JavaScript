let randomNumber1 = Math.floor(Math.random() * 101);
let randomNumber2 = Math.floor(Math.random() * 101);


console.log(randomNumber1);
console.log(randomNumber2);


if (randomNumber1 > randomNumber2 && randomNumber1 > 50){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini")
}

if(randomNumber1 < 30 || randomNumber2 < 30){
    console.log("Eine der beiden Zahlen ist kleiner als 30")
}

if (randomNumber1 < 50 && randomNumber2 != 50){
    console.log("Erste Zahl klein, weite kein 50iger")
}