/* OPERADORES LOGICOS */

/* !: NOT o negacion 
    nos da el valor booleano opuesto al dato que estoy negando
console.log( ! true)

|

    */




/* ||:OR o O 
seleccionar
si el primer valor es un valor falsy,va a seleccionar el segundo valor
si el primer valor es verdadero, va a seleccionar el primer valor

edad = obtenerEdad() || 0

console.log(0 || "pepe" || "juan")
*/




/* &&: AND o Y Logicos

Evalua si el primer valor es un trurlhy o un falsy
    -si es false:
        Devuelve el primer valor
    -si es true:
        devuelve el segundo valor

console.log(0 && 7)

console.log( true && 7)

se usa para usuarios al pedir email y cointraseña, si no tiene email directamente no toma la contraseña y al reves.

var estado = true
estado && console.log("Llego el mensaje")

estado && <h1>Llego el mensaje </h1>
*/


/*  ejercicio. que devuelve?
4 && false || "pepe" (devuelve pepe(string))

8 == "8" (true) || 1 === "1"  (true(booleano))


(null === NaN) || Boolean(NaN)
false porque los
tipos de datos son
distintos
null= ausencia
NaN= number(ningun numero)



numbre("1") === Number(1) && number ("pepe" + 1)  NaN

paso "1" a numero
y despues lo compara

true && number(pepe1)
NaN
*/


/* VARIABLES 
    es un espacio reservado quie almacena un dato (referencia), este debe tener un identificadosd eñ cual usaremos para obtener eñ dato

    javascript es un lenguaje debilmente tipado y de tipado dinamico
    debilmente tipado = no necesito especificaar que tipo de dato es mi variable
    tipado dinamico = puede variar una variable de tipo de dato
*/



/* var edad = 50
edad = "pepe"
console.log(edad) */




/* TIPOS
VAR: 
    tiene hoisting? SI tiene
    se puedde reasignar? SE puede
    se puede redeclarar? SE puede
    valor implicito en undefined? SI tiene
    el alcance de var siempre ses global

CONST
    tiene hoisting? NO tiene
    se puedde reasignar? NO se puede
    se puede redeclarar? NO se puede
    valor implicito en undefined? NO tiene valor implicito

LET
    tiene hoisting? NO se puede
    se puedde reasignar? SE puede
    se puede redeclarar?    NO se puede/se puede si el bloque es distinto
    valor implicito en undefined?  SI


    Hoisting: es la capacidad de una variable de ser llamada antes de su declaracion
    Declaracionm: es cuadno creamos nuestro variable
        ej: var edad => estoy declarando la variable con el identificador de edad
    <Tipo de variable> Identificador = data
        ej: var nombre = "pepe"
        var edad => estoy declarando la variable con el identificador edad
*/


/* var nombre = "pepe"
var nombre = "juan"

console.log(nombre) */



/* let nombre = "pepe"
nombre = "julieta"
console.log(nombre) */


/* BLOQUES Y AMBITOS */
/* VAR */
/* var nombre = "pepe"
{
    alcance local
    /* BLOQUE DE CODIGO 
    var nombre = "juan"
    console.log(nombre)
}
*/
/* var nombre_1 = "maria"
{
    /* pepe 
    var nombre_2 = "pepe"
    {
        /* juan 
        var nombre_3 = "juan"
    }
}

console.log(nombre_1)
console.log(nombre_2)
console.log(nombre_3) */


/* LET */
/* let nombre = "pepe"
{
    let nombre = "juan"
    console.log(nombre)
}
console.log (nombre) */

/* let nombre = "maria"

{
    let nombre = "pepe"
    console.log(nombre)
    {
        let nombre = "juan"
        /*nombre = "juan" se puede comportar como un var, reasigna un nombre
        console.log(nombre)
    }
    console.log(nombre)
}
console.log(nombre) */

const PI = 3.14