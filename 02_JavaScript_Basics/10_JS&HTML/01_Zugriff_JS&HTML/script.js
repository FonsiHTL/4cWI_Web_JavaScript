//document.getElementById("content").innerHTML = "Tolle Sache";

/*let element = document.getElementById("content");
element.innerHTML = "Tolle Sache";
*/


function buttonAddClicked() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    if (document.getElementById("add")) {

        let result = parseFloat(num1) + parseFloat(num2);
        console.log(result);
        document.getElementById("result").innerHTML = result;
    }
}

function buttonSubClicked() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    if (document.getElementById("sub")) {

        let result = parseFloat(num1) - parseFloat(num2);
        console.log(result);
        document.getElementById("result").innerHTML = result;

    }
}

function buttonMulClicked() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;


    if (document.getElementById("mul")) {

        let result = parseFloat(num1) * parseFloat(num2);
        console.log(result);
        document.getElementById("result").innerHTML = result;

    }
}

function buttonDivClicked() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;


    if (document.getElementById("div")) {

        let result = parseFloat(num1) / parseFloat(num2);
        console.log(result);
        document.getElementById("result").innerHTML = result;

    }
}    
