import React, { useEffect, useState } from 'react';
import { getRooms, addRoom, updateRoom, deleteRoom } from '../api';
import RoomForm from '../components/RoomForm';
import RoomList from '../components/RoomList';

const Room: React.FC = () => {
    const [rooms, setRooms] = useState([]);
    const [editingRoom, setEditingRoom] = useState<any | null>(null); 

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        const { data } = await getRooms();
        setRooms(data.getRooms);
    };

    const handleAddOrUpdateRoom = async (roomData: any) => {
        if (editingRoom) {
            await updateRoom(roomData);
        } else {
            await addRoom(roomData); 
        }
        setEditingRoom(null);
        fetchRooms();
    };

    const handleEditRoom = (room: any) => {
        setEditingRoom(room); 
    };

    const handleDeleteRoom = async (room_number: number) => {
        await deleteRoom(room_number);
        fetchRooms();
    };

    return (
        <div className="container">
            <h2>Room Management</h2>
            <RoomForm onSubmit={handleAddOrUpdateRoom} editingRoom={editingRoom} />
            <RoomList rooms={rooms} onEdit={handleEditRoom} onDelete={handleDeleteRoom} />
        </div>
    );
};

export default Room;
