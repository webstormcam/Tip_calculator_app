let bill_value = document.getElementById('input-price')

let num_peeps = document.getElementById('people-counter')


bill_value.onkeyup = function(){
console.log(this.value)
}

num_peeps.onkeyup = function(){
    console.log(this.value)
}