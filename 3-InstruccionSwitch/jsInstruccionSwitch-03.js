function mostrar()
{
	//tomo el mes

	let mes

	mes = document.getElementById("txtIdMes").value

	switch (mes) 
	{
		case "Febrero":
			alert ("estas en febrero y tiene 29 dias");
			
			break;
	
		default:

			alert("este mes tiene mas de 30 dias");

			break;

	}

}//FIN DE LA FUNCIÓN

/*"Enero"
			"Marzo"
			"Abril"
			"Mayo"
			"Junio"
			"Julio"
			"Agosto"
			"septiembre"
			"Octubre"
			"Noviembre"
			"Diciembre"  */