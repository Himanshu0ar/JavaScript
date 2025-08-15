//Immediately Invoked Function Expression(IIFE)

(function radhe() {
    console.log(`Radhe Radhe`)
})();

//first()-->function definition.
//Second()-->execution.

//this is IIFE 
//to dead all the problems faced by pollution of global scope we use IIFE to immediately execution of function.

((name) => {
    console.log(`DB CONNECTED TbO ${name}`);
})("Himanshu");