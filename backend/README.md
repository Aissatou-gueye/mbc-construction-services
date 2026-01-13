# Backend Simple - MBC Construction

Backend Node.js simple pour l'envoi d'emails via Nodemailer.

## Installation

1.  Assurez-vous d'avoir Node.js installé.
2.  Dans ce dossier `backend`, installez les dépendances :
    ```bash
    npm install
    ```

## Configuration

1.  Ouvrez le fichier `.env`.
2.  Configurez vos identifiants SMTP :
    ```env
    PORT=3000
    EMAIL_HOST=smtp.votre-fournisseur.com
    EMAIL_PORT=587
    EMAIL_SECURE=false
    EMAIL_USER=votre_email@exemple.com
    EMAIL_PASS=votre_mot_de_passe
    ```

## Lancement

Pour lancer le serveur :

```bash
npm start
```

Le serveur sera accessible à l'adresse : `http://localhost:3000`.

## Utilisation

L'endpoint `POST /api/send-email` attend un corps JSON :

```json
{
  "name": "Jean Dupont",
  "email": "jean.dupont@email.com",
  "service": "Construction",
  "message": "Bonjour, je voudrais un devis..."
}
```
