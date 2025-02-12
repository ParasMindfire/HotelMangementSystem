import React, { useState } from 'react';

const RoomForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
    const [formData, setFormData] = useState({ type: '', price: '', avilability: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ type: '', price: '', avilability: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="type" placeholder="Room Type" required onChange={handleChange} value={formData.type} />
            <input type="number" name="price" placeholder="Price" required onChange={handleChange} value={formData.price} />
            <input type="number" name="avilability" placeholder="Availability" required onChange={handleChange} value={formData.avilability} />
            <button type="submit">Add Room</button>
        </form>
    );
};

export default RoomForm;
