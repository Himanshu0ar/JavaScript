//hme seekhna hai factories banana, mtlb ki aap ek bar blueplint bnao ki har object kaisa dekhega aur hm log nye objects with different values bana payege, yahi upar upar se kam
//   hai oops ka.

function CreatePencil(name, price, color, company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = color;
        document.body.appendChild(h1);
    };
};


let pencil1 = new CreatePencil("Natraj", 10, "red", "Natraj");
let pencil2 = new CreatePencil("Apsara", 15, "blue", "Apsara");
let pencil3 = new CreatePencil("Doms", 20, "green", "Doms");