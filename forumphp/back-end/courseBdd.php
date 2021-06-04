<?php

require_once('./back-end/connectionBdd.php');

function display_cours() {

  $bdd=connectionBdd();
  $reponse = $bdd->query('SELECT * FROM Cours');

while ($donnees = $reponse->fetch()) {
echo "<tr style='transform: rotate(0);'>\n
      <th scope='row'><a href='topic.php?id_cours=".$donnees['id_cours']."' class='stretched-link'></a></th>\n
      <td>".$donnees['nom']."</td>\n<td>".$donnees['nb_sujet']."</td>\n<td>".$donnees['nb_post']."</td>\n<td>".$donnees['date_maj']."</td>\n</tr>\n";
}

}

 ?>
