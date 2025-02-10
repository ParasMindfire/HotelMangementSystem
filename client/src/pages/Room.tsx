import React, { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios';

const Room:React.FC=()=> {
    const [room,setRoom]=useState({
        type:"",
        price:"",
        avilability:""
    })

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setRoom({...room,[e.target.name]:e.target.value})
        // console.log(e.target.name);
        // console.log(e.target.value);
    }

    const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        // const response = await fetch('https://localhost:5000/rooms', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(room)
        //   })

        //   console.log("response ",response);

        console.log("room ",room);



        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({room})
        // };
        // const response = await fetch('https://localhost:5000/rooms', requestOptions);
        // const data = await response.json();

        // console.log("data aya",data);

        const {data} = await axios.post('https://localhost:5000/rooms', {room}, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        console.log("data ",data);
    }



  return (
    <div>
      <h2>Room Details</h2>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="type">type</label>
            <input type="text" id="type" name="type" required onChange={(e)=>handleChange(e)} value={room.type}/>

            <label htmlFor="price">price</label>
            <input type="number" id="price" name="price" required onChange={(e)=>handleChange(e)} value={room.price}/>

            <label htmlFor="availabilty">avilability:</label>
            <input type="number" id="avilability" name="avilability" required onChange={(e)=>handleChange(e)} value={room.avilability}/>

            <button type="submit">
                Submit
            </button>
        </form>
    </div>
  )
}

export default Room
