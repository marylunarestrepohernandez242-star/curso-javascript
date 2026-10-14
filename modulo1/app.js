console.log("hello world");
console.log("estoy aprendindo javascript.");

//variables y tipos de datos
//let edad = 25;
//const nombre="juan";

//console.log(nombre);
//console.log(edad);

//let ciudad = "madrid"; //se puede reasinar
//ciudad = "barcelona";

//const pais = "españa"; //variables que no se reasinar en el programa
//pais = "francia";

//tipos de datos
const nombre = "juan"; //string
const edad = 30;//number
const estudiante = true; //bolean
let temporada;// undefined
const direccion = null;// null se usa para representar la ausencia del valor

console.log(typeof nombre); //"string"
console.log(typeof edad); //"number"
console.log(typeof esEstudiante); //"boolean"
console.log(typeof temporada); //"undefined"
console.log(typeof direccion); //"object" esto es un comportamiento conocido de javscript, null es considerado un obje0to

// la diferencia entre null y undefined
// undefined significa que una variable ha sido declarada para aun no se le ha asignado un valir
// null es un valor asignado a uana variable para indicar que  no tiene ningun valor

const nombreUsuario = "maria";
const edadUsuario = 25;

const mensaje = 'el nombre del usuario es ${nombreUsuario} y tiene ${edadUsuario} años.';
console.log(mensaje );

//operadores aritmeticos
const a = 10;
const b = 5;
 console.log (a+b); //suma:15
  console.log (a-b); //resta:5
   console.log (a*b); //multiplicacion:50
    console.log (a/b); //division:2
     console.log (a%b); //modulo:residuo de la division

     //operadores de comparacion
     console.log(a>b);// mayor que:true
      console.log(a<b);// menor que:false
       console.log(a>=b);// mayor o igual que: true
        console.log(a<=b);// maenor o igual que:false
         console.log(a===b);// igualdad estricta: false
          console.log(a==b);// igualdad:false
           console.log(a!==b);// desigualdad estricta true


//operadores logicos
const edadPersona = 20;
const tieneDocumento = true;
const puedeIngresar = edadPersona >= 18 && tieneDocumento; //true si la persona es mayor de dad 
console.log(puedeIngresar);//true

const esMayorDeEdad = edadPersona >= 18 || tieneDocumento;// true si la persona es mayor de edad
console.log(esMayorDeEdad);//true

const noPuedeIngresar = !puedeIngresar;// negacion  true si la persona no puede ingresar
console.log(noPuedeIngresar);//true

//conversion de datos
const precio = "100";
const cantidad = "5";

const total = Number(precio) * Number(cantidad); //convertimos las cadenas a numeros antes de multiplicar

console.log(total);//500

//desarrollar un programa que calcule el salario semanal de un trabajador,considerando
//horas trabajadas y tarfia por hora. agregar una bonificacion del 10% cuando el salario base supere $500.000

const horasTrabajadas = 48;
const tarifaPorHora = 12000;

const salarioBase = horasTrabajadas * tarifaPorHora;

let bonificacion = 0;
if (salarioBase > 500000){bonificacion = salarioBase * 0.10;}


const salarioTotal = salarioBase + bonificacion;

console.log("horas trabajadas:" + horasTrabajadas);
console.log("tarifa por hora: $" + tarifaPorHora);
console.log("salario base:$" + salarioBase)
console.log("Bonificacion: $" + bonificacion);
console.log("salario total semanal: $" + salarioTotal);


//estructuras condicionales
const edaad2 = 20;
 if(edaad2 >= 18) {
    console.log("eres mayor de edad");

 }else{
    console.log("eres menor de edad");
 }

 //condicionales multiples
 const calificacion = 85;

 if( calificacion >= 90){
    console.log("excelente");

 }else if(calificacion >= 80){
    console.log("muy bien")

 }else if(calificacion >= 70){
    console.log("suficiente");
    

 }else{
    console.log("insuficiente");
 }

 //condicionales compuestas

 const edad3 = 25;
 const tieneentrada = true;

 if (edad3 >= 18 && tieneentrada){
    console.log("puede ingresar")

 } else{
    console.log("no puede ingresar");
 }


 //un sistema de clasificacion de clientes por valor de compra 
 // compra menor de 100000 pesos descuento 0%

 console.log("SISTEMA DE CLASIFICACION DE CLIENTES");

// Solicitar el valor de compra
const entrada = prompt("Ingrese el valor de la compra:");

const compra = Number(entrada);

let descuento = 0;
let valorDescuento = 0;
let totalPagar = 0;

if (entrada === null || entrada.trim() === "" || !isFinite(compra)) {
    console.log("Error: debe ingresar un valor numerico valido.");
} else if (compra < 0) {
    console.log("Error: no se aceptan compras con valores negativos.");
} else {
    // Clasificar la compra y asignar descuento
    if (compra < 100000) {
        descuento = 0;
    } else if (compra < 300000) {
        descuento = 0.05;
    } else if (compra < 500000) {
        descuento = 0.10;
    } else {
        descuento = 0.15;
    }

    // Calcular descuento y total a pagar
    valorDescuento = compra * descuento;
    totalPagar = compra - valorDescuento;

    // Mostrar resultados
    console.log("Valor de compra: $" + compra);
    console.log("Descuento aplicado: " + (descuento * 100) + "%");
    console.log("Valor del descuento: $" + valorDescuento);
    console.log("Total a pagar: $" + totalPagar);
}