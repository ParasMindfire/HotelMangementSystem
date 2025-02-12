import React, { useEffect, useState } from 'react';
import { getRooms, addRoom, updateRoom, deleteRoom } from '../api';
import RoomForm from '../components/RoomForm';
import RoomList from '../components/RoomList';

const Room: React.FC = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        const { data } = await getRooms();
        setRooms(data.getRooms);
    };

    const handleAddRoom = async (roomData: any) => {
        await addRoom(roomData);
        fetchRooms();
    };

    const handleUpdateRoom = async (updateData: any) => {
        await updateRoom(updateData);
        fetchRooms();
    };

    const handleDeleteRoom = async (room_number: number) => {
        await deleteRoom(room_number);
        fetchRooms();
    };

    return (
        <div className="container">
            <h2>Room Management</h2>
            <RoomForm onSubmit={handleAddRoom} />
            <RoomList rooms={rooms} onUpdate={handleUpdateRoom} onDelete={handleDeleteRoom} />
        </div>
    );
};

export default Room;
