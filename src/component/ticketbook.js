import React, { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Ticketbook = (props) => {
    const navigate = useNavigate();
    // if (!visible) return null;
    const location = useLocation();
    const state = location.state;
    let seat = 0;
    function randomNumberInRange(min, max) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    const [ticket_data, setTicketdata] = useState({
        movie_name: state.mname,
        ticketPrice: state.price,
        movie_time: state.time,
        Theatre: state.city,
        seat_no: randomNumberInRange(1,250),
        name: "",
        email: "",
        phone_number: ""
    })
    const handleChange = e => {
        const{name,value} = e.target
        setTicketdata({
          ...ticket_data,
          [name]:value
        })
    }
    const book = () => {
        const { name, email, phone_number} = ticket_data
        if (name && email && phone_number) {
            axios.post("https://kd-movie-book.herokuapp.com/book", ticket_data)
            .then(res => alert(res.data.message))
            // alert("posted")
            navigate('/userticket', {state:ticket_data})
        }
        else {
            alert("Please fll your data")
        }
    }
    return (
        <div className='mt-[72px] h-screen  text-center flex items-center justify-center '>

            <div className=' flex-col h-auto flex-wrap w-96 p-2 bg-gradient-to-r from-green-400 to-green-200  rounded-2xl'>
                <h1 className='my-1 text-4xl font-bold'> Book Your Ticket</h1>
                <img className='h-20 w-20 mx-auto rounded-lg' src={state.image}></img>

                <div className='flex'>
                    <div className=' text-left font-semibold'>
                        <div>Movie Name &nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp; </div>
                        <div>Price &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;: </div>
                        <div>Time &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;:</div>
                        <div>City &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</div>
                    </div>
                    <div className=' text-left'>
                        <div>{state.mname}</div>
                        <div>{state.price}</div>
                        <div>{state.time} </div>
                        <div>{state.city} </div>
                    </div>
                </div>

                <input type="text" className='my-3 border-2 rounded-lg border-black p-1  w-auto text-green-600 font-bold' placeholder="Name"
                    name='name'
                    value={ticket_data.name}
                    onChange={handleChange}
                />
                <br />
                <input type="email" className='my-3 border-2 rounded-lg border-black p-1  w-auto text-green-600 font-bold' placeholder="Email"
                    name='email'
                    value={ticket_data.email}
                    onChange={handleChange}
                />
                <br />
                <input type="text" className='my-3 border-2 rounded-lg border-black p-1 w-auto text-green-600 font-bold' placeholder="Phone Number"
                    name='phone_number'

                    value={ticket_data.phone_number}
                    onChange={handleChange} />
                <br />
                {/* <Link to="/userticket" state={ticket_data}> */}
                    <button onClick={book} className='bg-gradient-to-r from-green-500 to-lime-500 w-auto text-xl px-2 rounded-lg font-bold hover:text-lg active:bg-yellow-300 mb-2 ' >Book</button>
                {/* </Link> */}
            </div>
        </div>

    )
}

export default Ticketbook