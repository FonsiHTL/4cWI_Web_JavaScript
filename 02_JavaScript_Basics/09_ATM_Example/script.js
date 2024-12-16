import { createInterface } from 'readline';

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const readlineAsync = ( ) => {
    return new Promise((resolve) =>  {
        readline.question("", (userRes) => {
            resolve(userRes);
            
        });
    });

};


console.log("1. Einzahlen");
console.log("2. Abheben");
console.log("3. Kontostand");
console.log("4. Beenden");

console.log("Wählen Sie die gewünschte Aktion aus, indem Sie eine Zahl (1-4) eingeben");

while(true){
    let inputOfUser = await readlineAsync();

if (inputOfUser == 1){
    console.log("Tippen Sie den Betrag ein, welchen Sie einzahlen möchten :")

} 
}

