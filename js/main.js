function validateForm(){
	/* Escribe tú código aquí */
	 var nombre = $("#name").val();	/*Mensaje nombre*/

	if(nombre == ""){
        $("#mensaje1").fadeIn("slow");
        return false;
    }
    else{
        $("#mensaje1").fadeOut();
}



if (nombre === "" || apellido === "" || correo === "" || contraseña === ""){	/*Si los campos están vacíos*/
		$("#mensaje1").fadeIn("slow");
		return false; 	/*Para que no avance si está vacío el campo*/	
}  else{
        $("#mensaje1").fadeOut();
}