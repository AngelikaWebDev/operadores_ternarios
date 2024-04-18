# Operadores Ternarios
Un operador ternario en JavaScript tiene la siguiente estructura:
(condición) ? expresión_verdadera : expresión_falsa;
La condición es evaluada primero. Si la condición es verdadera, se devuelve la expresión verdadera, de lo contrario, se devuelve la expresión falsa.

Por ejemplo:
let edad = 20;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

En este ejemplo, si la edad es mayor o igual a 18, el mensaje será "Eres mayor de edad", de lo contrario, será "Eres menor de edad".


Veamos algo mas complejo:
let hora = 14;
let saludo = (hora < 12) ? "Buenos días" : (hora < 18) ? "Buenas tardes" : "Buenas noches";
console.log(saludo);

Aquí, dependiendo de la hora del día, se elige el saludo apropiado.

Recuerda que el uso excesivo de operadores ternarios puede hacer que tu código sea difícil de entender, así que úsalos con moderación y asegúrate de que tu código sea legible para otros desarrolladores.

Si quieres practicar realiza los ejercicios, los enunciados estan en el archivo ejercicios.js también estan las soluciones de los ejercicios en el archivo soluciones.js.
