function mostrar()
{
	//tomo el mes
	
	let mes
<<<<<<< HEAD

	mes = document.getElementById("txtIdMes").value

	switch (mes) 
	{
		case "Enero":
			alert ("buen año");
			break;
		case "Marzo":
			alert ("a clases");
			break
		case "Julio":
			alert ("frioo");
			break;
		case "Diciembre":
			alert ("fiestas");
			break
		default:
			alert("elije otro mes")
	}
	
=======
	let mensaje
	mes = document.getElementById("txtIdMes").value

	switch (mes){
		
		case "Enero":
			mensaje = "buen año"
		break
		
		case "Marzo":
			mensaje = "a clases"
		break
		
		case "Julio":
			mensaje = "se vienen las vacaciones"
		break
		
		case "Diciembre":
			mensaje = "vacaciones"
		break
>>>>>>> 05a0ee934b0bcd993cb344dab37a490f1c486e18

	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN