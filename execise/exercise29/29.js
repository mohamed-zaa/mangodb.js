





async  function fetchuserdata(){
    console.log("start feching data")

const response = await fetch('https://jsonplaceholder.typicode.com/posts')

const data = await response.json()
console.log("response:",data)


}
fetchuserdata()