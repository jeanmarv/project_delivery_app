const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');

const validateToken = async (req, res, next) => {
    const secretKey = readFileSync('jwt.evaluation.key', 'utf-8');

    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    try {
        jwt.verify(authorization, secretKey);
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next();
};

module.exports = validateToken;