# Forum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

## Build

1ère possibilité : 
Pour build le projet, il faudra réaliser la commande : 
    - docker-compose up : cette commande va build le projet, initialiser les images necessaire

2ème possibilité :
Build séparément les services avec la commande docker build.
Pour 1 service il faudra : 
    - Se placer dans le répertoire du service avec cd "nom du répertoire"
    - Lancer la commande : docker build -t "nom du service" .
Par exemple, pour build le service angular : cd forumangular puis docker build -t forumangular .

## Running services

Pour lancer les services séparément sans passer par docker-compose up, on peut directement via une commande run les services :
    - Avec la commande docker run, par exemple pour le forumangular : docker run -it p:4200:4200 forumangular .


## Further help

Pour avoir plus d'informations sur le fonctionnement contacter nous directemement. 
