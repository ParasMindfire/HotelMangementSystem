import { DataTypes } from 'sequelize';
import sequelize from '../db/index';

const  Booking = sequelize.define(
  'Booking',
  {
    guest_id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    guest_name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    guest_mail: {
      type: DataTypes.STRING,
      allowNull:false,
      // unique:true,
    },
    check_in: {
      type: DataTypes.DATE,
      allowNull:false,
    },
    check_out: {
      type: DataTypes.DATE,
      allowNull:false,
    },
    roomNumber:{
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'room',
        key: 'room_number'
      },
      onDelete:'CASCADE'
    },createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  },
  {
    tableName:'booking'
  },
);

export default Booking;









