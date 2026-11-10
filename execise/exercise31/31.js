




async function fechusers() {

try{



const response = await fetch("https://jsonplaceholder.typicode.com/users")

if(!response.ok){
    throw new error('http error status: $ {response.status} ')
}


const users =await response.json()
console.log("list:",users)





}catch(error){
    console.log("error is here ,error")

}
}
fechusers()
