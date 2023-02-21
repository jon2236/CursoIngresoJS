/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado;
	let contador = 0
	let pregunta;
	let sumatotal = 0
	let producto

	do {
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		contador = contador + 1;
		sumatotal = sumatotal + numeroIngresado;
		pregunta = confirm ("desea seguir ingresando numeros?");
	}
	while (pregunta == true);

	if (numeroIngresado > 0 ) {
		document.getElementById("txtIdSuma").value = "la suma total es " + sumatotal;
	}
	else{
		producto = numeroIngresado * sumatotal
		document.getElementById("txtIdProducto").value = "el producto es " + producto;
	}
	
	
	
}//FIN DE LA FUNCIÓN