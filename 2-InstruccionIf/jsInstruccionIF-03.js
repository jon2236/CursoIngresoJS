function mostrar()
{
	//tomo la edad  

	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18 )
	{

		alert("usted es mayor de edad");
	
	}
	else 
	{
		alert("usted es menor de edad");
	}


}//FIN DE LA FUNCIÓN