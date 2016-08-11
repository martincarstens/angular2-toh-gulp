<?php
	header('Access-Control-Allow-Origin: *');  
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
	header('Content-Type: application/json');

	$method = $_SERVER['REQUEST_METHOD'];

	if ($method == 'PUT') {
		$postdata = file_get_contents("php://input");
		$postdata = json_decode($postdata);
		echo $postdata->name;
		//var_dump($postdata);
	}