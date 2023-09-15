let numero1 = Number
let numero2 = Number
let pregunta = ""

numero1 = prompt("dime un numero")
numero2 = prompt("dime otro numero")
pregunta = prompt("¿Que quieres que haga? \n Sumar \n Restar \n multiplicar \n dividir")

if(pregunta == "sumar"){

alert("la respuesta es " + (parseFloat(numero1) + parseFloat(numero2)))

} else if (pregunta == "restar"){

    alert("la respuesta es " + (numero1 - numero2))

}

else if (pregunta == "multiplicar"){

    alert("la respuesta es " + (numero1 * numero2))

} else if (pregunta == "dividir"){

    alert("la respuesta es " + (numero1 / numero2))

}

