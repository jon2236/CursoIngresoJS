function mostrar()
{
	let destino;
	
	destino = document.getElementById("txtIdDestino").value;

	switch (destino) 
	{
		case "Mar del plata":

			alert ("punto cardinal oeste");
			
			break;
		case "Ushuaia":
		case "Bariloche":
			
			alert ("punto cardinal sur");
			break;
			
		default:
			alert ("punto cardinal norte");
			break;
	}



}//FIN DE LA FUNCIÓN