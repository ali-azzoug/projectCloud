<?php

require_once "helper.php";
require_once '../back-end/auth.php';
require_once '../back-end/topicBdd.php';

$bdd=connectionBdd();

//sendMessage($_POST['id']);

/*function console_log( $data ){
    echo '<script>';
    echo 'console.log('. json_encode( $data ) .')';
    echo '</script>';
  }*/

  if( ! empty( $_POST ) ) {

    if(suivre_cours()==1) {
   
        $id=$_POST['id'];
        //$reponse = $bdd->query('SELECT * FROM sujet where fk_cours=\''.$_GET['id'].'\'');
        $reponse = $bdd->query("SELECT cours.nom,id_sujet,sujet.nom,sujet.nb_post,dernier_maj,fk_cours FROM `sujet`JOIN cours ON sujet.fk_cours=cours.id_cours WHERE fk_cours=$id");
        
        $reponse->execute();
        //$reponse->bindParam(1, $id_cours, PDO::PARAM_INT);
        //$id_cours=$_POST['id'];
        //$reponse->execute([$id_cours]);
        $donnees = $reponse->fetchAll();
        if($donnees!=null) {
            sendMessage ($donnees);
        }
        else {
            sendError ("Pas de topics"); 
        }

    }
    else {
        sendError("L'utilisateur n'a pas accès à ce cours");
    }
  }
else {
    sendError("Donnees vides");
}



?>