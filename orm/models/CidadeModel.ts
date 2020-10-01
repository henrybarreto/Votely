import * as Sequelize from 'sequelize'
import sequelizeConnection from '../connection'
import CandidatoModel from './CandidatoModel';

const CidadeModel = sequelizeConnection.define('cidade', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: 
  {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

export default CidadeModel