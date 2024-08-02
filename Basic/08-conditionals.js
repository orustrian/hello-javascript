//if, else if , else

// if (si) 

let age=37

if (age==37)
{
  console.log ("La edade es 37") 
} 

//else (sino )

if (age == 37) {
   console.log ("La edad es 37")  
}  else {

  console.log ("La edad no es 37")  
}

//else if (si no, si )

if (age == 37) {
  console.log ("La edad es 37")  
} else if (age<18){console.log('Es menor de edad')}  

else {

 console.log ("La edad no es 37")  
}

//Operador ternario
const message = age==37 ? "La edad es 37" : "la edad no es 37 "
console.log(message)

//switch
let day=8 
let dayname=''

switch (day){

    case 0: 
         dayname='Lunes'
         break
    case 1: 
         dayname='Martes'
         break
    case 2: 
         dayname='Miercoles'
         break
         case 3: 
         dayname='Jueves'
         break
     case 4: 
         dayname='Viernes'
         break
     case 5: 
         dayname='Sabado'
         break
     case 6: 
         dayname='Domingo'
         break
    default:
          dayname='nombre de la semana no definido'
}
console.log(dayname)