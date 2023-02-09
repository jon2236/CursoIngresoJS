function mostrar()
{
	//tomo el mes
	
	let mes

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
	

}//FIN DE LA FUNCIÓN