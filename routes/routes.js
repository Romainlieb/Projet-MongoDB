const express = require('express');
const router = express.Router();
const Challenge = require('../models/challenge');
const authMiddleware = require('../middlewares/authMiddleware'); // Importation du middleware d'authentification JWT

// Route pour ajouter un nouveau défi
router.post('/challenge', authMiddleware, (req, res) => { // Utilisation du middleware d'authentification JWT
    if (req.user && req.user.role === 'ADMINISTRATOR') {
        Challenge.create(req.body)
            .then(challenge => res.status(201).json(challenge))
            .catch(err => res.status(500).json({ error: err }));
    } else {
        res.status(403).json({ error: 'Pas authorisé à ajouter un nouveau défi' });
    }
});

// Route pour modifier un défi existant
router.put('/challenge/:id', authMiddleware, (req, res) => { // Utilisation du middleware d'authentification JWT
    if (req.user && req.user.role === 'ADMINISTRATOR') {
        Challenge.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(challenge => res.json(challenge))
            .catch(err => res.status(500).json({ error: err }));
    } else {
        res.status(403).json({ error: 'Pas authorisé à modifier un nouveau défi' });
    }
});

// Route pour supprimer un défi
router.delete('/challenge/:id', authMiddleware, (req, res) => { // Utilisation du middleware d'authentification JWT
    if (req.user && req.user.role === 'ADMINISTRATOR') {
        Challenge.findByIdAndDelete(req.params.id)
            .then(() => res.json({ message: 'Challenge deleted' }))
            .catch(err => res.status(500).json({ error: err }));
    } else {
        res.status(403).json({ error: 'Pas authorisé à supprimer un nouveau défi' });
    }
});

// Route pour récupérer tous les défis
router.get('/challenge', authMiddleware, (req, res) => { // Utilisation du middleware d'authentification JWT
    Challenge.find()
        .then(challenges => res.json(challenges))
        .catch(err => res.status(500).json({ error: err }));
});

// Route pour supprimer tous les défis
router.delete('/challenge', authMiddleware, (req, res) => { // Utilisation du middleware d'authentification JWT
    if (req.user && req.user.role === 'ADMINISTRATOR') {
        Challenge.deleteMany({})
            .then(() => res.json({ message: 'All challenges deleted' }))
            .catch(err => res.status(500).json({ error: err }));
    } else {
        res.status(403).json({ error: 'Pas authorisé à supprimer tous les défis' });
    }
});

module.exports = router;