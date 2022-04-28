let bill_value = document.getElementById('input-price');
let picked;
let tip = document.getElementById('tip');
let total = document.getElementById('total')
let options = document.querySelectorAll('.tip-option');



for(i = 0; i<options.length;i++){
    options[i].addEventListener("click",function(e){
        let option = document.querySelectorAll(".tip-option");
        for(i=0; i<option.length;i++){
            option[i].classList.remove('click');
        }
    picked = this.value
    this.classList.add('click');
    console.log('clicked')
    console.log(picked)
if(num>0){
    numchange()  
}
   

});
}

let num_peeps = document.getElementById('people-counter');
let num=0.00;
let tom=0.00;
let total_person=0;
let tip_amount_per;
let error_text = document.getElementById('error-text')



let numchange = bill_value.onkeyup = function(){
    console.log(`This is ${num}`)
    if(num>0){
        tom=bill_value.value;
        total_person=tom/num
        total.innerHTML=total_person.toFixed(2);
     
    } else{
        total.innerHTML = this.value;
      
    }


  if(tom>0){
        tip_amount_per = (tom*picked)/num;
        tip.innerHTML=tip_amount_per.toFixed(2);
        console.log(typeof total.value)
        console.log(typeof tip_amount_per)

  }

    

    
    }







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
       numchange()
        
    }

    

    

    
   

    // if bill is filled for people
    // if bill is filled for tip
   
}






















