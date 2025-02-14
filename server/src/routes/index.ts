import express from 'express';

import roomRoute from './RoomRoutes';
import bookingRoute from './BookingRoute';

const router=express.Router();

router.use('/',roomRoute);
router.use('/',bookingRoute);

export default router;