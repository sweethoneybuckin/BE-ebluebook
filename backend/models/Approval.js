import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Approval = sequelize.define('Approval', {
  approvalnopeg: {
    type: DataTypes.CHAR(15),
    primaryKey: true,
    allowNull: false
  },
  approvalname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  approvalemail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  approvalpassword: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'approval',
  timestamps: true
});

export default Approval;