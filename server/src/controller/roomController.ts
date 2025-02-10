import sequelize from "../db/index"
import { Request,Response,NextFunction } from 'express';

const getAllrooms=async(req:Request,res:Response,next:NextFunction):Promise<any>=>{

    const [getRooms]:any[]=await sequelize.query("select * from room");
    return res.status(200).json({getRooms});
}

const postRooms=async(req:Request,res:Response,next:NextFunction):Promise<any>=>{
    console.log("heloooooo");
    const {type,price,avilability}=req.body;

    console.log("body ",req.body);

    const [insertRoom]:any[]=await sequelize.query("insert into room (type,price,avilability) values (?,?,?)",{
        replacements:[type,price,avilability]
    })

    return res.status(200).json(insertRoom);
}

const updateRooms=async(req:Request,res:Response,next:NextFunction):Promise<any>=>{
    const {availability,room_number}=req.body;

    const [updateRoom]:any[]=await sequelize.query("update room set avilability=? where room_number=?",{
        replacements:[availability,room_number]
    })

    return res.status(200).json(updateRoom);
}

const deleteRooms=async(req:Request,res:Response,next:NextFunction):Promise<any>=>{
    const {room_number}=req.body;

    const [deleteRoom]:any[]=await sequelize.query("DELETE FROM room WHERE room_number=?;",{
        replacements:[room_number]
    })

    return res.status(200).json(deleteRoom);
}

export{
    getAllrooms,
    postRooms,
    updateRooms,
    deleteRooms
}