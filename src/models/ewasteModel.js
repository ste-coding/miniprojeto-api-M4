const { v4: uuidv4 } = require('uuid');

class RecyclingPoint {
    constructor(name, city, type) {
        this.id = uuidv4();
        this.name = name;
        this.city = city;
        this.type = type;
    }
}

module.exports = RecyclingPoint;
