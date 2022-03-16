function mostrarCampos(){
	var objeto_input=document.getElementById("titulo").value;
	if (objeto_input.length<=4){
  alert("No se admiten nombres de menos de 4 caracteres");
		document.getElementById("titulo").style.backgroundColor="red";
	}
}

	var lista_peliculas=["Fantastico","historico","documental"];
	function array()
	{
		var objeto_select=document.getElementById("pelicula");
		for (i=0; i<lista_peliculas.length; i++)
		{
			var obj_option=document.createElement("option");
			obj_option.value=lista_peliculas[i]
			obj_option.innerHTML=lista_peliculas[i];
			objeto_select.appendChild(obj_option);
		}
	}

function validar(){

	var titulo=document.getElementById("titulo").value;
	var pelicula=document.getElementById("pelicula").value;
	alert("Se va a registrar el titulo"+titulo+ "y de pelicula"+pelicula);
}
