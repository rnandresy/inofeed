🍖 InoFeed — Le Journal de Bord de Grand Line

Bienvenue à bord ! *InoFeed* est une application web Full-Stack ultra-dynamique conçue pour tester mes compétences avant de rejoindre l'équipage. Inspiré par l'univers de One Piece et la détermination de Luffy, ce projet relie un backend robuste à un frontend au design "Avis de Recherche" qui a du punch.

L'objectif ? Devenir le Roi des Développeurs (ou au moins décrocher un super stage) !

🚀 Fonctionnalités "Gomu Gomu"

Journal de Bord (CRUD Complet) :** Publication de messages en temps réel sous forme d'avis de recherche (Wanted).
Système de Primes (Incrémentation) :** Possibilité de booster la prime de recherche d'un pirate via un bouton Like interactif.
Nettoyage de Pont (Suppression) :** Les messages obsolètes peuvent être supprimés de la base de données instantanément.
Zéro Blocage CORS :** Intégration d'un Proxy inverse avec Vite pour sécuriser et fluidifier les requêtes asynchrones en local.

🛠️ Le Matériel de Navigation (Tech Stack)

Backend (Le Navire)
Framework : Laravel 11 (API REST épurée)
Base de données : MySQL (gérée via Laragon)

Frontend (La Voilure)
Framework : React.js (via Vite)
Design : Custom CSS inline, thème Dark Manga & Wanted Posters rétro.
Gestion des données : Hooks React (`useState`, `useEffect`) et requêtes HTTP asynchrones (`Fetch API`).

📦 Installation et Lancement

Pour cloner ce projet et le faire tourner sur ta machine locale, sors ton terminal et suis le guide :

I. Préparation du Backend (Laravel)
Entre dans le dossier backend
cd inofeed-backend

Installe les dépendances PHP
composer install

Configure ta base de données dans le fichier .env (ex: DB_DATABASE=inofeed)
Puis lance les migrations pour créer la table des primes
php artisan migrate:fresh

Lance le serveur d'API
php artisan serve

Le backend tournera gentiment sur `http://127.0.0.1:8000`.

II. Préparation du Frontend (React)

Ouvre un autre terminal et va dans le dossier frontend
cd inofeed-frontend

Installe les packages Node
npm install

Lance le serveur de développement Vite
npm run dev

Ouvre ton navigateur sur le port indiqué par Vite (`http://localhost:5174`) et commence ton aventure !

💡 Les Pièges Évités durant le Voyage (Post-Mortem)

Parce qu'une traversée sur Grand Line n'est jamais de tout repos, voici les monstres marins que j'ai dû terrasser sur la route :

1. L'attaque du CORS : Résolue avec brio en mettant en place un système de proxy au niveau de la configuration de Vite, évitant les conflits d'origines entre `localhost` et `127.0.0.1`.
2. Le bug du Token inattendu (Unexpected token 'u') : Un classique oubli de la balise d'ouverture "<?php" dans les fichiers de routage/contrôleurs qui renvoyait le code brut au lieu du JSON attendu. Diagnostic posé et résolu rapidement.

🏴‍☠️ Équipage
Développeur : Un étudiant ultra-motivé en Système et Réseaux, prêt à coder plus vite que son ombre.
Inspirations : Eiichiro Oda & la passion du code propre.

"Le destin, le passage du temps, les rêves des hommes... Tant que les devs chercheront le sens de la liberté, ces choses ne cesseront d'exister !"
