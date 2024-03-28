// Importation des modules nécessaires
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Initialisation d'Express
const app = express();

// Middleware pour analyser le corps des requêtes JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Importation des routes
const challengeRoutes = require('./routes/routes');
const authRoutes = require('./routes/authRoutes');

// Utilisation des routes
app.use('/auth', authRoutes);

// Importation du middleware d'authentification JWT
const authMiddleware = require('./middlewares/authMiddleware');

// Utilisation du middleware d'authentification JWT
app.use(authMiddleware);

// Utilisation des autres routes
app.use('/api', challengeRoutes);

// Démarrage du serveur
app.listen(3000, () => console.log('Serveur démarré sur le port 3000'));

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({ error: err.toString() });
  });