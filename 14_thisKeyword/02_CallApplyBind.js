//call apply bind:-
//function ko  call krte wakt aap set kr skte ho ki uski this ki value kya hogi. iske liye hum call, apply aur bind method ka use krte hai.

let obj = {
    name: "Radha",
    age: 20,
};

function abcd(a,b,c){
    console.log(this);
}

//call method:-
abcd.call(obj); 
abcd.call(obj, 1,2,3); //1,2,3 are arguments of function abcd

//apply method:-
abcd.apply(obj, [1,2,3]); //1,2,3 are arguments of function abcd in array form 

//bind method:-
let fnc = abcd.bind(obj, 1,2,3); 
fnc();
//bind method apply or call ki tarah call nhi hota wo phle main function ki copy banata hai jo hme kisi variable me save krni hoti hai or fir us variable ko call krna hota hai.
//bind method returns a function jise hum baad me call kr skte hai.
//bind method me arguments ko hum array me nhi de skte hai.
//is directly nhi access kr skte hai. hume ise kisi variable me store krna padta hai aur fir us variable ko call krna padta hai.
