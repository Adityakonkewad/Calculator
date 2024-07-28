let displaybox = document.getElementById("searchid");
let buttons = document.querySelectorAll("button");

let string = ''

buttons.forEach(element => {
    element.addEventListener('click', (b) =>{
        if(b.target.innerText == '='){
            string = String(eval(string))
            displaybox.value = string;
        }
        else if(b.target.innerText == 'AC'){
            string = ''
            displaybox.value = string;
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            displaybox.value = string;
        }
        else if(b.target.id == 'plusMinus'){
            string = String(-eval(string))
            displaybox.value = string;
        }
        else{
            string += b.target.innerText
            displaybox.value = string;
        }
    })
});