





// 1


function delayblock (){
    alert ("delay user data")
    return {id:1 , name:"ahmed "}
}
console.log("start delaying user data")
const user = delayblock()
console.log("user data :", user)
console.log("this message is delaying")






function getuserdata (callback){
    setTimeout(() => {
        const userdata = {id:2,name:"shire"}
        callback(userdata)
    }, 4000);
}
console.log(" starting to fech user data")

getuserdata(function(user){
    console.log("user data is :", user)
})
console.log("get immediately")