/******************************************************************************

Ejercicio 3

En una casa de computación se necesita un programa que permita ingresar datos de 50 ventas realizadas.
Por cada venta, se ingresa:
• Nombre completo del comprador.
• DNI del comprador (debe tener 8 dígitos, sin ceros a la izquierda).
• Nombre del producto vendido (Mouse, Teclado, Auricular).
• Precio unitario del producto (mayor a 0).
• Cantidad de unidades vendidas (mayor a 0).


Informar:

1. Si el cliente compra mas de 5 Unidades de un mismo producto, tendrá un 10% de descuento.
2. La cantidad de unidades vendidas de Auriculares, Mouses y Teclados.

3. El nombre y DNI del comprador que realizó la compra de mayor monto.
4. El producto del que mas cantidades se vendió (Mouses, Teclados o Auriculares).
5. El promedio total recaudado por producto.

Pedir datos por prompt y mostrar por document write o alert.

*******************************************************************************/

function mostrar()
{
	let nombre;
	let dni;
	let nombreProducto;
	let precioUnitario;
	let cantUnidades;
	let cantVentas = 0;
	let precioBruto;
	let porcentaje;
	let precioFinal;
	let proporcion;
	let acumuladorMouse = 0;
	let acumuladorTeclado = 0;
	let acumuladorAuriculares = 0;
	let maxPrecioFinal;
	let maxNombre;
	let maxDni;
	let promedioMouse;
	let acumuladorPrecioFinalMouse;
	let promedioAuricular;
	let acumuladorPrecioFinalAuricular;
	let promedioTeclado;
	let acumuladorPrecioFinalTeclado;

	while (cantVentas < 2)
	{
		nombre = prompt("Ingrese su nombre:");

		dni = prompt("Ingrese su dni:");
		dni = parseInt(dni);

		while(dni < 10_000_000 || dni > 99_999_999)
		{
			dni = prompt("Ingrese su dni:");
			dni = parseInt(dni);
		}

		nombreProducto = prompt("Ingrese nombre del producto:");

		while(nombreProducto != "Mouse" && nombreProducto != "Teclado" && nombreProducto != "Auricular")
		{
			nombreProducto = prompt("Ingrese nombre del producto:");
		}

		precioUnitario = prompt("Ingrese su precioUnitario:");
		precioUnitario = parseInt(precioUnitario);

		while(precioUnitario < 1)
		{
			precioUnitario = prompt("Ingrese su precioUnitario:");
			precioUnitario = parseInt(precioUnitario);
		}

		cantUnidades = prompt("Ingrese su cantUnidades:");
		cantUnidades = parseInt(cantUnidades);

		while(cantUnidades < 1)
		{
			cantUnidades = prompt("Ingrese su cantUnidades:");
			cantUnidades = parseInt(cantUnidades);
		}

		precioBruto = precioUnitario * cantUnidades;

		if(cantUnidades > 5)
		{
			porcentaje = 10;
		}
		else
		{
			porcentaje = 0;
		}
		
		proporcion = precioBruto * porcentaje / 100;
		precioFinal = precioBruto - proporcion;

		switch (nombreProducto) {
			case "Mouse":

				acumuladorMouse += cantUnidades;
				acumuladorPrecioFinalMouse += precioFinal;

			break;
			case "Teclado":

				acumuladorTeclado += cantUnidades;
				acumuladorPrecioFinalTeclado += precioFinal;

			break;
		
			default:

				acumuladorAuriculares += cantUnidades;
				acumuladorPrecioFinalAuricular += precioFinal;

			break;
		}


		cantVentas++;


		if(cantVentas == 1 || precioFinal > maxPrecioFinal)
		{
			maxPrecioFinal = precioFinal;
			maxNombre = nombre;
			maxDni = dni;
		}
	}

	if(acumuladorTeclado > acumuladorMouse && acumuladorTeclado > acumuladorAuriculares)
	{
		alert("el mas grande es teclado.");
	}
	else
	{
		if(acumuladorMouse > acumuladorAuriculares)
		{
			alert("el mas grande es mouse.");
		}
		else
		{
			alert("el mas grande es auriculares");
		}
	}

	if(acumuladorAuriculares > 0)
	{
		promedioAuricular = acumuladorPrecioFinalAuricular / acumuladorAuriculares;
		alert(promedioAuricular);
	}

	if(acumuladorTeclado > 0)
	{
		promedioTeclado = acumuladorPrecioFinalTeclado / acumuladorTeclado;
		alert(promedioTeclado);
	}

	if(acumuladorMouse > 0)
	{
		promedioMouse = acumuladorPrecioFinalMouse / acumuladorMouse;
		alert(promedioMouse);
	}

	alert(maxNombre + " " + maxDni);
	alert(acumuladorMouse);
	alert(acumuladorAuriculares);
	alert(acumuladorTeclado);
}
