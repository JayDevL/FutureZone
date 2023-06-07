<?php
// Incluir el archivo de conexión a la base de datos
include 'conection.php';

// Obtener los datos enviados desde JavaScript
$data = json_decode(file_get_contents('php://input'), true);

// Obtener los valores individuales
// $nombre = $data['nombre'];
// $email = $data['email'];
// $password = $data['password'];
// $id = $contador;

$user = $data['user'];
$email =$data['email'];
$password = $data['password'];



// Preparar la consulta SQL para insertar los datos en la tabla de usuarios
$consulta = "INSERT INTO users (usuario,email, psswrd) VALUES ('$user','$email','$password')";

// Ejecutar la consulta
if ($conexion->query($consulta) === TRUE) {
    echo "Usuario registrado exitosamente";
} else {
    echo "Error al registrar usuario: " . $conexion->error;
}

// Cerrar la conexión a la base de datos
$conexion->close();

?>
