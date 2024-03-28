# Projet MongoDB - API de défis d'éco-conception

Ce projet est une API de défis d'éco-conception aléatoires développée avec le framework Express.js et MongoDB comme base de données. L'API permet à n'importe qui de récupérer aléatoirement des défis et fournit des routes pour ajouter, modifier et supprimer des défis pour des utilisateurs authentifiés.

## Configuration

Pour configurer le projet, suivez les étapes suivantes :

1. Clonez le dépôt : `git clone https://github.com/Romainlieb/Projet-MongoDB.git`
2. Installez les dépendances : `npm install`
3. Configurez votre fichier .env avec les informations de votre base de données MongoDB.

## Lancement

Pour lancer le projet, utilisez la commande suivante : `npm start`

## Fonctionnalités

1. **Récupération d'un défi :** L'API renvoie un défi aléatoire sur une route non authentifiée dans un format JSON.
2. **Récupération de multiples défis :** L'API peut renvoyer plusieurs défis aléatoires, jusqu'à 100 par requête, dans un format JSON sans être authentifié.
3. **Ajout de défi :** Avec une requête POST, vous pouvez ajouter des défis en tant qu'utilisateur ADMINISTRATEUR (la route doit être authentifiée).
4. **Modification de défis :** Avec une requête PUT, vous pouvez modifier un défi spécifique (grâce à son id, route authentifiée).
5. **Suppression de défis :** L'utilisateur peut supprimer un défi grâce à son id (Route authentifiée).

## Tests

Pour lancer les tests, installer l'extention VS Code Rest Client et dans testAPI.http clickez sur Send Request

## Contraintes techniques

- **Framework :** Utilisation obligatoire d’Express.js.
- **Persistance des données :** Utilisation de MongoDB comme base de données.
- **Authentification :** Utilisation de tokens JWT pour l'authentification.