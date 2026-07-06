// //tipos de variable

// let dejaque = "hola" //Puede cambiar
// const constante = "Constante" //constante, no se reasigna mas adelante

// //tipos de valores

// //primitivos

// let a = "Hola como estas" // string lleva comillas
// let b = 45 // number
// let c = true / false // booleanos
// let d = 3 == 3 //True
// let e = 2 == 3 //False
// let f = null //nulo-vacio
// let g = undefined //no definido

// //Otros

// //Array
// let array = ["Hola", 5, true, "Horacio", ["otro", "array"]];

// //Objeto
// let persona = {
//     name:"Maria",
//     apellido:"Rodriguez",
//     edad:30,
//     ciudad:{
//         nombre:"Madrid",
//         cp:5263,
//     }
// };

// //operadores

// 2>1 //Mayor que
// 2<=2 //Menor que
// 1 == "1" //igual que
// 1 === 1 //exactamente igual que
// 1!==1 // NO es igual que
// 1==1 && 2==2 //And Y
// 1==1 || 2==2 //Or O

// //funciones

// function suma(a,b){
//     return a + b
// }

// const funcionArrow = (a,b) => {
//     return a + b
// }

// //Statements If

// let edad = 16
// let nacionalidad = "española"

// if (edad >= 18){

//     //console.log("Eres mayor de edad")

// } else if (edad >= 16){

//     //console.log("Eres casi mayor de edad")

// } else {

//    // console.log("Menor de edad")

// }

// //Ternario

// let ternario = edad >= 18? "Mayor de edad" : "Menor de edad"

// let ternario2 = edad >= 18 && nacionalidad == "española" ? "Mayor de edad y español" : edad >=16? "Eres casi mayor de edad" : "Menor de edad"


// //For Loop - Bucle For

// // desde ; mientras ; Que hace al final de cada loop

// // for(let i=0; i<=5; i++){
// //     //console.log("loop numer:" + i)
// // }

// //FOR LOOP PARA ARRAYS

// let personas = ["Vanessa", "Juan", "Eduardo", "Horacio", "Fernando"];

// // for(let i=0; i < personas.length; i++){
// //     console.log("Hola me llamo" + " " + personas[i])
// // }

// //FOR LOOP CON IF

// for(let i=0; i < personas.length; i++){

// if(personas[i] === "Eduardo"){
//     console.log("No me cae bien Eduardo")
// }else {
//     console.log("Me cae bien" + personas[i])
// }
// }

// //FOR OF

// const frutas = ["Manzana", "pera"] ;
// console.log(frutas)

// frutas.push("banana")
// console.log(frutas)

// let arrayNumeros = [1,2,3,4,5,6,7,8,9,10]

// let find = arrayNumeros.find((n)=> n % 2 === 0) //Busca el primer numero par
// console.log(find)

function generarNumero() {
    const numeroRandom = Math.floor(Math.random() * 100) + 1;
    console.log("Numero generado:", numeroRandom);
    return numeroRandom;
}

if (typeof document !== "undefined") {
    const botonNumero = document.getElementById("botonNumero");
    const parrafo = document.getElementById("numero") || document.getElementById("demo");

    if (botonNumero) {
        botonNumero.addEventListener("click", function () {
            const numero = generarNumero();
            if (parrafo) {
                parrafo.textContent = numero;
            }
        });
    }
} else {
    generarNumero();
}