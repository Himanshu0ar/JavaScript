// object can be declared by literals and constuctors.
// singleton  -->formed by constructors
//object.create


const mySym = Symbol("key1")              //symbol

//object literals
const JsUsers = {
    name : "Shriji",
    "Full Name" : "Shrimati RadhaRani",     // it can be call by m2 but not by m1 as key is string and can not be defined w/o string. 
    age : 19,
    [mySym] : "Radha",                      //symbol
    location : "Barasana",
    email : "shrijiKrishna@gmail.com",
    isLoggedIn : false,
    lastLogin : ["Monday", "Tuesday"]

}

//to call the values by their keys:
console.log(JsUsers.email)             // m1
console.log(JsUsers["email"])          // m2
console.log(JsUsers["Full Name"])
console.log(JsUsers[mySym])            //symbol

JsUsers.email = "kishori@google.com"    //change/overwrite the values
Object.freeze(JsUsers)    //now anyone cannot change the value

