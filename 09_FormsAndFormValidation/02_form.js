let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = PasswordRegex.test(password.value);

    let isValid = true;

    if(!emailans){
        document.querySelector("#emailError").textContent = "❌ Email is incorrect";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    } else {
        document.querySelector("#emailError").style.display = "none";
    }

    if(!passwordans){
        document.querySelector("#passwordError").textContent = "❌ Password is incorrect";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;
    } else {
        document.querySelector("#passwordError").style.display = "none";
    }

    if(isValid){
        document.querySelector("#resultMessage").textContent = "✅ EveryThing is Correct."
    }
})
