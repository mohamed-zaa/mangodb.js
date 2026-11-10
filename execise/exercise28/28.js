






function fetchuserdata (){

return new Promise((resolve,reject)=>{

setTimeout (()=>{

const success = true

if(success){
    resolve({id:4, name:"ali"})
}else{
    reject("is fialed")
}

},2000)



})





}
async function displayuserdata (){
try{
    const user = await fetchuserdata()
    console.log(user)
} catch (error){
    console.log(err)
}


}
displayuserdata()