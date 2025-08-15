/*


+ - * / % **
= == ===
< > <= >= ! != !== !!
&& ||
?:


let score = "33"

console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)


//case-1:
let marks1 = "32aab"
let numberValue1 = Number(marks1)
console.log(typeof numberValue1)  //output: number
console.log(numberValue1)         //output: NaN

//case-2:
let marks2 = null
let numberValue2 = Number(marks2)
console.log(typeof numberValue2)   //output: number
console.log(numberValue2)          //output: 0

//case-3:
let marks3 = undefined
let numberValue3 = Number(marks3)
console.log(typeof numberValue3)   //output: undefined
console.log(numberValue3)          //output: NaN

//case-4:
let marks4 = true
let numberValue4 = Number(marks4)
console.log(typeof numberValue4)   //output: number
console.log(numberValue4)          //output: 1

//case-5:
let word1 = ""
let numberValue5 = Number(word1)
console.log(typeof numberValue5)   //output: number
console.log(numberValue5)          //output: 0

//case-6:
let word2 = "Radhey"
let numberValue6 = Number(word2)
console.log(typeof numberValue6)   //output: number
console.log(numberValue6)          //output: NaN


//case-7:
let word3 = ""
let boolValue1 = Boolean(word3)
console.log(typeof boolValue1)   //output: boolean
console.log(boolValue1)          //output: false


//case-8:
let word4 = "radhey"
let boolValue2 = Boolean(word4)
console.log(typeof boolValue2)   //output: boolean
console.log(boolValue2)          //output: true

//case-9:
let num1 = 55
let boolValue3 = Boolean(num1)
console.log(typeof boolValue3)   //output: boolean
console.log(boolValue3)          //output: true

*/


//      ************************************operations*******************************************
let str1 = "Hello"
let str2 = " Himanshu"
let Tstr = str1 + str2
console.log(Tstr)    // Hello Himanshu

console.log(2 + "3")       // 23
console.log("2" + 3 + 3)   //233
console.log(2 + "3" + 3)   //233
console.log(2 + 2 + "3")   //43