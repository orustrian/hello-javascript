//Funciones

function myFunc(){
    console.log("hola mi funcion!")
}

for (let i=0;i<5;i++){ 
myFunc()
}

//Con parametros
function myFuncionConParametros(name){
    console.log(`¡hola, ${name}!`)
}

myFuncionConParametros("oliver")
myFuncionConParametros("rustrian")

//Funciones anónimas
const myfunction2 = function (name){
    console.log(`¡hola, ${name}!`)
}
myfunction2("Oliver Rustrian")

//Arrow functions

const myFunc3=  (name)=>{
    console.log(`¡hola, ${name}!`)
}

myFunc3("Leaho Burgos")

const myFunc4=  (name)=>
    console.log(`¡hola, ${name}!`)

myFunc4("Oliver Burgos")

//parametros

function sum(a,b)
{
    console.log(a+b)
}

sum(2,6)

function defaultSum(a=0,b=0)
{
    console.log(a+b)
}
defaultSum()
defaultSum(5)
defaultSum(4,3)

//Retorno de valores

function multi(a,b){
    return a*b
}

let result=multi(5,10)
console.log(result)

//Funciones anidadas

function extern(){
    console.log("funcion externa")
    function inter(){
        console.log("funcion interna")
    }
    inter()
}

extern()   //intern fuera del scope
 
 //Funciones de orden superior

 function applyFunc(func,param){
      func(param)
 }

 applyFunc(myFunc4,"Funcion de orden superior")

 //forEach

 myArray=[1,2,3,4]
 myset = new Set (["Oliver","Rustrian","olirustrian",20,true,"algo"])
 myMap= new Map([
    ["Name","Oliver"],
    ["Apellido","Rustrian"],
    ["email","olirustrian@gmail.com"],
])
 
myArray.forEach(function (value){
    console.log(value)
})

 myArray.forEach((value)=>console.log(value))

 myset.forEach((value)=> console.log(value))
myMap.forEach((value)=>console.log(value))