<?php

//require_once '../back-end/auth.php';
session_start();

$host='172.16.1.50:8081';
$db   = 'q18013907';
//$user = 'q18013907';
//$pass = '82_66s6D';
$user='root';
$pass='mypass123';
$charset = 'utf8';
$dsn="mysql:host=$host;dbname=$db;charset=$charset";

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

function isCorrect(){
    global $PDO;
    //echo 'yui';
    if ( ! empty( $_POST ) ) {
      //print_r($_POST);
        if ( isset( $_POST['username'] ) && isset( $_POST['password'] ) ) {
            // Getting submitted user data from database
            $PDO= connectionBdd();
            $stmt = $PDO->prepare("SELECT * FROM utilisateur WHERE login = ?");
            $stmt->execute([$_POST['username']]);
            $user = $stmt->fetch();  
           
           // print_r($user);    

            // Verify user password and set $_SESSION
            if ( $_POST['password'] == $user['pwd'] ) {
                $_SESSION['user_id'] = $user['login'];
                //console_log($_SESSION['user_id']);
                return true;
            }
            else{
                return false;
            }
        }
    }
}

function isLogged(){
    if(isset( $_SESSION['user_id'])){
        return true;
    }
    else{
        return false;
    }
}

function session_verify(){
  // You'd put this code at the top of any "protected" page you create

  // Always start this first

  if ( isLogged() ) {
      // Grab user data from the database using the user_id
      // Let them access the "logged in only" pages
  } else {
      // Redirect them to the login page
      header("Location: /gestion_absence/front-end/login.php");
  }
}




?>
