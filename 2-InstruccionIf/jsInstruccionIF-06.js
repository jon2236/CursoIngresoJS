function mostrar()
{

	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13) {

		alert("tu eres un niño");

	}

	else {

		if (edad < 18) {
		
			alert("usted es un adolecente");
		}
			else { 
				
				alert("es adulto")

			}
		

		}


}
//FIN DE LA FUNCIÓN