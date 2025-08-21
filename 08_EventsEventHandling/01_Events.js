//Event mtlb hota hai koi action hua.
//Event Listner ka mtlb hai aapne koi action ka reaction diya.


//click
let h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
    h1.style.color = "Red"
});

//doubleclick
function dblclick(){
    p.style.color = "yellow";
}
let p = document.querySelector("p");
p.addEventListener("dblclick", dblclick);


//RemoveEventListner
p.removeEventListener("dblclick", dblclick);

//input
let inp = document.querySelector("input");
inp.addEventListener("input", function(dets){
    if(dets.data !== null){
        console.log(dets.data)
    }
});

//change:- Change event jb chlta hai jb aapka koi input select ho jaye ya text area me koi change ho.
let sel = document.querySelector("select");
let device = document.querySelector("#device");
sel.addEventListener("change", function(dets){
    device.textContent = `${dets.target.value} Device has Selected.`
})