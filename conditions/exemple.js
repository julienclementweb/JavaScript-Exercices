// CALCULATRICE
function somme(a, b) {
    return a + b;
}
function multip(a, b) {
    return a * b;
}
function sous(a, b) {
    return a - b;
}
function div(a, b) {
    if(a == 0 || b == 0){
        return alert('Vousne pouvez pas diviser un nombre par 0 !')
    }
    return a / b;
}


do {
    choix = prompt('Que voulez-vous faire ?\n\n 1 - Addition \n 2 - Multiplication \n 3 - Soustraction \n 4 - division');
} while ((choix !='1' && choix !='2' && choix !='3' && choix !='4') || choix == null);


do {
    nombre1 = prompt('Donnez un 1er nombre');
} while ((isNaN(nombre1)) || nombre1 =="" || nombre1 == null);

do {
    nombre2 = prompt('Donnez un 2ème nombre');
} while ((isNaN(nombre2)) || nombre2 =="" || nombre1 == null);




switch(choix){
    case '1' : resulat = somme(nombre1, nombre2); break;
    case '2' : resultat = multip(nombre1, nombre2); break;
    case '3' : resultat = sous(nombre1, nombre2); break;
    case '4' : resultat = div(nombre1, nombre2); break;
    default : alert('Euh..il y a un bug.'); break; 
}

alert('Voici le résultat : ' + resultat)




// let resultat;
// switch(resultat){
//     case '1' : add(nombre1, nombre2); break;
//     case '2' : multip(nombre1, nombre2); break;
//     case '3' : sous(nombre1, nombre2); break;
//     case '4' : div(nombre1, nombre2); break;
//     default : alert('Euh...il y a un problème.');
// }



// // EXCEPTIONS||

// try {
//     let reward = prompt("Récompense : epee, hache, arc");
//     let degat;

//     switch(reward){
//         case 'epee': degat=40; break;
//         case 'arc': degat=10; break;
//         case 'hache': degat=60; break;
//         default: throw new Error('petit malin');
//     }
//     document.write("vous avez choisi " + reward + " qui vaut " + degat)
// }
// catch(error) {
//     alert(error.message);
// }
// finally {
//     alert('fin du programme');
// }





// BOUCLES

// let i=0;

// while(i<5) {

//     if (i==3){
//         i++;
//         continue;
//     }
//     document.write('ligne' + i + '\n')
//     i++
// }


// for(let i=0; i<= 10 ;i++) {
//     document.write('salustucru !');
// }


// let prenom;

// do {
//     prenom = prompt('Prénom ?');
// } while(prenom == "" || prenom == null);

// alert('Bonjour ' + prenom)


// let i = 1;

// while(i < 5) {

//     console.log('Ligne' + i)
//     i++;
// }






// TERNAIRES

// let x = 5;
// (x > 3) ? document.write("x est sup à 3") : document.write("x inf a 3");

// if(x > 3) {
//     document.write("x est supérieur à 3");
// }
// else document.write("x est inféroeur à 3");

// let gareDepart = "Lyon";
// let gareArrivee = prompt('Où voulez vous aller ? ') || "Paris";
// let chauffeur = "Julien";

// if(gareDepart !="" || gareArrivee !="" ) {
//     document.write("le train va partir pour " + gareArrivee);
// }
// else document.write("couille dans le potage");



// OR / AND
// let gareDepart = "Lyon";
// let gareArrivee = "";

// if(gareDepart !="" || gareArrivee !="" ) {
//     document.write("le train va partir");
// }
// else document.write("couille dans le potage");



// // SWITCH

// let consommable = "biere";

// switch (consommable) {
//     case 'courgette':
//     case 'poireau':
//     case 'carrotte' : document.write("légume"); break;
//     case 'banane' : document.write('fruit'); break
//     default : document.write('ni fruit, ni légume'); break
// }



// let age = prompt("Quel est votre âge ?");

// if (age>=21){
//     document.write('Vous êtes majeur partout dans le monde');
// }
// else if(age>=18) {
//     document.write('Vous êtes majeur en France');
// }
// else document.write("Vous n'êtes pas majeur...");