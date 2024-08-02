// 1. Operadores aritmeticos

let a=5
let b=10

console.log(a+b, 'suma')//suma
console.log(a-b, 'resta')//resta
console.log(a*b,'multiplicacion')//multiplicacion
console.log(a/b, 'division')//division

console.log(a%b, 'modulo')//modulo

console.log(a**b, 'exponente')//exponente
a++
console.log(a, 'incremento')//incremento

b--
console.log(b, 'decremento')//decremento

// 2. Operadores de asignacion
let myVariable=2
console.log(myVariable) 
myVariable+=2
console.log(myVariable) 

// 3. Operadores de comparacion
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a==6) //igualdad por valor
console.log(a=="6") //igualdad por valor

console.log(a===6) //igualdad por identidad
console.log(a==="6") //igualdad por identidad
console.log(a != 6) //igualdad por identidad
console.log(a!=="6") //igualdad por identidad

console.log(0== false)  
console.log(1== false)  
console.log(2== false)  

console.log(0== "")  

// 4. truthy values (valores verdaderos)
//Todos los numeros positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacias 
//El boolean true

//5.Falsy values (valores falsos)
//0
//0n
//Null
//undefined
//NaN
// El boolean false
//Cadenas de texto vacias

//6. operadores logicos

//and (&&)

console.log(5>10 && 15 >20 )
console.log(5<10 && 15 <20 )
console.log(5<10 && 15 >20 )
console.log(5>10 && 15 >20  && 30>40 )


//OR (||)

console.log(5>10 || 15 >20 )
console.log(5<10 || 15 <20 )
console.log(5<10 || 15 >20 )
console.log( 5>10  && 15>20 || 30 >40 )
console.log( 5>10  && 15>20 || 30 <40 )
 
// not (!)

console.log(!true)
console.log(!false)

// Operadores ternarios
const isRaining=true 

isRaining ? console.log("esta lloviendo") : console.log("No esta lloviendo")