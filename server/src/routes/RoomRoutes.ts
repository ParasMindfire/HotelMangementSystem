import { Router } from "express";
import { roomController } from "../controller";

const roomRoute=Router();


roomRoute.get('/rooms',roomController.getAllrooms);
roomRoute.post('/rooms',roomController.postRooms);
roomRoute.patch('/rooms',roomController.updateRooms);
roomRoute.delete('/rooms',roomController.deleteRooms);


export default roomRoute;
