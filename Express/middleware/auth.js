module.exports = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== '15213') {
        return res.status(403).json({ error: 'Unauthorized: Invalid API key' });
    }
    next();
};
