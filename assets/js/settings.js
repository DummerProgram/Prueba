var variable = "Incorrecto";/*Global*/ 
let Variable = "Correcto";/*Local*/

/*Lo valores primitivos nunca cambiaran su valor con la palabra reservada CONST mientras que
en una funcion, objeto, arreglo cambiara su contenido MAS NO EL TIPO DE OBJETO*/
const PI = 3.1416;/*No cambia su valor dentro del documento*/

/*Objeto*/ 
const objeto = { /*Siempre los objetos deben de ser declarados con const*/
    nombre: "User",
    edad: "22"
}
console.log(objeto);
objeto.correo = "exam@gmail.com"
console.log(objeto);

/*Arreglo*/
const arreglo = ["Uno", "Dos"];
console.log(arreglo);
arreglo.push("Tres");
console.log(arreglo);

/***************************************Cadenas de Texto****************************************/
/* Uso de Template*/
let nombre = "User", 
    apellido = "Name",
    cadena, etiqueta;

cadena = `Mi nombre es ${nombre} ${apellido}`;
console.log(cadena);

etiqueta = `
    <div>
        <div>
            <h1>
                Hola Mundo mi nombre es ${nombre} ${apellido}
            </h1>
        </div>
    </div>
`;
console.log(etiqueta);

/***************************************Numeros****************************************/
let numero = 28.789;

console.log(typeof numero);
console.log(numero.toFixed(2));/*Delimitar decimales*/
console.log(parseInt(numero));/*Convierte a entero */
console.log(parseFloat(numero));/*Convierte a decimal o flotante */

/***************************************undefined, null & NaN***************************************/
undefined/*Variable sin asignar dado por javascript*/
null/*Variable intencionalmente definida como vacia*/
NaN/*Cuando alguno de los datos no es un numero*/

/***************************************break & continue***************************************/
/*break; Forza el terminado de una iteracion */
/*continue;/*Salta una iteracion */

/***************************************Destructuración***************************************/
/*las variables se deben de llamar de la misma forma que los atributos de los objetos
o los elementos de los arreglos */
const numeros = [1, 2, 3];
const [uno, dos, tres] = numeros;
console.log(uno,dos, tres);

const persona = {
    nombre_obj:'user',
    apellido_obj:'name',
    edad_obj: 18,
}
const {nombre_obj, apellido_obj, edad_obj} = persona;
console.log(nombre_obj, apellido_obj, edad_obj);

/***************************************Objetos literales***************************************/
let empresa = "Nombre de la empresa",
    lugar = "lugar de la empresa",
    dueno = "dueño de la empresa";

const empresaObj = {
    empresa,
    lugar,
    dueno,
    trabajador:'user',
    lema(){
        console.log("El lema de la empresa es..");
    }
}

console.log(empresaObj.empresa);
console.log(empresaObj.trabajador);
empresaObj.lema();

/***************************************REST & Operador Spread***************************************/
function sumar (a,b,...c){ /*...c es un elemento REST que es un arreglo con el que puedes trabajar*/
    let resultado = a + b;
    c.forEach(
        function (n){
            resultado += n;
        }
    );

    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4,5,6,7,8,9,10));

const arreglo_1 = [1,2,3], /*Unir dos arreglos demasiados parametros*/
    arreglo_2 = [4,5,6];
const arreglo_3 = [...arreglo_1, ...arreglo_2];
console.log(arreglo_3);

/***************************************Arrow Functions***************************************/
const holaMundo = () => console.log('Hola Mundo'); /*Solo una linea de nuestra funcion*/
holaMundo();

const imprimirNombre = nombre => console.log(`Hola tu eres ${nombre}`); /*Si solo es un parametro se puede omitir () */
imprimirNombre('User');

const sumarNu = (a, b) => a + b;
console.log(sumarNu(12,14));

const restaNu = (a,b,c) => {
    let res = a-b;
    res = res - c;
    return res;
}
console.log(restaNu(12,14,1));

arreglo_3.forEach((numero,index) => console.log(`${numero} esta en la posicion ${index}`));/*Ejemplo de un arreglo con ayuda de un forEach*/

const objetoEjemp = { 
    nombre: 'User',
    funcion: () => {
        console.log(this);/*Pertenece a Objeto padre en este caso el Objeto Window */
    }
}
objetoEjemp.funcion();

/***************************************Clases***************************************/
class Animal{
    constructor(nombre,especie){
        this.nombre = nombre;
        this.especie = especie;
    }

    metodoNombre(){
        console.log(`Soy el animal ${this.nombre}`);
    }

    metodoEspecie(){
        console.log(`Soy la especie ${this.especie}`)
    }
}

const animal = new Animal('Perro', 'Canino');
animal.metodoNombre();

class Perro extends Animal{
    constructor(nombre, especie, edad){
        super(nombre, especie);
        this.edad = edad;
    }
    
    metodoEdad(){
        console.log(`Mi edad es: ${this.edad}`);
    }
}

const perro = new Perro('Perro', 'Canino', 10);
perro.metodoEdad();
perro.metodoNombre();