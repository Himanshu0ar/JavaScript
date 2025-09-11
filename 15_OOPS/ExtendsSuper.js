class User{
    constructor(name, adddress, username, email, role) {
        this.name = name;
        this.adddress = adddress;
        this.username = username;
        this.email = email;
        this.role = "user";
    }

    checkRole(){
        console.log(`you are a ${this.name}`)
    }

    write(){
        let h1 = document.createElement("h1");
        h1.textContent = `User Name is ${this.name}`;
        document.body.appendChild(h1);
    }

}


class Admin extends User{
    constructor(name, adddress, username, email, role) {
        super(name, adddress, username, email);
        this.role = role;
    };

    remove(){
        document.body.querySelectorAll("h1").forEach((elem) => {
            elem.remove();
        });

    };

}

let user1 = new User("User", "Delhi", "ravi123", "ravi@gmail.com");
let a1 = new Admin("Admin", "India", "admin123", "admon@gmail.com");