// EXO3
let Francois = {
    nom: "François",
    panier: ["Caprisun", "Ice-tea", "Kinder Bueno"],

    retirer() {
        for (let i = 0; i < 2; i++) {
            this.panier.push(sergrio.panier[0])
            sergrio.panier.shift()
        }
        console.log(this.panier);
        console.log(sergrio.panier);
    }

}

let sergrio = {
    nom : "Sergio",
    panier : ["Boisson", "Collation"],
}

  Francois.retirer();

// EXO4
 let vieilleDame ={
    âge : 74,
    nom :{
        prenom : "Charlotte",
        nom : "Super Nany"
    },
    
    moral : "mal",
    objet : "canne",

    parler(){
        if(this.moral == "mal"){
            alert(`Dégage ! et* la frappe avec sa ${this.objet}`);
        }else{
            alert(`Bonjour ${viell_homme.nom}`);
        }
    }
 }

let viell_homme ={
    nom : "Jacque",
    adoucir(){
        if(vieilleDame.moral == "mal"){
            vieilleDame.moral = "bien"
        }

    }
}

vieilleDame.parler();
console.log(vieilleDame);
viell_homme.adoucir();
vieilleDame.parler();
