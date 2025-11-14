import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Classification = sequelize.define('Classification', {
  classificationid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'classification',
  timestamps: true
});

export default Classification;