const checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", search);

const lower = document.getElementById("lower");
const higher = document.getElementById("higher");
const digit = document.getElementById("digit");
const result = document.getElementById("result");

let array = [];
let letter_Count = 0;


function search(x, y) {
    if (lower.value < 0 || higher.value < 0 || digit.value < 0) {
        alert("Please enter 0 or positive numbers");  
    }
    if (lower.value > higher.value) {
        alert("Cannot be equal or greater than the number of starts and ends of the sequence")
    }
    if(digit.value >9){
        alert("Please enter digit between 0 - 9");  
        
    }
    
    else {
        for(let i = lower.value; i <= higher.value; i++){
            array += i;
        }
        array = array.split("").filter(x => x == digit.value).length;
        result.innerHTML = `The number ${digit.value} is ${array} times in the ${lower.value} - ${higher.value} series.`;
    }

    
    array = [];

}
search(lower, higher);