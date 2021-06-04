<?php

require_once 'helper.php';
require_once '../back-end/auth.php';

// check qu'on est bien authentifié
if ( basename($_SERVER['SCRIPT_NAME']) != 'checkLogin.php' ) {
  // Modifiez la ligne ci-dessous de manière à ce qu'elle appelle votre
  // fonction qui vérifie l'existence du $_SESSION[...] qui indique que
  // l'utilisateur s'est déjà authentifié. 
  // Cette fonction doit renvoyer un booléen qui vaut true si l'utilisateur
  // a déjà été authentifié, et false sinon.
  if ( isLogged() == false ){
    sendError ('not authenticated');
  }
 else{
    sendMessage('');
  }
}
 else{
  if(isCorrect()){
    sendMessage('');
  }
  else{
    sendError ('Mauvaise combinaison');
  }
}

?>