const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

router.post('/register', (req, res) => {
    const newUser = new User(req.body);
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
});

router.post('/login', (req, res) => {
    User.findOne({ username: req.body.username })
        .then(user => {
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch) {
                    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
                    res.json({ token });
                } else {
                    res.status(401).json({ error: 'Invalid password' });
                }
            });
        })
        .catch(err => res.status(500).json(err));
});

module.exports = router;