function mostrar()
{
	//tomo la hora
	
	let hora
	
	hora = parseInt(document.getElementById("txtIdHora").value);

	switch (hora) 
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			
			 alert ("es de mañana");
			break;
	
		default:
			alert ("hora incorrecta");
			break;
	}
	
	


}//FIN DE LA FUNCIÓN
	