let bill_value = document.getElementById('input-price')
let options = document.querySelectorAll('.tip-option');
for(i = 0; i<options.length;i++){
    options[i].addEventListener("click",function(e){
        let option = document.querySelectorAll(".tip-option");
        for(i=0; i<option.length;i++){
            option[i].classList.remove('click');
        }

    this.classList.add('click')
});
}

let num_peeps = document.getElementById('people-counter')



bill_value.onkeyup = function(){
console.log(this.value)

}

num_peeps.onkeyup = function(){
    console.log(this.value)
}


