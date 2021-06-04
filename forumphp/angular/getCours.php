<?php

require_once "helper.php";
require_once '../back-end/auth.php';

$bdd=connectionBdd();
$reponse = $bdd->query('SELECT * FROM Cours');
$donnees = $reponse->fetchAll();
if($donnees!=null) {
    sendMessage ($donnees);
}
else {
    sendError ("Pas de cours"); 
}

?>