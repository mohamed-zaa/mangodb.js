










const people = [


{
  name : "ali" ,
age : 45,
city: "berbera"



},



{
  name : "hasan" ,
age : 99,
city: "burco"



},



{
  name : "axmed" ,
age : 12,
city: "basaso"



},


];
for (let person of people){
  console.log("---");

for(let key in person){
  console.log(key + ":", person[key]);
}

}