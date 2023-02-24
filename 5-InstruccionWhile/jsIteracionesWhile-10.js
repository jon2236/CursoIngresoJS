/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	/*declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);*/

	let numeroIngresado;
	let sumaPositivos = 0;
	let sumaNegativos = 0;
	let cantidadPositivos = 0;
	let cantidadNegativos = 0;
	let cantidadCeros = 0;
	let cantidadPares = 0;
	let promedioPositivos;
	let promedioNegativos;
	let modulo;
	let pregunta;

	do {
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		
		if(numeroIngresado > 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos ++

		}else{
			
			if(numeroIngresado < 0) {
				sumaNegativos = sumaNegativos + numeroIngresado;
				cantidadNegativos ++

			}else{
				
				cantidadCeros = cantidadCeros + 1; //cantidadCeros ++ es lo mismo

			}
		}
		
		modulo = numeroIngresado % 2;

		if(modulo == 0){
			cantidadPares = cantidadPares + 1
		}

		pregunta = confirm ("desea seguir ingresando numeros?");
		} while (pregunta == true);

	if(cantidadPositivos > 0){	
		promedioPositivos = sumaPositivos / cantidadPositivos};
	
	
	if(cantidadNegativos > 0){	
		promedioNegativos = sumaNegativos / cantidadNegativos};

	document.write("el promedio postivo es " + promedioPositivos + '<br>');	
	document.write("el promedio negativo es " + promedioNegativos + '<br>');
	document.write("la suma total de 0 es " + cantidadCeros + '<br>');
	document.write("la suma total de positivos es " + sumaPositivos + '<br>');
	document.write("la suma total de negativos es " + sumaNegativos + '<br>');
	document.write("la cantidad total de positivos es " + cantidadPositivos + '<br>');
	document.write("la cantidad total de negativos es " + cantidadNegativos + '<br>');
	document.write("la cantidad total de pares es " + cantidadPares + '<br>');


}//FIN DE LA FUNCIÓN