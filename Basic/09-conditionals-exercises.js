/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
      let nombre="peter"
      if(nombre=="oliver"){
        console.log(nombre)
      }
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
     let user="oliver"
     let pass="123"
     if (user=="oliver" && pass=="123"){
            console.log("Bienvenido")
     }
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num=-5
let mensa=""
if (num >0){
    mensa="positivo"
}else if (num==0){ 
    mensa="el numero es cero"
}else {
     mensa="negativo"
}
console.log(mensa)
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad=18 
let di=0
if(edad>=18){
mensa="puede votar"
}else {
di=18-edad
  mensa ="no puede votar, menor de 18 años le faltan " +di +" años"
}
console.log(mensa)
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const message = edad<=17 ? "es menor" : "es mayor"
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mesid=3
let letrero=""
if (mesid==1)
  {
    letrero="Verano"
  }else if(mesid==2)
      { letrero="Verano"}
      else if (mesid==3){ letrero="Primavera"}
      else if (mesid==4){ letrero="Primavera"}
      else if (mesid==5){ letrero="Invierno"}
      else if (mesid==6){ letrero="Invierno"}
  
      console.log(letrero)
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
 
let diasmes=0
if (mesid==1)
{
  diasmes=31
}else if(mesid==2)
    {diasmes=28}
    else if (mesid==3){diasmes=31}

    console.log('dias del mes ' +diasmes)
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idio="Spanish"
let idiomen=""
switch(idio)
{
  case "English":
    idiomen="Hello"
    break
    case "Spanish":
    idiomen="Hola"
    break
}
console.log(idiomen)
// 9. Usa un switch para hacer de nuevo el ejercicio 6

 
switch (mesid)
{
  case  1:
      letrero="verano"
      break
      case  2:
      letrero="verano"
      break
      case  3:
      letrero="otoño"
      break
      case  4:
      letrero="otoño"
      break
      case  5:
      letrero="invierno"
      break
      case  6:
        letrero="invierno"
        break
} 
// 10. Usa un switch para hacer de nuevo el ejercicio 7


 
switch (mesid)
{ 
   case 1: 
  diasmes=31
  break
   case 2:
     diasmes=28
     break
    case 3: 
      diasmes=31 
      break
}
    console.log('dias del mes con switch ' +diasmes)