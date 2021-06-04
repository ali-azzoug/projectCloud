<?php

  require_once('../back-end/connectionBdd.php');

  ini_set('include_path', ini_get('include_path') . ':..');

  function verifAuthentification($con) {

    $stmt = $con->prepare("SELECT * FROM utilisateur WHERE login = ?");
    $stmt->bindParam(1, $login, PDO::PARAM_STR);
    if( ! empty( $_POST ) ) {
    $login=$_POST['username'];}
    $stmt->execute();
    $result = $stmt->fetchAll();
    return $result;
  }

 ?>
