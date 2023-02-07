function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero = Math.floor(Math.random() * 10) + 1;

	if(numero >8){
		alert(numero + " perfect");
	}

	else
	{
		if(numero >4)

			alert(numero + " regular");

			else 
			{
				(numero >0)
		
				alert(numero + " awful");
			}
	}


}//FIN DE LA FUNCIÓN