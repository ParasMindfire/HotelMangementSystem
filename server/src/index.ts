import express from 'express';
import { Express } from 'express';
import userRoute from './routes/index';
import sequelize from './db/index';
import syncTables from './models/syncModel';

const app: Express = express();
const port = 5000;

app.use(express.json());
app.use('/', userRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const db = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await syncTables();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

db();