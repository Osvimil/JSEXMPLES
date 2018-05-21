//alert("Hola Mundo \n Qué facil es incluir \'comillas simples \' \n y \" comillas dobles \"");

/*
meses = ["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"];

switch (meses[60]) {
  case "ENERO":
    alert("Primer mes");
    break;
  case "FEBRERO":
    alert("Segundo mes");
    break;
  case "MARZO":
    alert("Tercer mes");
    break;
  case "ABRIL":
    alert("Cuarto mes");
    break;
    case "MAYO":
      alert("Quinto mes");
      break;
      case "JUNIO":
        alert("Sexto mes");
        break;
        case "JULIO":
          alert("Septimo mes");
          break;
          case "AGOSTO":
            alert("Octavo mes");
            break;
            case "SEPTIEMBRE":
              alert("Noveno mes");
              break;
              case "OCTUBRE":
                alert("Decimo mes");
                break;
                case "NOVIEMBRE":
                  alert("Onceavo mes");
                  break;
                  case "DICIEMBRE":
                    alert("Doceavo mes");
                    break;
    default:
    alert("Mes inexistente");
}
    */

/*
var verdadero = true;
var falso = false;
var verdadero2 = true;
var falso2 = false;

if(verdadero == true && verdadero2 == true){
  alert("SE CUMPLEN LAS DOS PROPOCICIONES");
}
if(falso==true || falso2 == false){
alert("SE CUMPLEN LAS DOS PROPOCICIONES O SOLO UNA");
}*/

/*
var n = 3;
var n2 = 5;
n++;
++n2;
console.log(n);
console.log(n2);
*/
/*
//CON EL PREFIJO SE INCREMENTA PRIMERO EL VALOR Y SE HACE LA OPERACION
var numero1 = 10;
var numero2 = 10;
++numero1;
console.log(numero1 +  numero2); // --> 21

//CON EL SUFIJO SE HACE LA OPERACION Y DESPUES EL INCREMENTO DE LA VARIABLE

var cheto1 = 20;
var cheto2 = 20;

var suma = cheto1 + cheto2;
cheto1++;
console.log(suma); // --> 40
console.log(cheto1); // --> 21
*/
var valores = [true, 5, false, "hola", "adios", 2];
/*
if(valores[3] > valores[4]){
console.log("El valor: "+valores[3]+ " es menor que: "+valores[4]);
}else{
console.log("El valor: "+valores[4]+ " es mayor que:"+valores[3]);
}*/
/*
if(valores[0] == true || valores[2] == false){
  console.log(valores[0]);
  console.log(valores[2]);
}*/

/*
var suma = valores[1] + valores[5] ;
var resta = valores[1] - valores[5] ;
var division = valores[1] / valores[5] ;
var multi = valores[1] * valores[5] ;
var residuo = valores[1] % valores[5] ;

console.log(suma);
console.log(resta);
console.log(division);
console.log(multi);
console.log(residuo);
*/
/*
var mostrado1 = false;

if(!mostrado1) {
  alert("Es la primera vez que se muestra el mensaje");
}

var mostrado = false;
var usuarioPermiteMensajes = true;

if(!mostrado && usuarioPermiteMensajes) {
  alert("Es la primera vez que se muestra el mensaje");
}
*/

/*
var numero1 = 5;
var numero2 = 8;

if(numero1 < numero2) {
  alert("numero1 no es mayor que numero2");
}
if(numero2 >=0) {
  alert("numero2 es positivo");
}
if(++numero1 <= numero2) {
  alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}*/

/*
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Introduce tu número de DNI (sin la letra)");
var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
letra = letra.toUpperCase();

if(numero < 0 || numero > 99999999) {
  alert("El número proporcionado no es válido");
}
else {
  var letraCalculada = letras[numero % 23];
  if(letraCalculada != letra) {
    alert("La letra o el número proporcionados no son correctos");
  }
  else {
    alert("El número de DNI y su letra son correctos");
  }
}*/
/*
var dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

for (i=0;i<7;i++){
  alert(dias[i]);
}*/
/*
var numero = prompt("Introduce un número y se mostrará su factorial");
var resultado = 1;

for(var i=1; i<=numero; i++) {
  resultado = resultado * i;
}
alert(resultado);
*/

/*
var numero = prompt("Cálculo de factorial");
var resultado = 1;
for(var i =1; i<=numero;i++){
  resultado = resultado * i;
}
console.log(resultado);
*/

/*
var equipos = ["América","Toluca","Santos","Tijuana"];

for (var variable in equipos) {
  alert(equipos[variable]);
}*/
/*
var mensaje = "Ce message contient beaucoup de mots super difficiles       ";
var mensaje2 = "Ce message contient beaucoup de mots super difficiles       ";
var res = mensaje.length;
var paroles = "Quelque choses comme ça"
*/

//var mayusculas = mensaje2.toUpperCase();
//var minusculas = mayusculas.toLowerCase();
//alert(res);
//alert(mayusculas);
//alert(minusculas+" Je veux ajouter cette parole parce que!");

//alert(paroles.charAt(3));

//alert(paroles.indexOf('c')); // 8
//alert(paroles.lastIndexOf('c')); // 1

/*
//SUBSTRING
var anouncement = "J\'adore écrire en français parce que c'est une langue très belle";
alert(anouncement.substring(40,0));*/

/*
//SPLIT
 var paroles = "On dit que travailler á ATEB c'est ne pas mal mais terrible";

 var mot = "parangaricutirmicuaro";
 var dividir = paroles.split(" ");
 var dividir2 = mot.split("");
 console.log(dividir);
 console.log(dividir.length);

 console.log(dividir2);*/

/*
 //length
 var vocales = ['a','e','i','o','u'];
 console.log(vocales.length);
*/
/*
//concat
 var paroles = 'Je l\"a adore á ma petite amie';
 var paroles2 = paroles.concat(" parce que elle est très belle");
 var paroles3 = paroles2.concat(" et bon je suis très hereux.");
 console.log(paroles3);
 */

/*
 //join, pop, push, shift, unshift, reverse
 // JOIN --> it unifies words
 // POP --> it removes an element from an array (the last one and it shows it)
 //SHIFT --> it removes the first element form the array and return it

 var solas = ["Bonjour","Je","suis","Oswaldo","et","Je","travaille"];
 var unir = solas.join(" ");

 var quitar = solas.pop();
 var poner = solas.push("beaucoup");
 var removido = solas.shift();
 var agregado = solas.unshift("Salut");


 console.log(unir);
 console.log(quitar);
 console.log(poner);
 console.log(removido);
 console.log(agregado);
*/
/*
//join, pop, push, shift, unshift, reverse
 var numeros = [1,3,5,7,9];
 var unir = numeros.join(" ");
 var quitar_ultimo = numeros.pop();
 var colocar_ultimo = numeros.push(10);
 var quitar_primero = numeros.shift();
 var poner_primero = numeros.unshift(0);

 console.log(numeros.length); //5
 console.log(unir);
 console.log(quitar_ultimo);
 console.log(colocar_ultimo);
 console.log(quitar_primero);
 console.log(poner_primero);
 console.log(numeros.reverse());
 */

/*
 var n1 = prompt("Ingresa No. 1: ");
 var n2 = prompt("Ingresa No. 2: ");

resultado = n1/n2;
resultado = resultado.toFixed(6);

 if(isNaN(resultado)){
   console.log("No permitido");
 }else{
   console.log("El resultado es: "+resultado);
 }*/

/*
var precio = parseInt(prompt("Precio del producto: "));
var impuesto = parseInt(prompt("Ingresa impuesto: "));

impuesto = impuesto/100;

 function calculoProducto(precio,impuesto){

   //var impuesto = 0.16;
   var gasto_envio = 100;
   var calculo_impuesto = precio * impuesto;
   var suma = precio + calculo_impuesto + gasto_envio;
   return suma.toFixed(6);
 }
 var funcion1 = calculoProducto(precio,impuesto);
 console.log(funcion1);*/

/*
 var numero = parseInt(prompt("Ingresa No para saber si es impar o par"));

 function elsaber(numero){
   if(numero % 2 == 0){
     console.log("Numero par");
   }else{
     console.log("Numero impar");
   }
   return numero;
 }
 var n = elsaber(numero);
 console.log("Tu numero fue: "+n+" por tanto obtuviste lo de arriba");
 */

/*
 var mensaje = prompt("Ingresa mensaje de a paps: ");
 function mencionar(mensaje){
   if(mensaje == mensaje.toLowerCase()){
     console.log("Tiene minusculas");
   }else if(mensaje == mensaje.toUpperCase()){
     console.log("Tiene mayusculas");
   }else{
     console.log("Contiene de los dos");
   }
 }
 var m = mencionar(mensaje);
 console.log(mensaje);*/

/*
 var mensaje = prompt("Ingresa mensaje para ver si es palindromo: ");

 function decifrar(mensaje){

  var uno = mensaje.join("");
  var dos = uno.reverse();

  if(mensaje == dos){
    console.log("PALINDROMO");

  }else{
    console.log("NO ES PALINDROMO");
  }
 }
 var n = decifrar(mensaje);
 console.log(mensaje);*/

/*
 var cadena = prompt("Ingresa mensaje para ver si es palindromo: ");
 function palindromo(cadena) {

  var resultado = "La cadena \""+cadena+"\" \n";
  //console.log(resultado);

  // Pasar a minusculas la cadena
  var cadenaOriginal = cadena.toLowerCase();

  // Convertir la cadena en un array
  var letrasEspacios = cadenaOriginal.split("");

  // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
  var cadenaSinEspacios = "";
  for(i in letrasEspacios) {
    if(letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }

  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();

  // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
  var iguales = true;
  for(i in letras) {
    if(letras[i] == letrasReves[i]) {
      // Todo bien
    }
    else {
      // Alguna letra es distinta, por lo que ya no es un palindromo
      iguales = false;
    }
  }

  if(iguales) {
    console.log(resultado +" es un palíndromo");
  }
  else {
    console.log(resultado +" no es un palíndromo");
  }
  return resultado;
}
var n = palindromo(cadena);
*/

/* declaracion de variable local dentro de una función
function Mensaje(){

  var mensaje = "J'écris en français";
  console.log(mensaje);
}
Mensaje();
*/

/*Variable declarada fuera de una función, la variable es global
var otro = "Vous etes capable d'écrire en français";
function Men(){

  console.log(otro);
}
Men();
*/

/* La variable mensaje se convierte en global ya que no tiene el var como declaración
function Mensaje(){
   mensaje = "J'écris en français";
}
Mensaje();
console.log(mensaje);
*/

/*
var t = "Toluca";
function Lesbiana(){
  var t = "Santos";
  console.log(t);
}
console.log(t);
Lesbiana();
console.log(t);
//FLUJO DE IMPRESION
/*
Toluca
Santos
Toluca
*/

/*
var t = "Toluca";
function Lesbiana(){
   t = "Santos";
  console.log(t);
}
console.log(t);
Lesbiana();
console.log(t);
//FLUJO DE IMPRESION
/*
Toluca
Santos
Santos
*/

/*
// BREAK
var chaine = "Dans quelque lieu du Mancha je ne veux pas";
var letras = chaine.split("");
var resultado = "";

for(i in letras){
  if(letras[i] == "e"){
    break;
  }else{
    resultado = resultado + letras[i];
  }
}
console.log(resultado);
*/

/*
var chaneque = "I will do everything for you";
var letruquis = chaneque.split("");
var r = "";
//console.log(letruquis);
for(i in letruquis){
  if(letruquis[i]=="d"){
    continue;

  }else{
    r = r + letruquis[i];
  }
}
console.log(r);*/

/*
var n = 0;
var numero = 100;
var i=0;
while(n<=numero){
  i = i+n;
  n++;
}
console.log(i);
*/


/*
var resultado = 1;
var numero = prompt("Ingresa tu número para calcular factorial: ");
do {
  resultado = resultado * numero;
  numero--;
} while(numero > 0);
alert(resultado);
*/

/*
var calificacion = prompt("Ingresa tu calificacion:");
calificacion = parseInt(calificacion);

switch (calificacion) {
  case 5:
    console.log("reprobaste");
    break;
  case 6:
    console.log("panzaste");
    break;
  case 7:
      console.log("leve");
      break;
  case 8:
      console.log("bien");
      break;
  case 9:
      console.log("orale");
      break;
  case 10:
      console.log("felicidades");
      break;
      default:
      console.log("Ingresaste un valor incorrecto o no alcanzas ni el cinco");

}*/
