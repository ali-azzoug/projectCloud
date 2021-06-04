<?php
require_once 'helper.php';
require_once '../back-end/auth.php';
//require_once("connectionBdd.php");

session_verify();

$description=$_POST['description'];
$fk_topic=$_POST['fk_topic'];
$fk_utilisateur=$_SESSION['user_id'];

$bdd=connectionBdd();
$req=$bdd->prepare("INSERT INTO post(`description`,`fk_sujet`,`fk_utilisateur`) VALUES(:descr,:fk_sujet,:fk_utilisateur)");
$req->execute(array(':descr' => $description,
                    ':fk_sujet' => $fk_topic,
                    ':fk_utilisateur' => $fk_utilisateur));

$req2=$bdd->query("SELECT count(*) as nb from post where fk_sujet=".$fk_topic);
$nbpost=$req2->fetch();
$nbpost=$nbpost[0];

$req3=$bdd->prepare("UPDATE sujet set nb_post=".$nbpost." where id_sujet=".$fk_topic);
$req3->execute();


$recup = $bdd->query("SELECT * FROM `post` where id_post = (SELECT MAX(id_post) FROM post)");
$donnees = $recup->fetchAll();
//print_r($donnees[0][1]);

sendMessage($donnees);
 ?>
