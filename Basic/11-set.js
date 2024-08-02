//set 

//Declaracion 
let myset = new Set()
let myset2={}

//Inicializandolo

myset = new Set (["Oliver","Rustrian","olirustrian",20,true,"algo"])
myset2= new Set()
console.log(myset)
console.log(myset2)

//Métodos comunes

//add y delete 

myset.add("nuevo DAto")
console.log(myset)

myset.delete("Rustrian")
console.log(myset)

//has

console.log(myset.has("Oliver"))
console.log(myset.has("Rustrian"))

//size

console.log(myset.size)

//convertir un set a array

let myarray = Array.from(myset)

console.log(myarray)

myset3 = new Set(myarray)
console.log(myset3)

//los set no admite duplicados

myset.add("nuevo DAto")
myset.add("nuevo DAto")
myset.add("Nuevo Dato")
console.log(myset)