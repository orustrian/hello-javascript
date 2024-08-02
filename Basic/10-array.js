//array
//Declaración de un arreglo
let myArray=[]
let myArray2=new Array()
console.log(myArray)
console.log(myArray2)

myArray=["oliver","rustrian","olirustrian",true]
myArray2=new Array(1,2,3)
console.log(myArray)
console.log(myArray2)

myArray2=new Array(3)
myArray2[0]="oliver"
myArray2[1]="rustrian"
myArray2[2]="olirustrian"

console.log(myArray2)

myArray=[]
myArray[2]="oliver"
myArray[1]="rustrian"
console.log(myArray)

//Metodos Comunes
myArray=[]
myArray.push("oliver") //agrega el ultimo elemento del array
myArray.push("rustrian")
myArray.push("olirustrian")
myArray.push(20)
console.log(myArray)

myArray.pop()  //elimina el ultimo elemento del array
console.log(myArray)

myArray.shift()  //suprime el primer elemento del array
console.log(myArray)


myArray.unshift("oliver",20)
console.log(myArray)

//length es una propiedad que da el tamaño del arreglo

console.log(myArray.length)

//clear limpia el arreglo
//myArray=[]
myArray=[]
console.log(myArray)

//slice devuelve una copia superficial de una porcion
myArray.push("oliver","rustrian","olirustrian",true)
let newArray=myArray.slice(1,2)
 
console.log(newArray)