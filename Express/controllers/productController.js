const { v4: uuidv4 } = require('uuid');
let products = require('../data/products.json');

// GET all
exports.getAllProducts = (req, res) => {
    const { category, page = 1, limit = 5 } = req.query;

    let results = [...products];

    // Filter by category
    if (category) {
        results = results.filter(p => p.category === category);
    }

    // Pagination
    const start = (page - 1) * limit;
    const paginated = results.slice(start, start + +limit);

    res.json(paginated);
};

// GET by ID
exports.getProductById = (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
};

// POST
exports.createProduct = (req, res) => {
    const product = { id: uuidv4(), ...req.body };
    products.push(product);
    res.status(201).json(product);
};

// PUT
exports.updateProduct = (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Product not found' });

    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
};

// DELETE
exports.deleteProduct = (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Product not found' });

    products.splice(index, 1);
    res.status(204).end();
};

// SEARCH
exports.searchProducts = (req, res) => {
    const { q } = req.query;
    const result = products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
    res.json(result);
};

// STATS
exports.getStats = (req, res) => {
    const counts = products.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + 1;
        return acc;
    }, {});
    res.json(counts);
};
