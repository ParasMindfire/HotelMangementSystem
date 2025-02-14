import { Router } from "express";
import { bookController } from "../controller";

const bookingRoute=Router();


bookingRoute.get('/bookings',[],bookController.getAllBooking);
bookingRoute.post('/bookings',[],bookController.postBooking);
bookingRoute.patch('/bookings',[],bookController.updateBooking);
bookingRoute.delete('/bookings',[],bookController.deleteBooking);


export default bookingRoute;
