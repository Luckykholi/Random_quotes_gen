

let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");   
let Rest = document.getElementById("reset");
let count = document.querySelector(".count");



//this number will be incremented 
increment.addEventListener("click", function() {
    let value = parseInt(count.innerHTML);
    value++
    count.innerText = value;
})

//this number will be Decremented
decrement.addEventListener("click",function() {
    let valueDecrement = parseInt(count.innerHTML);
    valueDecrement--
    count.innerHTML = valueDecrement;
})

Rest.addEventListener("click", function() {
    count.innerHTML = 0;
})