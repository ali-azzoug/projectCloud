<?php
require_once 'helper.php';
require_once '../back-end/auth.php';
//require_once("connectionBdd.php");


$nom_sujet=$_POST['new_topic'];
$fk_cours=$_POST['fk_cours'];

$bdd=connectionBdd();
$req=$bdd->prepare('INSERT INTO sujet(`nom`,`fk_cours`) VALUES(:nom,:fk_cours)');
$req->execute(array(':nom' => $nom_sujet,
                     ':fk_cours' => $fk_cours));

$req2=$bdd->query("SELECT count(*) as nb from sujet where fk_cours=".$fk_cours);
$nbtopic=$req2->fetch();
$nbtopic=$nbtopic[0];
$req3=$bdd->prepare("UPDATE cours set nb_sujet=".$nbtopic." where id_cours=".$fk_cours);
$req3->execute();

$recup = $bdd->query("SELECT * FROM `sujet` where id_sujet = (SELECT MAX(id_sujet) FROM sujet)");
$donnees = $recup->fetchAll();
//print_r($donnees[0][1]);

sendMessage($donnees);
 ?>
