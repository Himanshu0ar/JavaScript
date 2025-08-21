let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

//change
btn.addEventListener("click", function(){
    fileinp.click();
})

fileinp.addEventListener("change", function(dets){
    const file = dets.target.files[0];
    if(file){
        btn.textContent = file.name;
    }else{
        btn.textContent = "Upload File";
    }

})