// FONCTIONS FLECHEES

// let maFonction = () => {console.log('test')};

// maFonction();


// LES FERMETURES (CLOSURES) une fonction dans une fonction

// function bonjour(prenom) {

//     let result = "Bonjour " + prenom;
//     let maClosure = () => {
//         console.log(result)
//     }
//     return maClosure;
// }

// let maFonction = bonjour('Julien');
// maFonction();

function timer() {
    let secondes = 0;

    let maClosure = () => {
        return ++secondes;
    }
    return maClosure;
}

let monTimer = timer();
console.log(monTimer());
console.log(monTimer());