import React from 'react';

interface BookingProps {
    bookings: any[];
    onUpdate: (data: any) => void;
    onDelete: (guest_mail: string) => void;
}

const BookingList: React.FC<BookingProps> = ({ bookings, onUpdate, onDelete }) => {
    return (
        <div>
            <h3>Bookings</h3>
            <ul>
                {bookings.map((booking, index) => (
                    <li key={index}>
                        <strong>{booking.guest_name}</strong> ({booking.guest_mail})  
                        - Room: {booking.roomNumber}, Check-in: {booking.check_in}, Check-out: {booking.check_out}
                        <button onClick={() => onUpdate({ guest_mail: booking.guest_mail, room_number: prompt("New Room Number") })}>
                            Update
                        </button>
                        <button onClick={() => onDelete(booking.guest_mail)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;
