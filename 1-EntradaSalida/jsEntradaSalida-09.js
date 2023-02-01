/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	/*let sueldo;
	
	let resultado;

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	resultado = sueldo * 1.10

	document.getElementById("txtIdResultado").value = resultado*/

	// a mi me funciono asi, a continuacion como se mostro en clase

	let sueldo;
	let nuevosueldo;
	let aumento;

	//formula x*10/100

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	aumento = sueldo * 10 / 100;

	nuevosueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevosueldo;

}
