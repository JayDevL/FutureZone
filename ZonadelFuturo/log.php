<?php

    include 'conection.php';

    $datos = json_decode(file_get_contents('php://input'), true);

    $user = $datos['user'];
    $pass = $datos['password'];

    $cons = "SELECT * FROM users WHERE  usuario = '$user' AND psswrd = '$pass'";

    $result = $conexion->query($cons);

    if($result->num_rows > 0){
        echo "<H4 id='logeado'>$user</H>";

    }else{
        echo "Usuario o Password erronea. Recargue" . $conexion->error;
    }

    $conexion->close();


?>