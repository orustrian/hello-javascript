/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto
let cad='buen dia'
let cad2=' Oliver'
console.log(cad+cad2)
// 2. Muestra la longitud de una cadena de texto
console.log( cad.length)
// 3. Muestra el primer y último carácter de un string
console.log(cad[0]+cad[7])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(cad.toUpperCase())
// 5. Crea una cadena de texto en varias líneas
 let cad3 =`esta
 es 
 una 
 prueba`
 console.log(cad3)
// 6. Interpola el valor de una variable en un string
  let num=4
  let chr5="tu edad es :"
  console.log(` ${chr5}  ${num} `  )
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cad33='el correo electronico del usuario'
 console.log(cad33.replace(/\s+/g,"-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
       console.log(cad3.includes('una'))
// 9. Comprueba si dos strings son iguales
let ca1='hola'
let ca2='hola'
console.log(ca1==ca2)
// 10. Comprueba si dos strings tienen la misma longitud
let st1="busqueda"
let st2="de algo"
console.log(st1.length==st2.length)
