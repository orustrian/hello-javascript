/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// 1. Crea un array que almacene cinco animales
      let animal=["leon","caballo","Pollo","tigre","vaca"]
      console.log(animal);
// 2. Añade dos más. Uno al principio y otro al final
       animal.unshift("mono")
       console.log(animal)

       animal.push("perico")
       console.log(animal)
// 3. Elimina el que se encuentra en tercera posición
        animal.splice(3,1)
      console.log(animal)
// 4. Crea un set que almacene cinco libros
      myset = new Set (["Fisica 1","Fisica 2","Fisica 3","Fisica 4","Fisica 5"])
      console.log(myset)
// 5. Añade dos más. Uno de ellos repetido
      myset.add("Fisica 1")
      myset.add("Fisica 6")
      console.log(myset)
// 6. Elimina uno concreto a tu elección
      myset.delete("Fisica 2")
      console.log(myset)
// 7. Crea un mapa que asocie el número del mes a su nombre
       
      meses= new Map([
            ["1","Enero"],
            ["2","Febrero"],
            ["3","Marzo"],
            ["4","Abril"],
            ["5","Mayo"],
            ["6","Junio"],
            ["7","Julio"]
      ])
      
      console.log(meses)
      
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
        meses.has('5')== true ? console.log(meses.get("5")):console.log("No existe")             
 
// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set(["8"], "Agosto");
meses.set(["9"], "Septiembre");
meses.set(["10"], "Octubre");
meses.set(["11"], "Noviembre");
     console.log(meses)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map..
let myarr3 =["uno","dos","tres","cuatro"]
console.log(myarr3) 

let myset3  = new Set(myarr3)
console.log(myset3)
