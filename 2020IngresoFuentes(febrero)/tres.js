function mostrar()
{
	alert("tres");
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;

	nombre=prompt("ingrese nombre");
	do{
		nombre=prompt("ingrese un nombre:");
	}while(!isNaN(nombre));


	
	do{
		edad=prompt("ingrese una edad mayor a 18:");
		edad=parseInt(edad);
	}while(isNaN(edad) || edad<18);
	

	do{
		sexo=prompt("ingrese una letra valida f para femenino y m para masculino");
	}while(sexo != "f" || sexo!="m");

	
	do{
		estadoCivil=prompt("ingrese un estado civil valido:casado,viudo,soltero");
	}while(estadoCivil != "casado" || estadoCivil != "viudo" || estadoCivil!=soltero);


}
