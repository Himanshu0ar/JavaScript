//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "radhey@gla.ac.in",
    fullname : {
        userfullName : {
            firstName : "Himanshu",
            lastName : "Dubey"
        } 
    }
}

// console.log(regularUser.fullname.userfullName.firstName)


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1 , obj2}   //objects in object.
// console.log(obj3)

// const obj4 = Object.assign({}, obj1 , obj2)   //return two objects as an object.
// console.log(obj4) 


// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))      //both return an array.
 

// console.log(tinderUser.hasOwnProperty('idll'))     //return boolean of asked question that it has specific key/value or not.

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor   //m1
 
const {courseInstructor} = course   //m2
console.log(courseInstructor)

