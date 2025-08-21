// portfolioController.js

const Portfolio = require('../models/portfolio');

// Get all portfolio items
exports.getAllPortfolioItems = async (req, res) => {
    try {
        const items = await Portfolio.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching portfolio items', error });
    }
};

// Get a single portfolio item by ID
exports.getPortfolioItemById = async (req, res) => {
    try {
        const item = await Portfolio.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Portfolio item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching portfolio item', error });
    }
};

// Create a new portfolio item
exports.createPortfolioItem = async (req, res) => {
    const newItem = new Portfolio(req.body);
    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: 'Error creating portfolio item', error });
    }
};

// Update a portfolio item
exports.updatePortfolioItem = async (req, res) => {
    try {
        const updatedItem = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: 'Error updating portfolio item', error });
    }
};

// Delete a portfolio item
exports.deletePortfolioItem = async (req, res) => {
    try {
        await Portfolio.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting portfolio item', error });
    }
};