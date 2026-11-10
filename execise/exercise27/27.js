




function fetchuserdata (){

return new Promise ((resolve,reject)=>{

    setTimeout(()=>{
     const success = false
     if(success){
        resolve({id:4, name:"ali"})
     }else{
        reject("is failed")
     }

    },2000)
})

}
fetchuserdata()
.then(data=>console.log("user data :" , data))
.catch(error=>console.log("error :",error))