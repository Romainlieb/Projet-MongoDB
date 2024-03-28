const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return next(err);
            }

            req.user = user;
            next();
        });
    } else {
        const err = new Error('Non autorisé');
        err.status = 401;
        next(err);
    }
};