const connection = require('../db');

class Food {
    constructor(id, name, description, price, image_url) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image_url = image_url;
    }

    static create(food, callback) {
        const query = 'INSERT INTO foods SET ?';
        connection.query(query, food, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: results.insertId, ...food });
        });
    }

    static getAll(callback) {
        const query = 'SELECT * FROM foods';
        connection.query(query, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    }

    static update(id, food, callback) {
        const query = 'UPDATE foods SET ? WHERE id = ?';
        connection.query(query, [food, id], (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results.affectedRows > 0);
        });
    }

    static delete(id, callback) {
        const query = 'DELETE FROM foods WHERE id = ?';
        connection.query(query, id, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results.affectedRows > 0);
        });
    }
}

module.exports = Food;