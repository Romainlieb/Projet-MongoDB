const mongoose = require('mongoose');

// Définir le schéma du défi
const ChallengeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Ajoutez d'autres champs si nécessaire
});

// Créer le modèle Challenge à partir du schéma
const Challenge = mongoose.model('Challenge', ChallengeSchema);

// Exporter le modèle pour pouvoir l'utiliser dans d'autres fichiers
module.exports = Challenge;