<?php

require_once "helper.php";
require_once '../back-end/auth.php';

$bdd=connectionBdd();

if( ! empty( $_POST ) ) {
    $id=$_POST['id'];

    $reponse = $bdd->query("SELECT cours.id_cours,cours.nom as nom_cours ,sujet.nom as nom_topic,id_post,post.date,post.description,fk_utilisateur,fk_sujet FROM `post`JOIN sujet ON sujet.id_sujet=post.fk_sujet JOIN cours ON cours.id_cours=sujet.fk_cours WHERE fk_sujet=$id");
        
    $reponse->execute();
    $donnees = $reponse->fetchAll();
    if($donnees!=null) {
        sendMessage ($donnees);
    }
    else {
        sendError ("Pas de posts"); 
    }

}
else {
    sendError("Donnees vides");
}


?>