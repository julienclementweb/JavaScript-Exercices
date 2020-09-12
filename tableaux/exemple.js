
// BOUCLE FOR IN

// let panier = ['fraise', 'bananes', 'poire'];

// for (const fruit in panier) {
//     console.log(panier[fruit]);
// }


// BOUCLE FOR OF

// let panier = ['fraise', 'bananes', 'poire'];

// for (const fruit of panier) {
//     console.log(panier.indexOf(fruit));
// }



// BOUCLE FOREACH

let listeDePays = ['France', 'Danemark', 'Angletere', 'Allemagne'];

// for (const pays of listeDePays){
//     console.log(pays);
// }

// listeDePays.forEach(function(pays){
//     console.log(pays);
// })

// listeDePays.forEach(pays => console.log(pays)); // fonction fléchée




let monTableau = ['un', 'deux','trois'];

// console.log(monTableau[monTableau.length - 1]); // pour afficher le dernier
                                                // élément d'un tableau

// AJOUTER UN ELEMENT DANS UN TABLEAU
monTableau.push('quatre');
monTableau.unshift('zero');

monTableau.pop(); // pour supprimer le dernier élément d'un tableau
monTableau.shift(); // pour supprimer le premier élément d'un tableau

monTableau.splice(0, 2); // supprimer 2 élements à partir de l'index 0

// console.log(monTableau.indexOf('deux'));
// console.log(monTableau.join(' / '));
// console.log(monTableau);




// Tableau à 2 dimensions


let monTableau2D = [
    ['Marc', 'Julien', 'Nina'], 
    ['Get', 'Clement', 'Fleury']
];
monTableau2D.splice(2,0,['30', '40', '35']);

// console.log(monTableau2D);

// console.log(monTableau2D[1][2]);

// monTableau2D[0].push('test');
// monTableau2D[0].shift();
// console.log(monTableau2D);
// console.log(monTableau2D[0].join(', '));







// Associatif

let monTableauAssociatif = {
    'Prénom' : 'Julien',
    'Nom' : 'Clément'
};

// console.log(monTableauAssociatif['Prénom']);

monTableauAssociatif['nationalite'] = 'Français';
// delete(monTableauAssociatif.Nom) // pour supprimer dans tableau associatif

// console.log(monTableauAssociatif);

// CONCATENER UN TABLEAU ASSOCIATIF A FOR IN ET FOR OF


function concatenate(tableau){
    let chaine ="";
    for (const valeur in tableau) {

        chaine += (valeur + ' : ' + tableau[valeur] + '\n');
    }
    return console.log(chaine);
}


concatenate(monTableauAssociatif);

// for (const valeur in monTableauAssociatif) {

//     chaine += (valeur + ' : ' + monTableauAssociatif[valeur] + '\n');
// }
// console.log(chaine);

