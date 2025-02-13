import axios from 'axios';

const API_URL = "http://localhost:5000";

export const getBookings = () => axios.get(`${API_URL}/bookings`);
export const addBooking = (data: any) => axios.post(`${API_URL}/bookings`, data);
export const updateBooking = (data: any) => axios.patch(`${API_URL}/bookings`, data);
export const deleteBooking = (guest_mail: string) => axios.delete(`${API_URL}/bookings`, { data: { guest_mail } });

export const getRooms = () => axios.get(`${API_URL}/rooms`);
export const addRoom = (data: any) => axios.post(`${API_URL}/rooms`, data);
export const updateRoom = (data: any) => axios.patch(`${API_URL}/rooms`, data);
export const deleteRoom = (room_number: number) => axios.delete(`${API_URL}/rooms`, { data: { room_number } });
