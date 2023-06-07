
function scrollImages() {
    const imageContainer = document.querySelector('.image-container');
    const imageWidth = imageContainer.querySelector('.image-wrapper').offsetWidth;
    const scrollAmount = imageWidth + 20; // Ajusta el valor de desplazamiento según tus necesidades
    let currentScroll = 0;
  
    function scroll() {
      currentScroll += scrollAmount;
  
      if (currentScroll >= imageContainer.scrollWidth) {
        currentScroll = 0;
      }
  
      imageContainer.scrollTo({
        left: currentScroll,
        behavior: 'smooth'
      });
    }
  
    setInterval(scroll, 2500); // Ajusta el intervalo de desplazamiento según tus necesidades
  }
  
  scrollImages();
  

// Mostrar formulario de inicio de sesión
document.getElementById("login_boton").addEventListener("click", function() {
    $('#loginModal').modal('show');
});

// confirmar log in 
document.getElementById("btn_login").addEventListener("click", function(event) {
    event.preventDefault();
    

    var user = document.getElementById("logusuario").value;
    var password = document.getElementById("logcontrasena").value;

    var datos = {
        user: user,
        password: password
    };

    console.log(user+" "+ password);

    if(datos.user == "" || datos.password == ""){
        alert("llene correctamente los datos de log in")
    }else{
        // Realizar la petición AJAX al archivo PHP
        var xhr = new XMLHttpRequest();
         xhr.open("POST", "log.php", true);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.onreadystatechange = function() {
             if (xhr.readyState === 4) {
                 if (xhr.status === 200) {
                     // Mostrar el mensaje de éxito en el elemento HTML
                     document.getElementById("respuesta_log").innerHTML = xhr.responseText;
                 } else {
                     // Mostrar el mensaje de error en el elemento HTML
                     document.getElementById("respuesta_log").innerHTML = "Error al registrar usuario";
                 }
             }
         };
        
         try{
            xhr.send(JSON.stringify(datos));
            //esconder formulario.
            //$('#loginModal').modal('hide');
            
         }catch(e){
            alert("Error al registrar");
         } 
    }

});

// Boton Registro 
document.getElementById("btn_registroF").addEventListener("click", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var user = document.getElementById("nombreUsuario").value;
    var email = document.getElementById("correoElectronico").value;
    var password = document.getElementById("contrasena").value;

    console.log(user+" "+ email +" "+ password);
    
    var data = {
        user: user,
        email: email,
        password: password
    };

    //console.log(data);

    if(data.user == "" || data.email == "" || data.password == ""){
        alert("llene correctamente el registro")
    }else{
        // Realizar la petición AJAX al archivo PHP
        var xhr = new XMLHttpRequest();
         xhr.open("POST", "registrar.php", true);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.onreadystatechange = function() {
             if (xhr.readyState === 4) {
                 if (xhr.status === 200) {
                     // Mostrar el mensaje de éxito en el elemento HTML
                     document.getElementById("pfooter").innerHTML = xhr.responseText;
                 } else {
                     // Mostrar el mensaje de error en el elemento HTML
                     document.getElementById("pfooter").innerHTML = "Error al registrar usuario";
                 }
             }
         };
        
         try{
            xhr.send(JSON.stringify(data));
            //esconder formulario.
            alert("Usuario Registrado: "+data.user);
            var visible = document.getElementById("registroModal");
            window.location.href = "index.html";
            
         }catch(e){
            alert("Error al registrar");
         } 
    }

});
