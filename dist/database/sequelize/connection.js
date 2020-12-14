"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizeConnection = new sequelize_1.Sequelize('sqlite::memory:');
sequelizeConnection.sync({ force: true });
exports.default = sequelizeConnection;
