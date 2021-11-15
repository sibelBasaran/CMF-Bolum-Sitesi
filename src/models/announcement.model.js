'use strict'
const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

// 'announcement' table
const Announcement = sequelize.define("announcement", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    desscription: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Announcement;