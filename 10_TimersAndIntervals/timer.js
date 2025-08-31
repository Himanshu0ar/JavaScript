//setTimeOut--> ek baar chlta hai
//setInterval-->  Bar bar chalta hai
//clearTimeOut--> clear kr deta hai

let count = 0;
let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText");

let intv = setInterval(function(){
    if(count <= 99){
        count++;
        progress.style.width = `${count}%`;
        percentText.textContent = `${count}%`;
    }else{
        document.querySelector("h2").textContent = "Downloaded.";
        clearInterval(intv);
    }
},3000/100);