import {Sequelize} from 'sequelize'

const sequelizeConnection = new Sequelize('sqlite::memory:');

sequelizeConnection.sync({force: true});

export default sequelizeConnection;
