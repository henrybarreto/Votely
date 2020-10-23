import * as Sequelize from 'sequelize'
import sequelizeConnection from '../connection'
import CidadeModel from './CidadeModel';

const CandidatoModel = sequelizeConnection.define('candidato', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: Sequelize.STRING,
  numero: Sequelize.STRING,
  votos: { 
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
});

CandidatoModel.belongsTo(CidadeModel)

export default CandidatoModel