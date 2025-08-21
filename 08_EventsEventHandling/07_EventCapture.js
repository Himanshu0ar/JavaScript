// jab bhi aap click krte ho ya koi bhi event raise krte ho to apka jo event flow do phases mein chlta HTMLDetailsElement.

// phase1: event top level element se neeche ki taraf chalega
// phase2: event raised element se parent ki taraf jayega

// aur phle phase1 hota hai pr wo by default off rhti hai



let a= document.querySelector(".a");
let b= document.querySelector(".b");
let c= document.querySelector(".c");
let btn= document.querySelector("button");

btn.addEventListener("click", function(){
    console.log("Button Clicked");
});
c.addEventListener("click", function(){
    console.log("C Clicked");
},true);    //Event Capturing Activate by using true
b.addEventListener("click", function(){
    console.log("B Clicked");
});
a.addEventListener("click", function(){
    console.log("A Clicked");
},true);