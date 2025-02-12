import React, { useEffect, useState } from 'react';
import { getBookings, addBooking, updateBooking, deleteBooking } from '../api';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';

const Booking: React.FC = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        const { data } = await getBookings();

        console.log("fetching book ",data);
        setBookings(data.getBooking);
    };

    const handleAddBooking = async (bookingData: any) => {
        await addBooking(bookingData);
        fetchBookings();
    };

    const handleUpdateBooking = async (updateData: any) => {
        await updateBooking(updateData);
        fetchBookings();
    };

    const handleDeleteBooking = async (guest_mail: string) => {
        await deleteBooking(guest_mail);
        fetchBookings();
    };

    return (
        <div className="container">
            <h2>Room Booking</h2>
            <BookingForm onSubmit={handleAddBooking} />
            <BookingList bookings={bookings} onUpdate={handleUpdateBooking} onDelete={handleDeleteBooking} />
        </div>
    );
};

export default Booking;
