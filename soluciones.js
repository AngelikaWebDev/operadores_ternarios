// Ejercicio 1
let num = prompt("Ingrese un número");
let impar = (num % 2 !== 0) ? "Es impar" : "No es impar";

console.log(impar);

// Ejercicio 2
let year = +prompt("Ingrese un año");
let esBisiesto = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? "es bisiesto" : "no es bisiesto";

console.log(`El año ${year} ${esBisiesto}.`);

// Ejercicio 3
let num1 = +prompt("Ingrese el primer número");
let num2 = +prompt("Ingrese el segundo número");
let num3 = +prompt("Ingrese el tercer número");

let numMayor = (num1 > num2 && num1 > num3) ? num1 :
               (num2 > num1 && num2 > num3) ? num2 :
               (num3 > num1 && num3 > num2) ? num3 :
               "Todos son iguales";

console.log(`El número mayor es ${numMayor}.`);

// Ejercicio 4
let multi1 = +prompt("Ingrese el primer número");
let multi2 = +prompt("Ingrese el segundo número");

let multiplo =  (multi1 % multi2 === 0) ? `${multi1} es múltiplo de ${multi2}.` :
                (multi2 % multi1 === 0) ? `${multi2} es múltiplo de ${multi1}.` :
                "No son divisibles";

console.log(multiplo);

// Ejercicio 5
let numero1 = +prompt("Ingrese el primer número");
let numero2 = +prompt("Ingrese el segundo número");
let numero3 = +prompt("Ingrese el tercer número");

let igualesono = (numero1 === numero2 && numero1 === numero3) ? "Los tres números son iguales" :
                 (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) ? "Hay dos números iguales y uno diferente" :
                 "Todos los números son diferentes";

console.log(igualesono);
