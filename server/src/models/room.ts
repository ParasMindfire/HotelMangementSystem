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
    }
  },
  {
    tableName:'room'
  },
);

export default Room;


