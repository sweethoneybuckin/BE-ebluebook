import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Creator from './Creator.js';
import Approval from './Approval.js';
import BlueBookDB from './BlueBookDB.js';

const LogHistory = sequelize.define('LogHistory', {
  loghistoryid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  user_nopeg: {
    type: DataTypes.CHAR(15),
    allowNull: false,
    references: {
      model: 'creator',
      key: 'creatornopeg'
    },
    comment: 'Foreign key to creator table'
  },
  activity: {
    type: DataTypes.ENUM('add', 'edit', 'delete'),
    allowNull: false,
    comment: 'Type of activity: add, edit, or delete'
  },
  object: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'bluebookdb',
      key: 'bluebookdbid'
    },
    comment: 'References bluebookdbid from bluebookdb table'
  },
  ip_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  approver_nopeg: {
    type: DataTypes.CHAR(15),
    allowNull: true,
    references: {
      model: 'approval',
      key: 'approvalnopeg'
    },
    comment: 'Foreign key to approval table'
  }
}, {
  tableName: 'loghistory',
  timestamps: true
});

// Define relationships
LogHistory.belongsTo(Creator, {
  foreignKey: 'user_nopeg',
  targetKey: 'creatornopeg',
  as: 'creator'
});

LogHistory.belongsTo(Approval, {
  foreignKey: 'approver_nopeg',
  targetKey: 'approvalnopeg',
  as: 'approver'
});

LogHistory.belongsTo(BlueBookDB, {
  foreignKey: 'object',
  targetKey: 'bluebookdbid',
  as: 'bluebook'
});

Creator.hasMany(LogHistory, {
  foreignKey: 'user_nopeg',
  sourceKey: 'creatornopeg'
});

Approval.hasMany(LogHistory, {
  foreignKey: 'approver_nopeg',
  sourceKey: 'approvalnopeg'
});

BlueBookDB.hasMany(LogHistory, {
  foreignKey: 'object',
  sourceKey: 'bluebookdbid'
});

export default LogHistory;