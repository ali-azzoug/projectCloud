<?php

function console_log( $data ){
  echo '<script>';
  echo 'console.log('. json_encode( $data ) .')';
  echo '</script>';
}

function connectionBdd() {

  global $dsn, $user, $pass;

  try {
    $con = new PDO($dsn, $user, $pass);
    return $con;
  }catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
  }
}

?>
