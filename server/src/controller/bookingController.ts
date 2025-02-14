import sequelize from "../db/index";
import { Request, Response, NextFunction } from "express";

const getAllBooking = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const [getBooking]: any[] = await sequelize.query("SELECT * FROM booking");
        if (getBooking.length === 0) {
            return res.status(404).json({ message: "No bookings found." });
        }
        return res.status(200).json({ bookings: getBooking });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error. Unable to retrieve bookings." });
    }
}

const postBooking = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { guest_name, guest_mail, check_in, check_out, roomNumber } = req.body;
    try {
        if (!guest_name || !guest_mail || !check_in || !check_out || !roomNumber) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const [insertBooking]: any[] = await sequelize.query(
            "INSERT INTO booking (guest_name, guest_mail, check_in, check_out, roomNumber) VALUES (?,?,?,?,?)",
            {
                replacements: [guest_name, guest_mail, check_in, check_out, roomNumber],
            }
        );

        return res.status(201).json({ message: "Booking successfully created.", bookingId: insertBooking.insertId });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error. Unable to create booking." });
    }
}

const updateBooking = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { room_number, guest_mail } = req.body;
    try {
        if (!room_number || !guest_mail) {
            return res.status(400).json({ message: "Room number and guest mail are required." });
        }

        const [updateBooking]: any[] = await sequelize.query(
            "UPDATE booking SET roomNumber=? WHERE guest_mail=?",
            {
                replacements: [room_number, guest_mail],
            }
        );

        return res.status(200).json({ message: "Booking successfully updated." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error. Unable to update booking." });
    }
}

const deleteBooking = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { guest_mail } = req.body;
    try {
        if (!guest_mail) {
            return res.status(400).json({ message: "Guest mail is required." });
        }

        const [deleteBooking]: any[] = await sequelize.query(
            "DELETE FROM booking WHERE guest_mail=?",
            {
                replacements: [guest_mail],
            }
        );

        return res.status(200).json({ message: "Booking successfully deleted." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error. Unable to delete booking." });
    }
}

export {
    getAllBooking,
    postBooking,
    updateBooking,
    deleteBooking
}
