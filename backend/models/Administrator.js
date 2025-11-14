import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Administrator = sequelize.define('Administrator', {
  administratornopeg: {
    type: DataTypes.CHAR(15),
    primaryKey: true,
    allowNull: false
  },
  administratorname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  administratoremail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  administratorpassword: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'administrator',
  timestamps: true
});

export default Administrator;