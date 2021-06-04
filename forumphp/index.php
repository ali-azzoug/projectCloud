<?php
header("Content-Type: text/html; charset=UTF-8"); 

$host = 'db';
$user = 'root';
$pass = 'theo';
$db = 'q18013907';
$charset = 'utf8';

//$port='3306';
$dsn="mysql:host=$host;dbname=$db;charset=$charset";

//$conn = new mysqli($host,$user,$password,$db);
/*try {
 $bdd= new PDO($dsn,$user,$password);
}catch(exception $e) {
 die('Erreur:'.$e->getmessage());
 }

if($bdd->connect_error){
    echo 'connection failrd' . $bdd->connect_error;
}
echo 'Connexion OK';

$reponse = $bdd->query('SELECT * FROM Cours');
$donnees = $reponse->rowCount();
if($reponse->rowCount()!=null) {
    echo "cool";
}
else {
    echo "pas cool";
}*/

function connectionBdd() {

  global $dsn, $user, $pass;

  try {
    $con = new PDO($dsn, $user, $pass);
    return $con;
  }catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
  }
}

$bdd=connectionBdd();
$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$reponse = $bdd->query('SELECT * FROM cours');
$donnees = $reponse->fetchAll();
if($donnees!=null) {
    echo $donnees;
}
else {
    echo "Pas de cours"; 
}
?>
