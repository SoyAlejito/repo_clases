console.log("hola mundo")

/* LENGUAJE DE PROGRAMACION INTERPRETADO POR EL V8ENGINE
SE EJECUTA EN EL NAVEGADOR(EN EL FRONT END)
ES UN LENGUAJE DE ALTO NIVEL(ALTO NIVEL: MIENTRAS MAS ARRIBA MAS IGUAL AL LENGUAJE HUMANO) */

/* TIPOS DE DATOS */
    /* Datos Primitivos 
Number : Números como los conocemos nosotros
8  0  -2  3.14(no es decimal, es flotanto(float))



Nan : Lo devuelve cuando una operacion no la puede resolver. si ya hay un nan, siempre va a dar nan. Nan + 1 = Nan   Nan + 5= Nan


Infinity

String : Textos
"hola mundo" "pepe" "8"

Boolean : Valores true or false
    true/false


Null : Ausencia o nulidad de un dato
    Null


Undifined : No hay un dato definido
    undefined


Soy un mensajero que envia una carta, llega a la casa,  no atienten y me dicen que NO quieren recibir la carta
Estado_de_respuesta : false


Soy un mensajero que envia una carta, llega a la casa,  no atienten y me dicen que SI quieren recibir la carta
Estado_de_respuesta : true


Soy un mensajero que envia una carta, me estravio en el viaje
Estado_de_respuesta : Undefined


Soy un mensajero que envia una carta, llega a la casa, no me atienden
Estado_de_respuesta : Null

estad0 : undefined / mensajero sale de mensajeria
mensajero llega / estado : null


    /* Datos Objeto: Proximamente... */

/*  Constructor
    string(dato) transforma mi dato a string
    Numbre(dato) transforma mi dato a number
    Boolean(dato) transforma a dato booleano
*/



/* Operadores Aritmeticos 



        SIEMPRE DEVUELVE
            STRINGS
    + : Concatenacion : La concatenacion ocurre cuando uno de los valores es de tipo de dato STRING

    "HOLA" + "MUNDO"= "HOLAMUNDO"
    "HOLA" + 1 = "HOLA1"

    "hola" + 1
    Proceso interno : "hola" + string(1)
    Proceso interno : "hola" + "1" = "hola"



    SIEMPRE DEVUELVEN NUMEROS

    + : SUMA (no debe haber un string)
    1 + 1 = 2
    1 + true = 2

    1 + true
    Proceso Interno : 1 + number(dato)
    Proceso Interno : 1 + 1 = 2



    - : Resta

    / : Division

    * : Multiplicacion

    % : Resto de la division o modulo
*/

/* Number(null) = 0
    Null + true = 1

    numbre("pepe") = Nan   1 + "pepe" = Nan
*/

/* FALSY OR TRURTHY */
/*  
    Valores verdaderos: son infinitos
    Valores falsos: 

    si un dato al pasarlo por Boolean(dato) me da false, es un valor FALSY, si nme da un true, es un valor TRURTHY

    FALSY:
    0
    -0
    " "
    false
    null
    undefined
    NaN
*/

/* FUNCIONES NATIVAS

typeof() tipo de dato de un dato
isNaN() devuelve un booleano dependiendo de si es un NaN o no

*/

/* COMPARADORES

    Siempre devuelven booleanos

    == : es igual
    === : estricta igualdad (compara igualdad en valor y en tipo de dato)
    !=  : diferencia ()
    !== : estricta diferencia
    >
    <
    >=
    <=

*/

/*

van a escribir el tipo de dato y el resultado

"" == false  (boolean true)
1 !== false (boolean true)
NaN == undefined == NaN  (boolean false)
"" === Null (boolean false)
1 + " '1' " string "1 '1' "


5 + null

3 + 0

4 - "8"

null == NaN

"pepe" + " "

NaN + " "

true === 1
 */