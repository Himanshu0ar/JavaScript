function CreatePencil(name, price, color, company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
};


CreatePencil.prototype.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    };


let pencil1 = new CreatePencil("Natraj", 10, "red", "Natraj");
let pencil2 = new CreatePencil("Apsara", 15, "blue", "Apsara");
let pencil3 = new CreatePencil("Doms", 20, "green", "Doms");