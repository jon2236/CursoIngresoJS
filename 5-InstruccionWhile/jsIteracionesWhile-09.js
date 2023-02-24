/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	/*let numeroIngresado;
	let numMin = 0;
	let numMax = 0;
	let respuesta;
	let contadorDeNumeros = 0;

	do {
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		contadorDeNumeros = contadorDeNumeros +1;

		if(contadorDeNumeros == 1) {
			numMax = numeroIngresado;
			numMin = numeroIngresado;
		}
		else{

			if(numeroIngresado > numMax){
				numMax = numeroIngresado;
			}
			else if (numeroIngresado < numMin) {
				numMin = numeroIngresado;
			}
				
		}

		respuesta = confirm("desea ingresar mas numeros?");
	}while (respuesta == true);

	document.getElementById("txtIdMaximo").value = numMax;
	document.getElementById("txtIdMinimo").value = numMin;*/

	let numeroIngresado;
	let numMax;
	let numMin;
	let flag;
	let respuesta;

	flag = 0;

	do {
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		
		if(flag == 0) {
			numMax = numeroIngresado;
			numMin = numeroIngresado;
			flag = 1;
		}else{
			
			if(numeroIngresado > numMax) {
				numMax = numeroIngresado;
			}
			else{

				if (numeroIngresado < numMin ){
					numMin = numeroIngresado;
				}
			}
		}
		respuesta = confirm ("desea seguir ingresando numeros?");
		} while (respuesta == true);

		document.getElementById("txtIdMaximo").value = numMax;
		document.getElementById("txtIdMinimo").value = numMin;

	
}//FIN DE LA FUNCIÓN