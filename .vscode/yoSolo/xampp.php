<?PHP
$hostname_localhost ="localhost";
$database_localhost ="cosas";
$username_localhost ="luis";
$password_localhost ="12";
$json=array();

		$conexion = mysqli_connect($hostname_localhost,$username_localhost,$password_localhost,$database_localhost);
		$consulta="SELECT * FROM cosas_de_casa ";
	//	$consulta="select local ,tecnico ,horaentrada,averia,cambio,maquina ,comentario,horasalida from avisos";
		$resultado=mysqli_query($conexion,$consulta);
        echo $resultado;
		while($registro = mysqli_fetch_array($resultado)){
			$json[]=$registro;
			//echo $registro['id'].' - '.$registro['nombre'].'<br/>';
		}
		mysqli_close($conexion);
		echo json_encode($json);
?>
