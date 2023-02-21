function mostrar()
{
	let numeroIngresado
	let contador = 0
	let sumaAcumulada = 0
	let promedio

	while (contador < 5) 
	{
			numeroIngresado = parseInt(prompt("ingrese su numero"))
			contador = contador +1
			sumaAcumulada = sumaAcumulada + numeroIngresado
			promedio = sumaAcumulada / contador
	}

	document.getElementById("txtIdSuma").value = "el total de la suma es " + sumaAcumulada
	document.getElementById("txtIdPromedio").value = "el promedio es " + promedio
}//FIN DE LA FUNCIÓN