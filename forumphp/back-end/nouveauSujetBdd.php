<?php

require_once 'auth.php';
//require_once("connectionBdd.php");

//print_r($_POST);

$nom_sujet=$_POST['new_topic'];
$fk_cours=$_POST['fk_cours'];

$bdd=connectionBdd();
$req=$bdd->prepare('INSERT INTO sujet(`nom`,`fk_cours`) VALUES(:nom,:fk_cours)');
$req->execute(array(':nom' => $nom_sujet,
                     ':fk_cours' => $fk_cours));

$recup = $bdd->query("SELECT nb_post, dernier_maj FROM sujet where nom='".$nom_sujet."' and fk_cours=".$fk_cours);
$donnees = $recup->fetchAll();
//print_r($donnees[0][1]);

 $reponse = ['statut'=>'erreur','raison'=>'le sujet existe déjà','post'=>$donnees[0][0], 'maj'=>$donnees[0][1]];

 echo json_encode ($reponse);

 ?>
