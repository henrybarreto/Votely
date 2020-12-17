import * as Sequelize from 'sequelize'
import sequelizeConnection from '../../config/db_sequelize_connection'
import CidadeModel from './cidade';

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