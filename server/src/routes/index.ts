// import { Request,Response,NextFunction } from 'express';
import {Express} from 'express';
import express from 'express';
import { getAllBooking, postBooking,updateBooking,deleteBooking} from '../controller/bookController';
import { getAllrooms, postRooms,updateRooms,deleteRooms} from '../controller/roomController';

const hotelRoute:Express=express();

hotelRoute.get('/bookings',getAllBooking);
hotelRoute.post('/bookings',postBooking);
hotelRoute.patch('/bookings',updateBooking);
hotelRoute.delete('/bookings',deleteBooking);

hotelRoute.get('/rooms',getAllrooms);
hotelRoute.post('/rooms',postRooms);
hotelRoute.patch('/rooms',updateRooms);
hotelRoute.delete('/rooms',deleteRooms);

export default hotelRoute;