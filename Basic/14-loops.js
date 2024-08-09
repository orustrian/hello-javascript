// Loops o bucles

//For

for (let a=1;a<=5;a++){

    console.log(`hola for ${a}`)
}

const numbers=[1,2,3,4,5]

for(let i=0;i<numbers.length;i++){
    console.log(`Elemento: ${numbers[i]}`)
}

//while
let i=0
while(i<5){

    console.log(`hola while ${i}`)
    i++
}

//do while
i=0
do{

    console.log(`hola do while ${i}`)
    i++
}while(i<5)


    // for of sirve para recorrer valores de algo que se iterable 
    myArray=[1,2,3,4]
    myset = new Set (["Oliver","Rustrian","olirustrian",20,true,"algo"])
    myMap= new Map([
        ["Name","Oliver"],
        ["Apellido","Rustrian"],
        ["email","olirustrian@gmail.com"],
    ])

    myString="Hola javascript"

    for (let valor of myArray){
        console.log(valor)        
    }

    for (let valor of myset){
        console.log(valor)        
    }

    for (let valor of myMap){
        console.log(valor)        
    }

    for (let valor of myString){
        console.log(valor)        
    }

    // Buenas prácticas

    //Break y continue

    for (let a=1;a<=10;a++){
        if (a==5)
        {
            continue
        } else if (a==6){
            break
        }
        console.log(`hola for ${a}`)
    }