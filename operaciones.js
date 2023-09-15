let numero1 = Number
let numero2 = Number
let pregunta = ""

numero1 = prompt("dime un numero")
numero2 = prompt("dime otro numero")
pregunta = prompt("¿Que quieres que haga? \n 1: Sumar \n 2: Restar \n 3: multiplicar \n 4: dividir")

if(pregunta == "1"){

alert("la respuesta es " + (parseFloat(numero1) + parseFloat(numero2)))

} else if (pregunta == "2"){

    alert("la respuesta es " + (numero1 - numero2))

}

else if (pregunta == "3"){

    alert("la respuesta es " + (numero1 * numero2))

} else if (pregunta == "4"){

    alert("la respuesta es " + (numero1 / numero2))

}



