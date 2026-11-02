# Le petit quiz

Un quiz de culture générale en vanilla JavaScript, avec cinq questions par partie, un chronomètre de 20 secondes, un score calculé selon la rapidité, un retour immédiat et une barre de progression.

## Installation

Aucune dépendance ou étape de compilation n’est nécessaire. Clonez ou téléchargez le projet, puis ouvrez `index.html` dans un navigateur moderne.

Pour un développement local, vous pouvez aussi servir le dossier avec n’importe quel serveur statique, par exemple :


## Utilisation

1. Cliquez sur **Commencer le quiz**.
2. Sélectionnez une réponse avant la fin des 20 secondes.
3. Consultez le feedback immédiat, puis passez à la question suivante.
4. À la fin, consultez votre score et les meilleurs scores enregistrés dans le navigateur.
5. Cliquez sur **Rejouer** pour démarrer une nouvelle partie.

Le quiz mélange des questions à choix multiple et des questions **vrai/faux**. Les meilleurs scores sont conservés dans le `localStorage` de l’appareil. Si ce stockage est indisponible ou invalide, le quiz reste jouable sans sauvegarde.

## Fonctionnalités

- Cinq questions tirées d’une banque mélangée à chaque partie.
- Chronomètre individuel de 20 secondes et zéro point en cas d’expiration.
- Score maximal de 100 points par bonne réponse, diminué de 5 points par seconde écoulée.
- Feedback immédiat et affichage de la bonne réponse.
- Questions à choix multiple et vrai/faux, identifiées dans l’interface.
- Barre de progression, rejouabilité et leaderboard persistant.
- Mise en page responsive, HTML sémantique, focus clavier visible et prise en charge de la réduction des animations.

