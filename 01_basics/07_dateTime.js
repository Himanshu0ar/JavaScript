let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);  //object

//let myCreatedDate = new Date(2023, 0, 23)
//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date(2023,0,23,5,3)

//console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getDate());