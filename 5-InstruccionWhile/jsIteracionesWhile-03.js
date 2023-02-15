/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un numero entre 0 y 9");
	numeroIngresado = parseInt(numeroIngresado);
	
	alert(numeroIngresado);

	while (numeroIngresado < 0 || numeroIngresado > 9) 
	{
		alert("ingreso mal su numero")
		
		numeroIngresado = prompt("ingrese un numero entre 0 y 9");
		numeroIngresado = parseInt(numeroIngresado);

	}

	

}//FIN DE LA FUNCIÓN
