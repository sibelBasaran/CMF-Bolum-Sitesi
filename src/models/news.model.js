'use strict'
const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

// 'news' table
const New = sequelize.define("new", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = New;