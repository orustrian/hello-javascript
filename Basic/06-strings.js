//1. strings 
let myName="Oliver"
let greeting="Hola, "+ myName
console.log(greeting)
console.log(typeof greeting)

//2. Longitud
console.log(greeting.length)
console.log(greeting[0])
console.log(greeting[1])

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Oliver"))
console.log(greeting.indexOf(","))
console.log(greeting.includes(","))
console.log(greeting.slice(0,10))
console.log(greeting.replace("Oliver","Leaho"))

//3. Template literals (plantillas literales)

let message= `hola, este es mi 
curso de javascript`

let email="olirustrian@gmail.com"
console.log(message)
console.log(`hola, ${myName}! tu email es ${email}`) //ejemplo de interpolar



