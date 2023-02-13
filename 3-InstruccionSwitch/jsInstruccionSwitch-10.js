function mostrar()
{
	let estacion;
	let destino;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion) 
	{
		case "Invierno":
			if (destino == "Bariloche")
			{
				alert("se viaja");
			}	
			else
			{
				alert("no se viaja");
			}
			break;
		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas")
			{
				alert("se viaja");
			}
			else
			{
				alert("no se viaja");
			}
			break;
		case "Primavera":
			if(destino != "Bariloche")
			{
				alert("se viaja");
			}
			else
			{
				alert("no se viaja");
			}
			break;
		default:
			{
				alert("se viaja")
			}
			break;


	}
}//FIN DE LA FUNCIÓN