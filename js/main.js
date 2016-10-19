function validateForm(){

	var span = document.createElement("span");
	span_arreglo = document.getElementsByClassName("error");
	while(span_arreglo.length > 0){
		span_arreglo[0].parentElement.removeChild(span_arreglo[0]);
	}

	var nombre = document.getElementById('name').value;		/*El punto value es para guardar el valor del elemento "name"*/
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contraseña = document.getElementById("input-password").value;
	var tipo_bici = document.querySelector("#selecciona").value;	/*Mediante el id #selecciona obtiene el valor de lo que selecciona en tipo de bici*/

	if (nombre === "" || nombre == null || !(/^[A-Z][a-z]*$/g).test(document.getElementById("name").value)){
		var mensaje = document.createElement("span");
		span.setAttribute("class", "error");
		mensaje.innerHTML = "Campo obligatorio con inicial mayúscula";
		document.getElementsByClassName("input-box")[0].appendChild(mensaje); 
	}

	if (apellido === "" || apellido == null || !/^[A-Z][a-z]*$/g.test(document.getElementById("lastname").value)){
		var mensaje = document.createElement("span");
		span.setAttribute("class", "error");
		mensaje.innerHTML = "Campo obligatorio con inicial mayúscula";
		document.getElementsByClassName("input-box")[1].appendChild(mensaje); 
	}

	if (correo === "" || correo == null || correo.length>100 || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(document.getElementById("input-email"))){
		var mensaje = document.createElement("span");
		span.setAttribute("class", "error");
		mensaje.innerHTML = "e-mail inválido";
		document.getElementsByClassName("input-box")[2].appendChild(mensaje); 
	}

	if ((contraseña.length<6) || (contraseña.length>20)){
		var mensaje = document.createElement("span");
		mensaje.innerHTML = "La contraseña debe tener mínimo 6";
		document.getElementsByClassName("input-box")[3].appendChild(mensaje); 
	}else if (contraseña === "password" || contraseña === "PASSWORD" || contraseña === "123456" || contraseña === "098765"){
		var mensaje = document.createElement("span");
		span.setAttribute("class", "error");
		mensaje.innerHTML = "La contraseña debe tener mínimo 6 caracteres y máximo 20";
		document.getElementsByClassName("input-box")[3].appendChild(mensaje); 
	}

	if (tipo_bici === ""){
		var mensaje = document.createElement("span");
		span.setAttribute("class", "error");
		mensaje.innerHTML = "Elige un tipo de bici";
		/*document.querySelector("#selecciona").parentNode.appendChild(mensaje);		Accede al elemento mediante el padre del nodo*/ 
		document.getElementsByClassName("input-box")[4].appendChild(mensaje);
	}
}

	/*var spans = document.getElementByTagName("span");
	for(var i=0; i<spans.legth; i++){
		spans[i].parentNode.removeChild(spans[i]);		Colócate en el span del arreglo y y dile al padre que lo elimine
	}
	var nombre = document.getElementById("name"); 		name es el id del campo (input) nombre
	var apellido = document.getElementById("lastname");
	if (nombre.value == null || apellido.value == null){
		var span = document.getElement("span");
		span.innerHTML = "Campo obligatorio";
		name.parentNode.appendChild(span);
	}*/




	
