let bill_value = document.getElementById('input-price');
let picked;
let tip = document.getElementById('tip');
let total = document.getElementById('total')
let options = document.querySelectorAll('.tip-option');
let special_tip = document.getElementById('special-tippy');


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
    special_tip.value = null
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
let final;
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


  if(tom>0&&picked.value!=='NaN'){
        tip_amount_per = (tom*picked)/num;
        tip.innerHTML=tip_amount_per.toFixed(2);
    final = total_person+tip_amount_per;
      total.innerHTML= final.toFixed(2);

  }

    

    
    }


    special_tip.onkeyup = function(){
        picked = Number(this.value)/100
       console.log(picked)
       numchange()
    
    }

    






num_peeps.onkeyup = function(){
    num = Number(num_peeps.value)
    if(num<=0){
        error_text.style.display ='block';
        error_text.innerHTML =`Can't be a zero`
        num_peeps.style.outline ='2px solid #E17457'
        console.log('Thats a zero');
       
    } else{
        error_text.style.display ='none';
        num_peeps.style.outline ='initial';
        num = Number(this.value)
       numchange()
        
    }

    

    

    
   

    // if bill is filled for people
    // if bill is filled for tip
   
}






















