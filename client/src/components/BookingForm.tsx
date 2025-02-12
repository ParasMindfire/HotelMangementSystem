import React, { useState } from 'react';

const BookingForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
    const [formData, setFormData] = useState({ guest_name: '', guest_mail: '', check_in: '', check_out: '', roomNumber: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ guest_name: '', guest_mail: '', check_in: '', check_out: '', roomNumber: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="guest_name" placeholder="Guest Name" required onChange={handleChange} value={formData.guest_name} />
            <input type="email" name="guest_mail" placeholder="Guest Email" required onChange={handleChange} value={formData.guest_mail} />
            <input type="date" name="check_in" required onChange={handleChange} value={formData.check_in} />
            <input type="date" name="check_out" required onChange={handleChange} value={formData.check_out} />
            <input type="number" name="roomNumber" placeholder="Room Number" required onChange={handleChange} value={formData.roomNumber} />
            <button type="submit">Book</button>
        </form>
    );
};

export default BookingForm;
