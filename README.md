## Mon Projet - Gestion Utilisateurs avec React, Node.js, Prisma et PostgreSQL

## Description

Ce projet est une application web permettant de gérer des utilisateurs avec inscription, connexion, et affichage des détails utilisateur.  
La partie frontend est développée en React, la partie backend en Node.js avec Express.  
Prisma est utilisé comme ORM pour interagir avec une base de données PostgreSQL hébergée sur Supabase.

---

## Fonctionnalités

- Inscription d’un nouvel utilisateur (nom, email)  
- Connexion via email  
- Affichage des détails de l’utilisateur connecté  
- Persistance des données dans PostgreSQL via Prisma

---

## Prérequis

- Node.js (version 16 ou plus recommandée)  
- npm ou yarn  
- Une base de données PostgreSQL (ex: Supabase)  
- Prisma CLI

---

## Installation

1. Clonez le dépôt :  
   ```bash
   git clone <URL_DU_DEPOT>
   cd <NOM_DU_REPO>
2. Installer les modules frontend et backend utilisés
   - cd backend => npm install
   - cd frontend => npm install
3.  Créez un fichier .env dans le dossier backend
4.  Créer un projet sur Supabase et ajouter l'URL fournie par le projet
dans une variable DATABASE_URL dans le fichier .env
5. Générer Prisma Client et migrer la base
   - cd ../backend => npx prisma generate
                      npx prisma migrate dev --name init
6. Sur deux terminaux différents, lancer les serveurs backend et frontend
   - cd ../backend => npm start
   - cd ../frontend => npm start
La page web sera accessible sur https:/localhost:3000.
Elle communique avec le backend se trouvant sur https:/localhost:5000.
   
## Structure du projet
/backend : serveur Node.js + Express + Prisma

/frontend : application React

## Routes 
POST /register : inscription d'un utilisateur

POST /login : connexion d'un utilisateur

GET /api/users/:id : récupérer les infos d'un utilisateur

POST /show-detail : afficher les détails d'un utilisateur
  
   
