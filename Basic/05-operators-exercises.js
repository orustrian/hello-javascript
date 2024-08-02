/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética
      let x=2+1
      console.log(x,'Suma')
      let y=2-1
      console.log(y,'resta')
      let z=4*2
      console.log(z,'multiplica')

      let m=4/2
      console.log(m,'divide')

      let e=2**3
      console.log(e,'Exponente')
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
      x +=2
      console.log(x,'el doble de x')
      y *=2
      console.log(y,'Y multiplicado x2')
      z -=2 
      console.log(z,'el valor de z menos 2')

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
       console.log(4>1)
       console.log(x>1)
       console.log(x==5)
       console.log(y!=x)
       console.log(y<x)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(4<1)
console.log(x<1)
console.log(x!=5)
console.log(y==x)
console.log(y>x)
// 5. Utiliza el operador lógico and
      console.log(4>1  && 2<1)
// 6. Utiliza el operador lógico or
console.log(4<1  || 2>1)
// 7. Combina ambos operadores lógicos
console.log((4>1  && 2<1) || (4<1  || 2>1) )
// 8. Añade alguna negación
console.log(!true )
// 9. Utiliza el operador ternario
let mayor =3
let menor=2

mayor>menor ? console.log("x es mayor") : console.log("y es menor")
// 10. Combina operadores aritméticos, de comparáción y lógicas 

console.log( 4+5>2+1)