//Event Bubbling: jispe event ayega agr uspr listner nhi hua to event uske parent pr lisstner dhundega aur aisa krte hue upr ki taraf move karega.

let nav = document.querySelector("#nav");
nav.addEventListener("click", function(){
    alert("Clicked")
})