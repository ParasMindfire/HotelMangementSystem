import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('hotel_management', 'root', 'Pa1ra2@3',
  {
    host: '127.0.0.1',
    dialect: 'mysql',
  }
);

export default sequelize;