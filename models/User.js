const Sequelize = require("sequelize");
const db = require("../config/database");


const User = db.define('user', {
    title: {
        type: Sequelize.STRING
    },
    technologies: {
        type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

module.exports = User;