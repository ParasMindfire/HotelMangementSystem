import { DataTypes } from 'sequelize';
import sequelize from '../db/index';

const  Room = sequelize.define(
  'Room',
  {
    room_number: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    type: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    avilability:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true,
    },createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  },
  {
    tableName:'room'
  },
);

export default Room;



