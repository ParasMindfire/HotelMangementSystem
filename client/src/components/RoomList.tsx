import React from 'react';

interface RoomProps {
    rooms: any[];
    onUpdate: (data: any) => void;
    onDelete: (room_number: number) => void;
}

const RoomList: React.FC<RoomProps> = ({ rooms, onUpdate, onDelete }) => {
    return (
        <div>
            <h3>Room List</h3>
            <ul>
                {rooms.map((room, index) => (
                    <li key={index}>
                        Type: <strong>{room.type}</strong> - Price: ${room.price} - Available: {room.avilability}
                        <button onClick={() => onUpdate({ room_number: room.room_number, availability: prompt("New Availability") })}>
                            Update
                        </button>
                        <button onClick={() => onDelete(room.room_number)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomList;
