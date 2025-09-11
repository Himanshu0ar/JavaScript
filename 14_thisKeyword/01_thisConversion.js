//this:- ye ek special keyword hai kyunki jese waki sare keyword ki value ya unka nature same rhta hai this ki value ya nature badal jata hai is baat se ke aap use kaha use kr rhe hai ho.

//Ex:-
//1)Global Scope:-
console.log(this); //this ki value global scope me window object hota hai.


//2)Function Scope:-
function myFunc(){
    console.log(this); //function ke andar bhi this ki value window object hi hota hai.
}
myFunc();

//3)Object ke andar/method ke andar:-  
//object ke andar ke function ko method bola jata hai.
let myobj={
    name:"Radha",
    age:19,
    newfunc : function(){
        console.log(this)
    }
}
myobj.newfunc();  //object ke andar this ki value us object ko point krti hai jisme wo defined hai. yaha pe this ki value myobj ko point kr rhi hai.


//4)Event handler ke andar:-
document.querySelector("h1").addEventListener("click",function(){
    console.log(this); //event handler ke andar this ki value us element ko point krti hai jisme event listener laga hota hai. yaha pe this ki value h1 element ko point kr rhi hai.
});

//5)Class ke andar:-   //class ke andar bhi this ki value us class ko point krti hai jisme wo defined hai.
class Person{
    constructor(){
        console.log("heehee");
        this.n=12;
    }



