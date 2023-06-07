<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "zdfusers";

// Crea la conexión
$conexion = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}else{
    //echo "<h1>Conexion lista</h1>";
}

// Resto del código...
?>