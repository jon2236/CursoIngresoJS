/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
        //Fahrenheit a Celsius, simplemente resta 32 y multiplica por 0.5556 (o 5/9).
        let fah;
        let cent;
        
        fah = parseFloat(document.getElementById("txtIdTemperatura").value);
        
        cent = (fah -32) * 0.5556;
        
        alert(fah + " grados fahrenheit son " + cent+ " grados centígrados");
        
        
      }
      
      function CentigradosFahrenheit () 
      {
       //Celsius a Fahrenheit, simplemente multiplica por 1.8 (o 9/5) y suma 32.
       let fah;
       let cent;
       
       cent = parseInt(document.getElementById("txtIdTemperatura").value);
       
       fah = cent * 1.8 + 32;
       
       alert(cent + " grados centígrados son " + fah + " grados Fahrenheit");
      
}

