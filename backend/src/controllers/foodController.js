class FoodController {
    constructor(foodModel) {
        this.foodModel = foodModel;
    }

    async createFood(req, res) {
        try {
            const foodData = req.body;
            const newFood = await this.foodModel.create(foodData);
            res.status(201).json(newFood);
        } catch (error) {
            res.status(400).json({ message: 'Error creating food item', error: error.message });
        }
    }

    async getAllFoods(req, res) {
        try {
            const foods = await this.foodModel.findAll();
            res.status(200).json(foods);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving food items', error: error.message });
        }
    }

    async updateFood(req, res) {
        try {
            const { id } = req.params;
            const foodData = req.body;
            const updatedFood = await this.foodModel.update(id, foodData);
            if (updatedFood) {
                res.status(200).json(updatedFood);
            } else {
                res.status(404).json({ message: 'Food item not found' });
            }
        } catch (error) {
            res.status(400).json({ message: 'Error updating food item', error: error.message });
        }
    }

    async deleteFood(req, res) {
        try {
            const { id } = req.params;
            const deleted = await this.foodModel.delete(id);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Food item not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting food item', error: error.message });
        }
    }
}

module.exports = FoodController;