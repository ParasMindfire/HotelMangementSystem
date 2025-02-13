import express from 'express';
import { Express } from 'express';
import userRoute from './routes/index';
import sequelize from './db/index';
import syncTables from './models/syncModel';
import cors from "cors"

const app: Express = express();
const port = 5000;

app.use(cors());

app.use(cors({
  origin: 'http://localhost:5173'
}));


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