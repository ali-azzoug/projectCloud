<?php

//require_once('./back-end/connectionBdd.php');

/*function recupCours() {
  $con=connectionBdd();
  $stmt = $con->prepare("SELECT * FROM Cours WHERE id_cours = ?");
  $stmt->bindParam(1, $id_cours, PDO::PARAM_INT);
  if( ! empty( $_GET ) ) {
  $id_cours=$_GET['id_cours'];}
  $stmt->execute();
  $result = $stmt->fetchAll();
  return $result[0][1];
}

function display_sujet() {

  $bdd=connectionBdd();

   if( ! empty( $_GET ) ) {

  $reponse = $bdd->query('SELECT * FROM sujet where fk_cours=\''.$_GET['id_cours'].'\'');

while ($donnees = $reponse->fetch()) {
echo "<tr style='transform: rotate(0);'>\n
      <th scope='row'><a href='topic.php?id_sujet=".$donnees['id_sujet']."' class='stretched-link'></a></th>\n
      <td>".$donnees['nom']."</td>\n<td>".$donnees['nb_post']."</td>\n<td>".$donnees['dernier_maj'];
echo "</td>\n</tr>\n";
}
}
}*/

function suivre_cours() {
    //$bdd=connectionBdd();
    global $bdd;
    $suivre=$bdd->query("select count(*) from suivre where fk_login='theo' and fk_cours=1");
    $donnees_suivre=$suivre->fetchAll();
    return $donnees_suivre[0][0];
}

 ?>
