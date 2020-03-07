function mostrar()
{
	  alert("dos");
	  var peso;
	  var precio;
	  var tipo;

	 
	  
	  do{
	  	peso=prompt("ingrese un peso valido entre 10 y 100:");
	  	peso=parseInt(peso);
	  }while(isNaN(peso) || peso<=10 || peso >=1000);

	
	   do{
	  	precio=prompt("ingrese precio valido mayor a 1:");
	  	precio=parseInt(precio);
	  } while(isNaN(precio) || precio<0)
	

		do{
			tipo=prompt("ingrese un tipo valido v para vegetal,a para animal o m para mescla")
		}while(!isNaN(tipo) || tipo!= "v" || tipo!= "a" || tipo !="m")


}
