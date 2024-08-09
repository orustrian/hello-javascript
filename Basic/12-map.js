//Map
   
   //Declaracion de Map
   let myMap = new Map()

   console.log(myMap)

   myMap= new Map([
    ["Name","Oliver"],
    ["Apellido","Rustrian"],
    ["email","olirustrian@gmail.com"],
])

console.log(myMap)


//set sirve para agregar o actualizar una clave de un  elemento

myMap.set("alias","olirustrian")
console.log(myMap)
myMap.set("Name","Oliver Leaho")
console.log(myMap)

//get sirve para recuperar un valor

console.log( myMap.get("Name"))

//has sirve para comprobar si existe una clave en un map

console.log(myMap.has("surname"))
console.log(myMap.has("email"))

//delete 

myMap.delete("email")
console.log(myMap)

//Key, values, entries devuelve el nombre de las claves
console.log(myMap.keys())

//value
console.log(myMap.values())

console.log(myMap.entries())

console.log(myMap.size)

//clear borrando todo el mapa
myMap.clear() 
console.log(myMap)
