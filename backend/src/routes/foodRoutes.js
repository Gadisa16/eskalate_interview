const express = require('express');
const FoodController = require('../controllers/foodController');

const router = express.Router();
const foodController = new FoodController();

// Define routes for food-related operations
router.post('/api/foods', foodController.createFood);
router.get('/api/foods', foodController.getAllFoods);
router.put('/api/foods/:id', foodController.updateFood);
router.delete('/api/foods/:id', foodController.deleteFood);

module.exports = router;