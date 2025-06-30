// grabbing html element
let countEl = document.getElementById("count-el")
// let countEl = document.querySelector("#count-el") // for id we must add /#' infront of the name and '.' for the class.

let saveEl = document.getElementById("save-el")

// variables
let count = 0;

// logic  '
function increment(){
    count += 1;
    countEl.innerText = count;
}
increment()

function decrement(){
    count -= 1;
    countEl.innerText = count;
}
decrement()
function multiplier(){
    count *= 2;
    countEl.innerText = count;
}
multiplier()

function save(){
    let countstr = count + ", "
    saveEl.textContent += countstr

    count = 0
    countEl.innerText = count;
    
}

function reset(){
    saveEl.innerText = "Previous Value : ";
    count = 0;
    countEl.innerText =  count;
}

