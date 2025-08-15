const user = {
    username: "himanshu",
    rollno: 30,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}

//user.welcomeMessage()
// user.username = "Radhey"
// user.welcomeMessage()

//console.log(this)



// function chai(){
//     console.log(this);

// }

// chai()


//Arrow function:
const shriji = () => {
    let username = "Himanshu"
    console.log(this.username);
}

// shriji()


//const addTwo = (num1,num2) => num1 + num2
const addTwo = (num1,num2) => (num1 + num2)
console.log(addTwo(3,4))