const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// Route to get all portfolio items
router.get('/', portfolioController.getAllPortfolioItems);

// Route to get a single portfolio item by ID
router.get('/:id', portfolioController.getPortfolioItemById);

// Route to create a new portfolio item
router.post('/', portfolioController.createPortfolioItem);

// Route to update a portfolio item by ID
router.put('/:id', portfolioController.updatePortfolioItem);

// Route to delete a portfolio item by ID
router.delete('/:id', portfolioController.deletePortfolioItem);

module.exports = router;