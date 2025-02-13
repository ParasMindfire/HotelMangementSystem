import React, { useState, useEffect } from 'react';

interface RoomFormProps {
    onSubmit: (data: any) => void;
    editingRoom?: any | null;
}

const RoomForm: React.FC<RoomFormProps> = ({ onSubmit, editingRoom }) => {
    const [formData, setFormData] = useState({ room_number: '', type: '', price: '', avilability: '' });

    useEffect(() => {
        if (editingRoom) {
            setFormData(editingRoom); 
        }
    }, [editingRoom]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ room_number: '', type: '', price: '', avilability: '' }); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" name="room_number" placeholder="Room Number" required onChange={handleChange} value={formData.room_number} disabled={!!editingRoom} />
            <input type="text" name="type" placeholder="Room Type" required onChange={handleChange} value={formData.type} />
            <input type="number" name="price" placeholder="Price" required onChange={handleChange} value={formData.price} />
            <input type="number" name="avilability" placeholder="avilability" required onChange={handleChange} value={formData.avilability} />
            <button type="submit">{editingRoom ? "Update Room" : "Add Room"}</button>
        </form>
    );
};

export default RoomForm;
