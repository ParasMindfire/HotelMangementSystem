import React, { useEffect, useState } from 'react';
import { getBookings, addBooking, updateBooking, deleteBooking } from '../api';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';

const Booking: React.FC = () => {
    const [bookings, setBookings] = useState([]);
    const [editBooking, setEditBooking] = useState(null);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        const { data } = await getBookings();
        setBookings(data.getBooking);
    };

    const handleAddOrUpdateBooking = async (bookingData: any) => {
        if (editBooking) {
            await updateBooking(bookingData);
        } else {
            await addBooking(bookingData);
        }
        setEditBooking(null);
        fetchBookings();
    };

    const handleUpdateClick = (booking: any) => {
        setEditBooking(booking);
    };

    const handleDeleteBooking = async (guest_mail: string) => {
        await deleteBooking(guest_mail);
        fetchBookings();
    };

    return (
        <div className="container">
            <h2>Room Booking</h2>
            <BookingForm onSubmit={handleAddOrUpdateBooking} editBooking={editBooking} />
            <BookingList bookings={bookings} onUpdate={handleUpdateClick} onDelete={handleDeleteBooking} />
        </div>
    );
};

export default Booking;
