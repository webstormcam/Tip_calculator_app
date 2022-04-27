let bill_value = document.getElementById('input-price');
let bill='0.00';
let tip = document.getElementById('tip');
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

bill = this.value;




}

num_peeps.onkeyup = function(){
    let num = Number(num_peeps.value)
    console.log(typeof num)
    if(num<=0){
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

function tipAmountHuman(humans,cost,percent){
let gratuity = cost*percent;
let human = gratuity/humans;
return human
}



setInterval(function(){ 
    let tipPerperson=tipAmountHuman(2,10,0.05);
    tip.innerHTML= Math.floor(tipPerperson*100)/100;
    console.log(tip.innerHTML)
}, 1000);












