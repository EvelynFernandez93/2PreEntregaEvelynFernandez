
alert ("BIENVENIDO A DIAGNOVET LABORATORIO VETERINARIO")
//uso de variables
let identificacion = prompt ("INGRESE NOMBRE Y APELLIDO DEL PACIENTE");
if (identificacion == "") {
    alert("Debe ingresar nombre del paciente")
} else {
    alert("Paciente ingresado"+ " "+ identificacion +" ")
}

//uso de funciones
function hemogramaurgente(valorurgencia, valorExtraccion, resultadoUrgente) {
    console.log("El precio del Hemograma Urgente es "+valorurgencia+ " más el valor de la extracción "+ valorExtraccion+" el costo todal del estudio es "+ resultadoUrgente)
    
}
hemogramaurgente("$1000","$300","$1300") //uso de operaciones



function realizarpago() {
    let nombre = prompt("Ingrese su nombre: ")
    let monto = prompt ("Ingrese el monto: ")
    
    //uso de condicionales
    if(monto>=1300){
        alert ("Usted abonó :"+ monto)
    }else {
        do {
           alert ("Lo siento; el monto ingresado no es suficiente ") 
        } while (monto>=1300);
    }
}
realizarpago ()

//uso de constantes
const perfilbasico ={
    estudios: "Hemograma + 6 determinaciones bioquímicas",
    precio : 1800,
    
}
console.log (perfilbasico.estudios)
console.log (perfilbasico.precio)

const perfilurgente ={
    estudios:'Hemograma + 6 determinaciones bioquímicas',
    precio : 2500,
    
    
} 
console.log (perfilurgente.estudios)
console.log (perfilurgente.precio)
//en caso de lo querer saber el precio de cada cosa en particular, uso de arrays 
 const determinacionesbioquimicas = [
    {id:1,estudio: 'hemograma',precio :600},
    {id:2,estudio: 'perfilriñon',precio:600},
    {id:3,estudio:'perfilhepatico',precio:900},
    {id:4,estudio: 'perfilpancreatico', precio:600}
 ]
console.log(determinacionesbioquimicas[0])
console.log(determinacionesbioquimicas[1])
console.log(determinacionesbioquimicas[2])
console.log(determinacionesbioquimicas[3])


