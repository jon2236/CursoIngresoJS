//78*
function mostrar()
{
	let destino;
	let estacion;
	const ESTADIA = 15000;
	let descuento = 0
	let aumento = 0
	let precioFinal;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;


	switch (estacion) 
	{
		case "Invierno":
			if (destino == "Bariloche")
			{
				aumento = 20;
			}	
			else if (destino == "Mar del plata")
			{
				descuento = 20;
			}
			else
			{
				descuento = 10;
			}
			break;
		case "Verano":
			if (destino == "Bariloche")
			{
				descuento = 20;
			}	
			else if (destino == "Mar del plata")
			{
				aumento = 20;
			}
			else
			{
				aumento = 10;
			}
			break;
		case "Otoño":
		case "Primavera":
			if (destino == "Cordoba")
			{
				aumento = ESTADIA
			}
			else
			{
				aumento = 10;
			}
			break;
	}

	if(aumento != 0)
	{
		precioFinal = ESTADIA + ESTADIA * aumento / 100;
	}
	else if(descuento)
	{
		precioFinal = ESTADIA - ESTADIA * descuento / 100;
	}

	
	alert ("Precio final de " + precioFinal);
}//FIN DE LA FUNCIÓN7



/*let estacion;
  let destino;
  const PRECIO_BASE = 15000;
  let precioFinal;
  let proporcion;
  let porcentaje;

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
    case "Invierno":
      switch (destino) {
        case "Bariloche":
          porcentaje = 20;

          break;

        case "Mar del plata":
          porcentaje = -20;
          break;

        default:
          porcentaje = -10;

          break;
      }

      break;

    case "Verano":
      switch (destino) {
        case "Bariloche":
          porcentaje = -20;
          break;

        case "Mar del plata":
          porcentaje = 20;
          break;

        default:
          porcentaje = 10;
          break;
      }

      break;

    default:
      switch (destino) {
        case "Cordoba":
          porcentaje = 0;
          break;

        default:
          porcentaje = 10;

          break;
      }
      break;
  }

  proporcion = (PRECIO_BASE * porcentaje) / 100;
  precioFinal = PRECIO_BASE + proporcion;
  alert(precioFinal);*/














/*switch (destino) 
	{
		case "Bariloche":
		
			break;
		case "Cataratas":
			break
	
		case "Mar del plata":
			break;

		case "Cordoba":
			break;
	}
	
	if (destino == "Bariloche" && estacion == "Invierno")
		{
			aumento = 20;
		}
		else
		{
			if (destino == "Bariloche" && estacion == "Verano") 
				{
					descuento = 20;
				}
				
			else
				{
				aumento = 10;
				}
	
				else
				{
		
				if (destino == "Mar del plata" && estacion == "Invierno")
					{
						descuento = 20;
					}
				else
					{
						if (destino == "Mar del plata" && estacion == "Verano") 
							{
							aumento = 20;
							}
							else
							{
								aumento = 10;
							}
						
						
							else
							{
							
								if (destino == "Cataratas" || "Cordoba" && estacion == "Invierno")
								{
									descuento = 10;
								}
								else
								{
									if (destino == "Cataratas" || "Cordoba" && estacion == "Verano") 
										{
										aumento = 10;
										}
										else
										{		
										(destino == "Cataratas" && estacion == "primavera" || "Otoño")
										}
										else
										{
											aumento = 10;
										}
							
								}
							}
						}
					}		
					
					mensaje = "Usted selecciono viajar hacia " + destino + " en " + estacion + " quedando un precio final de ";
	mensaje = mensaje + descuento || aumento;
	proporcion = ESTADIA * descuento || aumento / 100;
	precioFinal = ESTADIA + descuento || aumento;


(edadCliente > 100 || edadCliente < 8) {
			alert ("su rango de edad debe estar entre 8 y 100 años");
	edadCliente < 12) {
			descuento = PRECIOBASE * 20 / 100;
*/	