let numero1 = prompt("dime un numero")
let numero2 = prompt("dime otro numero")
let pregunta = prompt("¿Que quieres que haga? \n 1: Sumar \n 2: Restar \n 3: multiplicar \n 4: dividir")


if(pregunta == "1"){

alert("la respuesta es " + (parseFloat(numero1) + parseFloat(numero2)))

} else if (pregunta == "2"){

    alert("la respuesta es " + (parseFloat(numero1) - parseFloat(numero2)))

}

else if (pregunta == "3"){

    alert("la respuesta es " + (parseFloat(numero1) * parseFloat(numero2)))

} else if (pregunta == "4"){

    alert("la respuesta es " + (parseFloat(numero1) / parseFloat(numero2)))

} else{

alert("no elejiste adecuadamente")

}



