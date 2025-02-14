import sequelize from "../db/index";
import { Request, Response, NextFunction } from "express";

const getAllrooms = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const [getRooms]: any[] = await sequelize.query("SELECT * FROM room");
        if (getRooms.length === 0) {
            return res.status(404).json({ message: "No rooms found." });
        }
        return res.status(200).json({ rooms: getRooms });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error. Unable to retrieve rooms." });
    }
}

const postRooms = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { room_number, type, price, availability } = req.body;

    try {
        if (!room_number || !type || !price || availability === undefined) {
            return res.status(400).json({ message: "All fields (room_number, type, price, availability) are required." });
        }

        const [insertRoom]: any[] = await sequelize.query(
            "INSERT INTO room (room_number, type, price, avilability) VALUES (?,?,?,?)",
            {
                replacements: [room_number, type, price, availability],
            }
        );

        return res.status(201).json({ message: "Room successfully added.", roomId: insertRoom.insertId });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error. Unable to add room." });
    }
}

const updateRooms = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { availability, room_number } = req.body;

    try {
        if (!availability || !room_number) {
            return res.status(400).json({ message: "Both room_number and availability are required." });
        }

        const [updateRoom]: any[] = await sequelize.query(
            "UPDATE room SET avilability=? WHERE room_number=?",
            {
                replacements: [availability, room_number],
            }
        );

        return res.status(200).json({ message: "Room availability successfully updated." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error. Unable to update room." });
    }
}

const deleteRooms = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { room_number } = req.body;

    try {
        if (!room_number) {
            return res.status(400).json({ message: "Room number is required." });
        }

        const [deleteRoom]: any[] = await sequelize.query(
            "DELETE FROM room WHERE room_number=?",
            {
                replacements: [room_number],
            }
        );

        return res.status(200).json({ message: "Room successfully deleted." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error. Unable to delete room." });
    }
}

export {
    getAllrooms,
    postRooms,
    updateRooms,
    deleteRooms
}
