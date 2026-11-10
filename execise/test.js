





function greet(name){
    console.log("hello ,",  name)
}

function processuserinput(callback){
    const name = prompt("enter your name")
    callback(name)
}
processuserinput(greet)