function mostrar()
{
	let destino;
	
	destino = document.getElementById("txtIdDestino").value;

	switch (destino) 
	{
		case "Mar del plata":

			alert ("hace calor en mar del plata");
			
			break;
		case "Ushuaia":
		case "Bariloche":
			
			alert ("mucho frio en el sur de argentina");
			break;
			
		default:
			alert ("hace calor");
			break;
	}


}//FIN DE LA FUNCIÓN