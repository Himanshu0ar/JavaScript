const name = "Himanshu"
const repoCount = 50

// console.log(name + repoCount + " Value");      //it is too old method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('himanshu')
console.log(gameName[0]);  
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(name.length);
console.log(name.charAt(4));
console.log(gameName.indexOf('m'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const url = "fifageorge@24j.com"
console.log(url.replace("24","26"))

