const express = require('express');
const FoodController = require('../controllers/foodController');

const router = express.Router();
const foodController = new FoodController();

// Define routes for food-related operations
router.post('/', foodController.createFood);
router.get('/', foodController.getAllFoods);
router.put('/:id', foodController.updateFood);
router.delete('/:id', foodController.deleteFood);

module.exports = router;