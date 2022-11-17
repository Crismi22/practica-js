//Operaciones básicas, Tipos de datos, Prompt y Alert

//-1-Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.

/*const num1 = Number(prompt('ingresa un numero'));
const num2 = Number(prompt('ingrese otro numero'));
const result = num1 + num2 

alert(result)*/


//-2-Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.

/*const grados = prompt('Ingresá una cantidad de grados Celcius');
const resultado = (grados * 9/5) + 32;

alert(`La conversión de ${grados} grados Celsius a Fahrenheit es: ${resultado}`);*/


//-3-Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5

/*const numero = Number(prompt('ingresa un numero'));
const dividir = numero / 10;

alert(`tu número se dividió por 10 y el resultado fúe ${dividir}`); */


//-4- Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a.

/*const a = [1, 2, 3];
const type = typeof (a);
// const type = typeof a

alert(type);*/


//===IF AND ELSE====//

//-5-Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.

/*const numero = Number(prompt('ingresa un numero'));

const esParOImpar = (numero) => {
    if(numero % 2 === 0){
    return (alert('par'))
    } else{
    return (alert('impar'))
    }
}
esParOImpar(numero)*/


//-6-Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log

/*const numero = Number(prompt('ingrese un numero divisible por 5'));
const resultado = numero % 5

if (resultado === 0) {
    console.log(`el numero ${numero} es divisible por 5`)
}else{
    console.log(`el numero ${numero} NO es divisible por 5`)
};
*/


//-7- Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log

//==pista: 55 jaja

/*const numero = Number(prompt('ingrese un numero'));
const resultado = numero % 5;
const resultado2 = numero % 11;

if (resultado === 0 && resultado2 === 0) {
    console.log(`el numero ${numero} es divisible por 5 y por 11`)
}else{
    console.log(`el numero ${numero} NO es divisible por 5 y por 11`)
};
*/


//-8- Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.

// NO SALIÓ


// const primerNum = prompt('Ingrese el primer numero');
// const segundoNum = prompt('ingrese el segundo numero');

/*const numeroMayor = () => {
    //const primerNum = prompt('Ingrese el primer numero');
    //const segundoNum = prompt('ingrese el segundo numero');

    if(primerNum > segundoNum) {
        return segundoNum
    } else{
         primerNum
    } 
}
alert(numeroMayor());
*/


//-9- Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario.

/*
const primerNum = prompt('Ingrese el primer numero');
const segundoNum = prompt('ingrese el segundo numero');

const mayor = (primerNum>segundoNum)?primerNum:segundoNum;
alert(mayor);
*/
   
    

//-10-Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.

/*
const dato = prompt('ingrese una palabra cualquiera');

const valor = ( dato ) => {
    if (dato.indexOf(dato[0] = i )) {
        return 'empieza con string'
    }else {
        return 'empieza con number'
    }
}

console.log(dato)
*/


//-11-Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.

/*
const lado1 = Number(prompt('ingrese un valor para el lado 1 del triangulo'));
const lado2 = Number(prompt('ingrese un valor para el lado 2 del triangulo'));
const lado3 = Number(prompt('ingrese un valor para el lado 3 del triangulo'));

const triangulo = (lado1, lado2, lado3) => {
    if( lado1 != lado2 && lado1 != lado3 || lado1 === lado2) {
        return alert('tu triangulo tiene 3 lados diferentes(?');
    }else alert('no es un dato valido')   
};

triangulo();
*/


//-12-Determinar si una palabra empieza con mayúscula o no.


// const palabra = prompt('ingresa una palabra');

// function tiene_mayusculas(texto){
//     for(i=0; i<texto.length; i++){
//        if (palabra.indexOf(texto.charAt(i),0)!=-1){
//           return true;
//        }else false
//     }
   
// }

// alert(tiene_mayusculas(palabra));



//-13-Determinar si un año dado es bisiesto

/*
const esAnioBisiesto = (year) => {
    return (year % 400 === 0) ? true : 
                (year % 100 === 0) ? false : 
                    year % 4 === 0;
};

console.log(esAnioBisiesto(2022))
console.log(esAnioBisiesto(1992))
console.log(esAnioBisiesto(2001))
console.log(esAnioBisiesto(2145))
*/
