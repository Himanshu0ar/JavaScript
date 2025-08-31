//localStorage:- apke browser ke andr data store krna jo ki browser band hone pr bhi dlt nhi hne wala  --> ~5MB
//localStorage me kewal string hi add kr skte hai lekin hm array ya objects ko JSON.stringify se string banaege or use get krne ke liye JSON .parse use krenge.
//sessionStorage :- ye apka data tempararily store krta hai mtlb tab band hone pr data gya  --> ~5MB
//cookies:- ye bhi data store krta hai aur apka data browser ki cookie nam ki property me save hota hai aur ye kam data ke liye hota hai --> ~4KB
//cookie mein jo bhi data store karoge wo page reload hone pr automatically server pr jayega.


//loclStorage:-
//store kaise kare -> setItem
//data fetch kaise kare -> getItem
//remove kaise kare --> removeItem
//update kaise kare--> ye bhi setItem
//remove all -> clear()

localStorage.setItem("name","Himanshu"); //value set krne ke liye
let val = localStorage.getItem("name");
console.log(val)

//Same with SessionStorage.

//c