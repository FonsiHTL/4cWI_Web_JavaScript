const items = [
    {name: "Bike",      price: 100},
    {name: "TV",        price: 200},
    {name: "Album",     price: 10},
    {name: "Laptop",    price: 300},
    {name: "Handy",     price: 400},
    {name: "Computer",  price: 2000},
    {name: "Keyboard",  price: 50},
    {name: "Fahrstuhl", price: 10000},
    {name: "Masthuhn",  price: 1}
]


//filter
const filteredItems = items.filter((item) => {
    return item.price <= 100

})

console.log(items);
console.log(filteredItems);


//map
const itemNames = items.map((item) => {
    return item.name
})

console.log(itemNames)


//find
const foundItem = items.find((item) => {
    return item.name === "Fahrstuhl"
})

console.log(foundItem)


//forEach
items.forEach((item) => {
    console.log(item.price)
})


//some
const hasExpensiveItems = items.some((item) => {
    return item.price >= 100000
})

console.log(hasExpensiveItems)


//every
const hasInexpensiveItems = items.every((item) => {
    return item.price <= 10000
})

console.log(hasInexpensiveItems)


//reduce
/*
Die .reduce-Methode ist etwas komplexer als die vorherigen Methoden; 
sie fasst die Werte eines Arrays zu einem einzelnen Ergebnis zusammen, 
indem sie eine Funktion auf jedes Element anwendet und das Ergebnis schrittweise weiterführt. 
In dem gegebenen Beispiel wird .reduce verwendet, um die Summe aller price-Werte im Array zu berechnen. 
Der currentTotal beginnt bei 0, und für jedes item wird der price zum aktuellen Gesamtwert addiert. 
Am Ende enthält die Variable total die Gesamtsumme aller price-Werte aus dem Array.
*/
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total)


//includes
const newItems = [1, 2 ,3 ,4 ,5]

const includesTwo = newItems.includes(2)

console.log(includesTwo)