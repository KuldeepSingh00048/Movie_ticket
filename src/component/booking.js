import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import City from './city'
import movies from './movie_list'
// import Ticketbook from './ticketbook'
// import { NavLink } from 'react-router-dom'
const Booking = () => {
    const [poster, setPoster] = useState(movies)
    // const [ticket, setTicket] = useState()
    // const [visible, setVisible] = useState(false)
    const filterType = (type) => {
        const data = movies.filter((curdata) => {
          return curdata.city === type;
        });
        setPoster(data)
    }
    return (
        <>
            <div className='mt-[72px] h-auto pt-4 text-center'>
                <select name='Property Type' className=' font-bold font-[poppins] p-2 my-2 rounded-lg bg-gradient-to-r from-green-200 to-green-400  text-3xl  '
                    onChange={(e) => {
                        const type = e.target.value
                        filterType(type)
                    }}
                >
                    <option disabled selected className='text-sm w-auto text-black font-bold '>City Name</option>
                    {
                        City.map((city) => {
                            // const{cityname}= useParams();
                            const { cityname } = city
                            return (
                                <option value={cityname} className='text-sm text-left text-black font-bold  '>{cityname}</option>
                            )
                        })
                    }
                </select>
                <div className=' flex flex-wrap p-4 my-2'>
                    {poster.map((movie)=>{
                        const{image,price,mname,time,city} = movie
                        return(
                            < div className='shadow-2xl shadow-black flex-col h-auto w-auto rounded-xl  justify-center mx-16 my-4 bg-gradient-to-r from-green-400 to-green-200'>
                                <img className='h-80 hover:h-96 rounded-xl   w-72 hover:w-80' src={image}/>
                                <div className='m-1 text-left rounded-xl font-bold font-[poppins]'>
                                Movie Name:- {mname} <br />
                                Ticket Price:- {price} <br />
                                Time:- {time} <br />
                                AT:- {city}
                                </div>
                                <Link to="/ticketbook" state={movie}>
                                <button className='m-1 border-2 font-bold hover:text-lg bg-green-500 border-black p-1 font-[poppins] rounded-lg'>Book Now</button>
                                </Link>
                                {/* <Ticketbook {...ticket} visible={visible} /> */}
                                {/* setTicket(image,price,mname,time,city) */}
                            </div>
                        )
                    }
                    )
                }
                </div>
            </div>
        </>
    )
}

export default Booking