/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	const PRECIO_LAMPA = 35;
    let cantLampa;
    let precioDescuento;
    let marca;
    let descuento;
    let precioBruto;
    let proporcion
    const IIBB = 10
    let mensaje

    cantLampa = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    descuento = 0
    mensaje = "adquirio " + cantLampa + " de la marca " + marca + " y obtuve un descuento de "

    

    if(cantLampa > 5)
    {
        descuento = 50;
        
    }
    else 
    {
        if (cantLampa > 4)
        {

            if (marca == "ArgentinaLuz")
            {
            descuento = 40;
            }   
            else
            {
            descuento = 30;                  
            }
        }
    
        else
        {
            if (cantLampa > 3)
            {

                if (marca == "ArgentinaLuz" || "FelipeLamparas")
                {
                 descuento = 25;
                }    
                 else
                {
                 descuento = 20;
                }

            }

            else
            {
                if (cantLampa > 2)
                {
                    if (marca == "ArgentinaLuz" )
                    {
                        descuento = 15;
                    }
                    else
                    {
                        if (marca == "FelipeLamparas")
                        {
                            descuento = 10;
                        }
                        else
                        {
                            descuento = 5;
                        }
                    }

                }
            
            }

        }    
         
    }       
    mensaje = mensaje + descuento + "%";
    precioBruto = cantLampa * PRECIO_LAMPA;
    proporcion = (precioBruto * descuento) / 100;
    precioDescuento = precioBruto - proporcion;
    
    if (precioDescuento > 120)
    {
        proporcion = (precioDescuento * IIBB) / 100
        precioDescuento = precioDescuento + IIBB
        mensaje = mensaje + " con impuestos afip da un total de "
    }

    alert (mensaje)
    alert (precioDescuento)
        
}

    
    
    


