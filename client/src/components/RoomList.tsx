import React from 'react';

interface RoomProps {
    rooms: any[];
    onEdit: (room: any) => void;
    onDelete: (room_number: number) => void;
}

const RoomList: React.FC<RoomProps> = ({ rooms, onEdit, onDelete }) => {
    return (
        <div>
            <h3>Room List</h3>
            <ul>
                {rooms.map((room, index) => (
                    <li key={index}>
                        Room No: <strong>{room.room_number}</strong> - Type: {room.type} - Price: ${room.price} - Available: {room.avilability}
                        <button onClick={() => onEdit(room)}>Edit</button>
                        <button onClick={() => onDelete(room.room_number)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomList;
