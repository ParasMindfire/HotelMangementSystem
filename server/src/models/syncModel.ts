import Booking from "./booking";
import Room from "./room";

const syncTables = async () => {
  await Room.sync({ alter: true });
  console.log('Room Table synced successfully.');

  await Booking.sync({ alter: true });
  console.log('Booking Table synced successfully.');
};

export default syncTables;