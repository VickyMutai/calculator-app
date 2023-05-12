var display_box = document.getElementById("display-box")
function display(number){
    display_box.value += number;
}

function clearScreen(){
    display_box.value =""
}

function calculate(){
    var calculate = display_box.value;
    var calculation = eval(calculate)
    document.getElementById("display-box").value += " = "+calculation
}