let bill_value = document.getElementById('input-price');

let tip = document.getElementById('tip');
let total = document.getElementById('total')
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
let num=0;

let error_text = document.getElementById('error-text')





num_peeps.onkeyup = function(){
     num = Number(num_peeps.value)
    if(num<=0){
        error_text.style.display ='block';
        error_text.innerHTML =`Can't be a zero`
        num_peeps.style.outline ='2px solid #E17457'
        console.log('Thats a zero')
       
    } else{
        error_text.style.display ='none';
        num_peeps.style.outline ='initial';
        num = Number(this.value)
        console.log(`${num} ${typeof num}`)
    }


    
   

    // if bill is filled for people
    // if bill is filled for tip
   
}


bill_value.onkeyup = function(){
    console.log(`This is ${num}`)
    if(num>0){
        total.innerHTML=this.value/num;
        console.log('cutting')
    } else{
        total.innerHTML = this.value;
        console.log('not cuttubg')
    }
    
    }



















