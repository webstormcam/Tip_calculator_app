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

let num_peeps = document.getElementById('people-counter');
let error_text = document.getElementById('error-text')



bill_value.onkeyup = function(){
console.log(this.value)

}

num_peeps.onkeyup = function(){
    if(Number(num_peeps.value)<=0||Number(num_peeps.value) ==='NaN'){
        error_text.style.display ='block';
        error_text.innerHTML =`Can't be a zero`
        num_peeps.style.outline ='2px solid #E17457'
        console.log('Thats a zero')
    } else{
        error_text.style.display ='none';
        num_peeps.style.outline ='initial';
    }
    console.log(this.value)
}




