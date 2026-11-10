





const  citySelect= document.querySelector('#city')
const selectedCity = document.querySelector('#selectedCity')




 citySelect.addEventListener("change" ,function() {
    console.log("changed to ",  citySelect.value)
   selectedCity.textContent = ` selected city is :${citySelect.value}`
   

 } )




 