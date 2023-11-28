<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

    //llamamos el archivo con los datos
    //de la conexion a la BD
    require_once("conexion.php");

    //usamos la clase mysli para conectarnos a la BD
    $con = new mysqli($servidor, $usuario, $contra, $nombreBD);

    //verificar si no hay errores en la conexion
    if( $con->connect_error ){
        die("Conexion Fallida " . $con->connect_error);
    }

    //obtener los datos de la tabla pedidos
    if( $_SERVER["REQUEST_METHOD"] == "GET"){
        //realizar consulta a la BD
        $sql = "SELECT * FROM pedidos";
        //obtener resultados de la consulta a la tabla
        $resultado = $con->query($sql);
        //comprabar si la tabla no esta vacia
        if( $resultado->num_rows > 0 ){
            //convertir los datos en un array asociativo
            //equivalente a un objeto en Javascript
            $pedidos = array();
            while ( $row =  $resultado->fetch_assoc() ) {
                $pedidos[] = $row;
            }
            //mostrar los datos
            //convertir los datos a formato JSON
            echo json_encode($pedidos);
        }else{
            //si no hay datos en la consulta
            echo "No hay datos en la Tabla";
        }

   }

