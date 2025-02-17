

let data = [
    {firstname: "Lukas", lastname: "Wagner", points: 30},
    {firstname: "Jonas", lastname: "Sinn", points: 34}, 
    {firstname: "Eric", lastname: "Kogler", points: 35},
];


/*
for (let index = 0; index < data.length; index++) {
    const element = data[index];

    console.log(element.firstname);
    
}

data.forEach(element => {
    console.log(element.lastname);
});

*/

function loadPeople() {
    let html = "";
    data.forEach(element => {
        html += "<div>" + element.firstname + " " + element.lastname + "</div>"

});

 document.getElementById("content").innerHTML = html;
}


loadPeople();