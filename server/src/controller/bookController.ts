import sequelize from "../db/index"
import { Request,Response,NextFunction } from 'express';

const getAllBooking=async(req:Request,res:Response,next:NextFunction):Promise<any>=>{
    const [getBooking]:any[]=await sequelize.query("select * from booking");
    return res.status(200).json({getBooking});
}

const postBooking=async(req:Request,res:Response,next:NextFunction):Promise<any>=>{
    const {guest_name,guest_mail,check_in,check_out,roomNumber}=req.body;

    const [insertBooking]:any[]=await sequelize.query("insert into booking (guest_name,guest_mail,check_in,check_out,roomNumber) values (?,?,?,?,?)",{
        replacements:[guest_name,guest_mail,check_in,check_out,roomNumber]
    })

    return res.status(200).json(insertBooking);
}

const updateBooking=async(req:Request,res:Response,next:NextFunction):Promise<any>=>{
    const {room_number,guest_mail}=req.body;

    const [updateBooking]:any[]=await sequelize.query("update booking set roomNumber=? where guest_mail=?",{
        replacements:[room_number,guest_mail]
    })

    return res.status(200).json(updateBooking);
}

const deleteBooking=async(req:Request,res:Response,next:NextFunction):Promise<any>=>{
    const {guest_mail}=req.body;

    const [deleteBooking]:any[]=await sequelize.query("DELETE FROM booking WHERE guest_mail=?;",{
        replacements:[guest_mail]
    })

    return res.status(200).json(deleteBooking);
}

export{
    getAllBooking,
    postBooking,
    updateBooking,
    deleteBooking
}