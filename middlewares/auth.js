const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Invalid or missing token' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.AuthKey);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error('Token validation failed:', error);
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;

// if you pass the token in the headers, you can use the following code to get the token:
// const authMiddleware = (req, res, next) => {
//     const token = req.header('Authorization');

//     if (!token) {
//         return res.status(401).json({ message: 'No token, authorization denied' });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.AuthKey);
//         req.userId = decoded.userId;
//         next();
//     } catch (error) {
//         console.error('Token validation failed:', error);
//         res.status(401).json({ message: 'Token is not valid' });
//     }
// };

// module.exports = authMiddleware;
