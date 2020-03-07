
function mostrar()
{
	alert(uno)
	var producto;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;

	producto=prompt("ingrese producto: barbijo,jabon o alcohol:");

	while(producto !="barbijo" ||  producto!= "jabon" || producto !="alcohol")
	{
		producto=prompt("Error ingrese un producto valido:brabijo,jabon o alcohol");
	}
	precio=prompt("ingrese precio:");
	precio=parseInt(precio);

	while(isNaN(precio) || precio <=100 || precio >=300 )//entiendo que estan incluidos.
	{
		precio=prompt("Error.ingrese un precio valido entre 100 y 300");
		precio=parseInt(precio);
	}
	cantidadUnidades=prompt("ingrese cantidad de unidades:");
	cantidadUnidades=parseInt(cantidadUnidades);

	while(isNaN(cantidadUnidades) || cantidadUnidades <0 || cantidadUnidades >=1000)
	{
		cantidadUnidades=prompt("Error ingrese cantidades validas entre 1 y 1000");
		cantidadUnidades=parseInt(cantidadUnidades);
	}
		marca=prompt("ingrese marca y fabricante");
		fabricante=prompt("ingrese fabricante");

			