let bill_value = document.getElementById('input-price')
let games = document.querySelectorAll('.tip-option').forEach(item =>{
    item.addEventListener('click', event =>{
    item.style.backgroundColor ='#26C2AE'
    item.firstElementChild.style.color ='#00474B'
   
    })
    // item.addEventListener('mouseout',event=>{
    //     item.style.backgroundColor='rgba(24, 23, 23, 0.555)'
    //     item.firstElementChild.style.color ='white'
    // })
})
let num_peeps = document.getElementById('people-counter')



bill_value.onkeyup = function(){
console.log(this.value)

}

num_peeps.onkeyup = function(){
    console.log(this.value)
}


