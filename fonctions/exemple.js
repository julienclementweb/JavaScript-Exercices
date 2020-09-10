
function calculImc(t, p) {

    let taille = prompt('Quelle est votre taille (en mètres) ?');
    let poids = prompt('Quel est votre poids ?');

    let imc = poids / (taille * taille);
    return alert('Votre IMC est de ' + imc);
}

calculImc();

// (function() {console.log('fonction anonyme')})();


// function prevoirAge() {
//     age = prompt("Entrez votre âge : ");
//     return Number(age) + 1; // ou parseInt(age)
// }
// alert("Vous avez " + prevoirAge() + " ans.")


// let prepare = 10, cooking = 15;
//
// function cook(nbCakes, prepareTime = 10, cookingTime = 15){
//     result = nbCakes * (prepareTime + cookingTime);
//     return result;
// }
// let chocolate = cook(4);
// let fraise = cook(1, 20);
// console.log(fraise + chocolate);


// function hello(firstName) {
//     alert('Hello ' + firstName);
// }
// hello('Julien');


// let scream =""; // variable globale
//
// function warScream() {
//     scream = "Die !!" // variable locale
//     alert(scream);
// }
// warScream();
