const accountId = 133442
/*
1. Blocked Scope
2. Cannot  be updated and redeclared.
3. must have to declare a value when declaring.
*/

let accountEmail = "Himanshu@gmail.com"
/*
1. new way of declaring.
2. blocked scope.
3. can be updated, but cannot be redeclared in same scope. 
*/

var accountPassword = "12345"
/*
1. old way.
2. functional scope
3. can be redeclared and updated.
*/

accountCity = "Jaipur"
/*
1. js will create a global variable named accountcity
2. It pollutes the global scope.
3. It can lead to bugs and conflicts with other variables.
4. In strict mode, it throws an error.
NOTE : For right practice we have to declare it with keywords like let, var, const.
*/

let accountState;

//accountId = 23


// accountEmail = "radhey@gmail.com"
// accountPassword = "21212121"
// accountCity = "Bengaluru"

// console.log(accountId)
// console.table([accountId , accountEmail , accountPassword , accountCity])
// console.log(accountState)      //output : undefined

//Temporal Dead Zone:- utna area jitne mein js ko pata hai ki variable exist karta hai pr wo aapko value nhi de skta.
//Hoisting:- jab ek variable liya jata hai to uska declaration part top par chla jata hai isi ko hosting khte hai.
