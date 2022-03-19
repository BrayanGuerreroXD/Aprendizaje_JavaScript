/*console.log("Hola Time of Software");
/console.log("Bienvenid@ al libro Aprende JavaScript en un fin de semana");

let texto = "Primer texto de la variable";
console.log(texto);
texto = "Segundo texto de la variable";
console.log(texto);

texto = "Alfredo";
console.log("Mi nombre es", texto);

let texto1 = "Texto 1";
let texto2 = "Texto 2";
console.log(texto1,texto2);

texto = "36";
console.log("Mi edad es %s años y vivo en %s",texto,"Madrid");
*/
const prompt = require('prompt-sync')();
//let informacionLeida = prompt('Escribe algo: ');
//console.log("Has escrito:", informacionLeida)
/*
let numero1 = parseInt(prompt('Escribe el primer número: '));
let numero2 = parseInt(prompt('Escribe el segundo número: '));
let resultadosuma = numero1 + numero2;
let resultadoresta = numero1 - numero2;
let resultadomultiplicacion = numero1 * numero2;
let resultadodivision = numero1 / numero2;
let resultadomodulo = numero1 % numero2;
let resultadoexponente = numero1 ** numero2;
console.log("Número 1:", numero1);
console.log("Número 2:", numero2);
console.log("Resultado suma:",resultadosuma);
console.log("Resultado resta:",resultadoresta);
console.log("Resultado multiplicacion:",resultadomultiplicacion);
console.log("Resultado división:",resultadodivision);
console.log("Resultado módulo:",resultadomodulo);
console.log("Resultado exponente:",resultadoexponente);


let numero1 = parseInt(prompt('Escribe el primer número: '));
let numero2 = parseInt(prompt('Escribe el segundo número: '));
let numero3 = parseInt(prompt('Escribe el tercer número: '));
let numero4 = parseInt(prompt('Escribe el cuarto número: '));
let resultado1 = (numero1 * numero2) + numero3 / numero4;
let resultado2 = numero1 * (numero2 + numero3 / numero4);
let resultado3 = numero1 * (numero2 + numero3) / numero4;
console.log("Operación: (%s * %s) + %s / %s = %s",numero1,numero2,numero3,numero4,resultado1);
console.log("Operación: %s * (%s + %s / %s) = %s",numero1,numero2,numero3,numero4,resultado2);
console.log("Operación: %s * (%s + %s) / %s = %s",numero1,numero2,numero3,numero4,resultado3);

//Codigo de Juansito
const isPalindrome = "juan-obregon"
const palindrome = (string)=>{
    let len = string.length;
    for (let index = 0; index < len / 2; index++) {
          if (string[index] !== string[len - 1 - index]) {
              return false
          }else{
            return true
          }

    }
}

palindrome(isPalindrome)
*/

const isPalindrome = "juan-obregon"
const palindrome = (string)=>{
    let boolean = false;
    for (let index = 0; index < string; index++) {
        if ((string.charCodeAt(index) >= 65 && string.charCodeAt(index) <= 90) || 
        (string.charCodeAt(index) >= 97 && string.charCodeAt(index) <= 122)) {
              boolean = true;
        }
    }
    if(boolean) console.log('No es palindromo');
    else console.log('Es palindromo');
}

palindrome(isPalindrome)