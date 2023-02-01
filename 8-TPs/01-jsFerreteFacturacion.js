/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let num1;
    let num2;
    let num3;
    let resultado;

    num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = num1 + num2 + num3;

    alert("el total de la suma es " + resultado);

}
function Promedio () 
{
    let num1;
    let num2;
    let num3;
    let promedio;

    num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    promedio = (num1 + num2 + num3) / 3;

    alert("su promedio es " + promedio);


	
}
function PrecioFinal () 
{
	
    let num1;
    let num2;
    let num3;
    let iva;
    let preciofinal;

    num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    iva = (num1 + num2 + num3) * 21 /100;

    preciofinal = num1 + num2 + num3 + iva;

    alert("el precio con iva incluido es " + preciofinal);

}