//document.getElementById("content").innerHTML = "Tolle Sache";

/*let element = document.getElementById("content");
element.innerHTML = "Tolle Sache";
*/
function buttonClicked() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    
    let result = parseFloat(num1) + parseFloat(num2);
    console.log(result);

  
}   