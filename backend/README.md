# Food App Backend

## Overview
This project is a backend implementation for a food application, providing a RESTful API to manage food items and restaurant entries. The API supports various operations such as creating, reading, updating, and deleting food and restaurant data.

## Technologies Used
- Node.js
- Express.js
- MySQL
- dotenv for environment variable management

## Project Structure
```
food-app-backend
├── src
│   ├── controllers          # Contains controllers for handling requests
│   │   ├── foodController.js
│   │   └── restaurantController.js
│   ├── models               # Contains models for data structure
│   │   ├── foodModel.js
│   │   └── restaurantModel.js
│   ├── routes               # Contains route definitions
│   │   ├── foodRoutes.js
│   │   └── restaurantRoutes.js
│   ├── db.js                # Database connection setup
│   └── app.js               # Main application entry point
├── package.json             # NPM configuration file
├── .env                     # Environment variables
└── README.md                # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd food-app-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your MySQL database credentials:
   ```
   USER=root
   DATABASE=food_app
   PASSWORD=Gad123@cs
   ```

4. Start the application:
   ```
   npm start
   ```

## API Endpoints
### Food Endpoints
- **GET** `/api/foods` - Retrieve a list of all food items.
- **POST** `/api/foods` - Create a new food item.
- **PUT** `/api/foods/:id` - Update an existing food item by ID.
- **DELETE** `/api/foods/:id` - Delete a food item by ID.

### Restaurant Endpoints
- **GET** `/api/restaurants` - Retrieve a list of all restaurants.
- **POST** `/api/restaurants` - Create a new restaurant.
- **PUT** `/api/restaurants/:id` - Update an existing restaurant by ID.
- **DELETE** `/api/restaurants/:id` - Delete a restaurant by ID.

## Usage Examples
- To create a new food item, send a POST request to `/api/foods` with the food details in the request body.
- To retrieve all restaurants, send a GET request to `/api/restaurants`.

## Error Handling
The API provides meaningful error messages and appropriate HTTP status codes for various scenarios, ensuring a clear understanding of any issues encountered during requests.

## License
This project is licensed under the MIT License.