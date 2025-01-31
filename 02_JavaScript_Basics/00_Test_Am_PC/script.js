
count = 0
for (let index = 7; index < 344; index++) {
    if (index % 2=== 0 && index % 12!=0) {
    count += index;
    }
    else if 
   (index % 12 === 0) {
    count +=(index * 3);
    }
    
}

console.log(count);


let data = "Super Duper".split("");

for (let index = 0; index < data.length; index++) {
   
    if (data[index] === "u" || data[index] === "e") {

        data[index] = "x";
    }
    console.log(data);
}
console.log(data);



sum =0;
while (sum) {
for (let index = 100; index >= 25; index-=5) {
    if(index == 50 || index ==40|| index ==30){
        console.log("Hier würde 50,40 oder 30 stehen, die sind aber heute leider nicht da")
        
    }
    
    console.log(index)
    
}
sum  = false
}
