# Guide de Mise en Ligne

L'application est composée de deux parties qui doivent être hébergées séparément pour une production gratuite/simple :
1.  **Backend** (Node.js) : Doit tourner en permanence pour envoyer les emails. (Hébergeur suggéré : **Render** ou **Railway**).
2.  **Frontend** (React) : Site statique. (Hébergeur suggéré : **Vercel** ou **Netlify**).

## Étape 1 : Mettre le code sur GitHub
(Si ce n'est pas déjà fait)
1.  Créez un dépôt sur GitHub.com.
2.  Poussez tout votre code (y compris le dossier `backend`) sur ce dépôt.

## Étape 2 : Déployer le Backend (Render)
1.  Créez un compte sur [render.com](https://render.com).
2.  Cliquez sur "New +" -> "Web Service".
3.  Connectez votre dépôt GitHub.
4.  Configurez le service :
    *   **Root Directory** : `backend` (Très important !)
    *   **Build Command** : `npm install`
    *   **Start Command** : `node server.js`
5.  Dans la section "Environment Variables", ajoutez vos clés secrètes (comme dans votre fichier `.env` local) :
    *   `EMAIL_HOST` : `smtp.gmail.com`
    *   `EMAIL_PORT` : `465` (ou `587` selon votre choix)
    *   `EMAIL_SECURE` : `true` (si port 465)
    *   `EMAIL_USER` : `votre_email@gmail.com`
    *   `EMAIL_PASS` : `votre_mot_de_passe_app`
    *   (Optionnel) `EMAIL_RECEIVER`
6.  Lancez le déploiement. Une fois fini, Render vous donnera une URL (ex: `https://mbc-backend.onrender.com`). Copiez-la.

## Étape 3 : Déployer le Frontend (Vercel)
1.  Créez un compte sur [vercel.com](https://vercel.com).
2.  Cliquez sur "Add New..." -> "Project".
3.  Importez votre dépôt GitHub.
4.  Configurez le projet :
    *   **Root Directory** : `./` (Racine, par défaut)
    *   **Environment Variables** : Ajoutez une variable nommée `VITE_API_URL` avec comme valeur l'URL de votre backend Render (sans le slash à la fin).
        *   Exemple : `VITE_API_URL` = `https://mbc-backend.onrender.com`
5.  Cliquez sur "Deploy".

## Résumé
*   Le site sera accessible via l'URL Vercel.
*   Quand un utilisateur enverra un formulaire, le site contactera l'URL définie dans `VITE_API_URL` (votre backend Render).
*   Le backend enverra l'email via Gmail.
