// Uno
// Para una peluquería se necesita un programa que permita ingresar datos de los trabajos realizados hasta
// que el usuario quiera.
// Por cada trabajo, se ingresa:
// A. Trabajo: ("corte", "tintura", "peinado").
// B. Nombre del cliente,
// C. Edad del cliente (entre 8 y 100)
// D. Precio base (1000).
// Informar:
// 1. Si el cliente tiene menos de 12 años, tendrá un descuento del 20% sobre el precio base.
// 2. Si el trabajo a realizarse es “corte”, tendrá un incremento del 20% sobre el precio base, si es “tintura”
// 50%.
// 3. El nombre del cliente que mas gasto. => max en base a lo que gasto
// 4. El trabajo realizado al cliente con menor edad. => min o max en base a la edad del cliente
// 5. El importe total facturado => acumulador de precioFinal
// 6. El porcentaje de trabajos realizados Ej: ["corte": 30%, "tintura": 40%, "peinado": 30%] => contador de corte, tintura, peinado
// Pedir datos por prompt y mostrar por document write o alert.

function mostrar() {
	let trabajo;
	let nombre;
	let edad;
	const PRECIO_BASE = 1000;
	let incremento;
	let descuento;
	let precioFinal;
	let porcentajeIncremento;
	let acumPrecioFinal = 0;
	let contPeinado = 0;
	let contTintura = 0;
	let contCorte = 0;
	let totalTrabajos;
	let pregunta = 's';
	let banderaMasgasto = 'si';
	let maxGasto;
	let maxNombre;
	let banderaMinEdad = 'si';
	let minEdad;
	let minTrabajo;
	let porcentajeTint;
	let porncentajeCort;
	let porcentajePei;
  
	while (pregunta == 's') {
	  trabajo = prompt("Ingrese el trabajo ('corte', 'tintura', 'peinado')");
  
	  while (trabajo != 'corte' && trabajo != 'peinado' && trabajo != 'tintura') {
		trabajo = prompt("REEEEE Ingrese el trabajo ('corte', 'tintura', 'peinado')");
	  }
  
	  nombre = prompt('ingrese su nombre');
  
	  edad = prompt('Ingrese la edad');
	  edad = parseInt(edad);
  
	  while (edad < 8 || edad > 100) {
		edad = prompt('REEEEEE Ingrese la edad');
		edad = parseInt(edad);
	  }
  
	  if (edad < 12) {
		descuento = (PRECIO_BASE * 20) / 100;
	  } else {
		descuento = 0;
	  }
  
	  switch (trabajo) {
		case 'corte':
		  porcentajeIncremento = 20;
		  contCorte = contCorte + 1;
		  break;
  
		case 'tintura':
		  porcentajeIncremento = 50;
		  contTintura++;
  
		  break;
  
		default:
		  porcentajeIncremento = 0;
		  contPeinado++;
		  break;
	  }
  
	  incremento = (PRECIO_BASE * porcentajeIncremento) / 100;
	  precioFinal = PRECIO_BASE - descuento + incremento;
  
	  if (banderaMasgasto == 'si' || precioFinal > maxGasto) {
		maxGasto = precioFinal; //con esto evaluo
		maxNombre = nombre; // esto muestro
		banderaMasgasto = 'no';
	  }
  
	  if (banderaMinEdad == 'si' || edad < minEdad) {
		minEdad = edad; //con esto evaluo
		minTrabajo = trabajo; // esto voy a mostrar
		banderaMinEdad = 'no';
	  }
  
	  acumPrecioFinal = acumPrecioFinal + precioFinal;
	  pregunta = prompt('desea seguir ingresando? (s/n)');
	}
  
	totalTrabajos = contCorte + contPeinado + contTintura;
	porcentajePei = (contPeinado / totalTrabajos) * 100;
	porcentajeTint = (contTintura / totalTrabajos) * 100;
	porncentajeCort = (contCorte / totalTrabajos) * 100;
  
	alert(precioFinal);
	alert('el min edad ' + minEdad + ' el trabajo ' + minTrabajo);
	alert('el max gasto ' + maxGasto + ' el nombre ' + maxNombre);
	alert(acumPrecioFinal);
	alert(porcentajePei);
	alert(porncentajeCort);
	alert(porcentajeTint);
  }
  
  