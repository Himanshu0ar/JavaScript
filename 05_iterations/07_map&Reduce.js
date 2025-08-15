//map sirf jab use krna hai jb apko ek naya array banana hai pichhle array ke data ke basis pr.
//map ke baad new array me or purane array me no. of elements equal hoge.
const myNumbers = [1,2,3,4,5,6,7,8,9]
newNumbers = myNumbers.map((num) => {return num + 10})
//console.log(newNumbers)

const newNums = myNumbers
.map((num) => num*10)
.map((num) => num + 1)
.filter((num) => num>=40)

//console.log(newNums)


/********************************************************REDUCE**********************************************************************/
//Reduce: jb array ko reduce krke ek element banana ho tb reduce use hota hai.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

//console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

//console.log(priceToPay);


//**************************************************************Find*********************************************************************
let arr = [1,2,3,4,5,6];
let va = arr.find(function (val) {
    return val === 1;
})
//console.log(va)


//find return krta hai phle element ko jo condition satisfy kre.
let newarr = [
    {id: 1, key: 1},
    {id: 2, key: 2},
    {id: 3, key: 1}
];

let newva = newarr.find(function (val) {
    return val.key === 1;
});
//console.log(newva)

//some: agr koi bhi element condition satisfy kr rha hoga to use bata dega.
let marks = [10,20,50,80];
let any = marks.some(function(val){
    return val >= 80;
})
//console.log(any)

//

//every: check all the elemnts are following the condition or not.
let score = [10, 30, 25, 90]
let check = score.every(function(val) {
    return val > 20
}) 
console.log(check)  