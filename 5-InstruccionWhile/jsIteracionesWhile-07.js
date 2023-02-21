/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numeroIngresado;
	let contador = 0;
	let sumaTotal = 0;
	let promedio;
	let pregunta;

	do 
	{
		numeroIngresado = parseInt(prompt("ingrese un numero deseado"));
		contador = contador + 1;
		sumaTotal = sumaTotal + numeroIngresado;
		pregunta = confirm ("desea seguir ingresando numeros?")
	}
		while (pregunta == true);

		if (contador > 0) {
			promedio = sumaTotal / contador;
			document.getElementById("txtIdPromedio").value = "el promedio es " + promedio;
		}else{
			document.getElementById("txtIdPromedio").value = "el promedio no puede calcularse"};

		
		document.getElementById("txtIdSuma").value = "la suma total es " + sumaTotal;
		
		
}//FIN DE LA FUNCIÓN