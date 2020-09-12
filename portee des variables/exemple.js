// function timer(secondes) {

//     if(secondes > 0) {
//         console.log(secondes);
//         timer(secondes - 1);
//     }
//     else console.log(secondes);

// }

// timer(10);


function somme(nombre) {
    
    if(nombre == 1) {
        return 1;
    }
    else return nombre + somme(nombre - 1);
}
console.log(somme(5));