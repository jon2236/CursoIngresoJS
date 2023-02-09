function mostrar()
{
	//tomo el mes
	let mes

	mes = document.getElementById("txtIdMes").value
	
	switch (mes) 
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		
		alert("falta para el invierno")
			break;		
		
		case "Julio":
		case "Agosto":
		alert("abrigate q hace ofri")
			break;
	
		default:
			
		alert("ahora calor")
			break;
	}



}//FIN DE LA FUNCIÓN