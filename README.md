# Kasa — Location d'appartements entre particuliers

Front-end de Kasa, une plateforme fictive de location d'appartements entre particuliers, développé en React à partir de maquettes fournies.

Projet de la formation Développeuse web d'OpenClassrooms.

![Aperçu de la page d'accueil de Kasa](https://oudin-deborah.github.io/Portfolio/Kasa_img.webp)

## Fonctionnalités

- **Accueil** : bannière et grille de cartes, une par logement, qui mènent chacune à sa fiche.
- **Fiche logement** : carrousel de photos, titre, localisation, hôte, tags, note en étoiles, description et équipements.
- **Carrousel** : boucle de la dernière à la première photo, compteur, et pas de flèches quand il n'y a qu'une photo.
- **Menus dépliants** : description et équipements d'un logement, valeurs de l'entreprise sur la page À propos.
- **Page 404** : affichée pour une adresse inconnue ou un logement qui n'existe pas.
- **Responsive** : maquettes ordinateur et mobile respectées.

## Technologies

| Rôle | Outil |
|---|---|
| Interface | React 19 |
| Routage | React Router 7 |
| Build et serveur de développement | Vite |
| Styles | Sass |
| Icônes | Font Awesome |
| Qualité | ESLint |

## Installation

Prérequis : Node.js 20 ou plus récent.

```bash
git clone https://github.com/Oudin-Deborah/P5_Kasa.git
cd P5_Kasa
npm install
npm run dev
```

Le site est alors disponible sur <http://localhost:5173/>.

## Scripts

| Commande | Effet |
|---|---|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Construit le site dans `dist/` |
| `npm run preview` | Sert le site construit |
| `npm run lint` | Analyse le code avec ESLint |

## Structure du projet

```
├── public/
│   └── data.json          Données des logements
├── src/
│   ├── assets/            Images et feuille de style Sass
│   ├── components/        Header, Footer, Cards, Slider, Collapse, Rating, Fetch
│   ├── pages/             Index, housing, About, Error404
│   ├── App.jsx            Déclaration des routes
│   └── main.jsx           Point d'entrée
├── index.html
└── vite.config.js
```

## Choix techniques

- **Route dynamique `/housing/:id`** : une seule page sert tous les logements. L'identifiant est lu dans l'adresse avec `useParams`, puis le logement est retrouvé dans les données.
- **Composants réutilisables** : le menu dépliant `Collapse` reçoit son titre et son contenu en props, et sert sur deux pages différentes.
- **États de chargement et d'erreur** : la fiche affiche un message pendant le chargement des données, et un autre si l'appel échoue.
- **Données dans un JSON** : les logements sont chargés avec `fetch` depuis `public/data.json`, comme ils le seraient depuis une API.

## Pistes d'amélioration

- Rendre le menu dépliant accessible au clavier en utilisant un vrai bouton plutôt qu'une zone cliquable.
- Donner à chaque photo du carrousel un texte alternatif qui lui est propre.
- Charger les données une seule fois et les partager, plutôt que de refaire l'appel sur chaque page.
- Mettre le site en ligne avec un déploiement automatique.

## Crédits

- Maquettes, contenus et données : OpenClassrooms.
- Développement : Déborah Oudin — [Portfolio](https://oudin-deborah.github.io/Portfolio/) · [LinkedIn](https://www.linkedin.com/in/oudin-deborah/) · [GitHub](https://github.com/Oudin-Deborah)
