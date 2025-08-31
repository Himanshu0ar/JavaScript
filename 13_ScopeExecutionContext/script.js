//scope:- scope hai ke aap apne created variables and functions kaha tak use kr skte ho.
//global scope
//block scope
//functional scope

//execution context:- js sbse phle jaise hi apka function dekhta hai to sbse phle execution context banata hai, ye ek process hai jo ki do different phases mein chlti hai, memeory phase and dusre ka naam execution phase.

//lexical scope:- ki aap kaha pr physically available ho ye poori tareeke se depend krta hai aap kya access kro paoge.
//global scoping:- kaha se call kr rhe ho us pr depend krega ki kya value milegi.

//closures:- ye hote hain functions jo ki kisi parent function ke andar ho aur andr waa function return ho rha ho, and returnng function use kre, prent function ka koi variable.
//ye sach hai function ke khtm hone pr apka function and uske variables khtm ho jate hai , pr jb bhi closures bnte hai to apka function aur uske variables ka ek backlink ban jata hai aur uska naam hota hai [[enviroment]].


//toster:-
function createToster(config){
    return function(notification){
        let div = document.createElement("div");
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white": "bg-gray-100 text-black"} bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none`;        
        div.textContent = notification;

        document.querySelector(".parent").appendChild(div);

        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000);
    
    };       
}

let toster = createToster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,
});

toster("Download Completed");
setTimeout(() => {
    toster("File Deleted") 
},2000);