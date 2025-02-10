import React from 'react'

const Booking:React.FC=()=> {
  return (
    <div>
      <h2>Room Booking</h2>
        <form action="">
            <label htmlFor="type">Name</label>
            <input type="text" id="type" name="type" required />

            <label htmlFor="type">Email</label>
            <input type="email" id="type" name="type" required />

            <label htmlFor="check_in">Check IN</label>
            <input type="text" id="check_in" name="check_in" required />

            <label htmlFor="check_out">Check OUT</label>
            <input type="number" id="check_out" name="check_out" required />

            <label htmlFor="room">room:</label>
            <input type="number" id="room" name="room" required />

            <button type="submit">
                Submit
            </button>
        </form>
    </div>
  )
}

export default Booking
