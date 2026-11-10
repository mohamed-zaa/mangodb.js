const lists = document.querySelector('.lists')


function newItem (){

const addItem =document.createElement('li')
addItem.textContent= "dugsiiye 3"
lists.appendChild(addItem)

} 



function removeItem(){

if(lists.lastChild){
    lists.removeChild(lists.lastChild)
   
}else{
     alert("muuse kajoog")
}


}
