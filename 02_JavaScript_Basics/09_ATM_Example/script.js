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


let balance = 0;


async function main() {
while (true) {
    showMenu();

let inputOfUser = await readlineAsync();



if (inputOfUser == "1"){
    await einzahlen();
} else if (inputOfUser == "2"){
    await abheben();
} else if (inputOfUser == "3"){
    kontostand();
} else if (inputOfUser == "4") {
    exit();
}
}}

function showMenu(){
    console.log("1. Einzahlen");
    console.log("2. Abheben");
    console.log("3. Kontostand");
    console.log("4. Beenden");
    
    console.log("Wählen Sie die gewünschte Aktion aus, indem Sie eine Zahl (1-4) eingeben");
    }

async function einzahlen(){
    console.log("Wählen Sie den Betrag, welchen Sie einzahlen wollen: ");
    let einzuzahlenderBetrag = await readlineAsync();
    balance += parseFloat(einzuzahlenderBetrag)
    console.log("\n Sie haben " + einzuzahlenderBetrag + "€ eingezahlt");
    console.log();
    

}

async function abheben() {
    console.log("Wählen Sie den Betrag, welchen Sie abheben wollen: ");
    let abzuhebenderBetrag = await readlineAsync();
    balance -= parseFloat(abzuhebenderBetrag);
    console.log("\n Sie haben " + abzuhebenderBetrag + "€ abgehoben");
    console.log();
}

async function kontostand() {
    console.log("Dies ist Ihr jetziger Konstostand: " + balance + "€ " );
    console.log();
}

async function exit() {
    console.log("Auf Wiedersehen!")
    readline.close();
}

main();
