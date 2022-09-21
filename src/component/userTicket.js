import React from 'react';
import Barcode from './barcode.png';
import{ useLocation} from 'react-router-dom';

const UserTicket = (props) => {
    const location= useLocation();
    const state = location.state;
    return (
        <div className='mt-[72px] h-[540px]  text-center flex items-center justify-center'>
            <div className='flex border-2 border-gray-400 h-auto w-auto p-3 border-dashed bg-white'>
                <div className='border-dotted mx-4 border-gray-400 border-r-2'>
                    <div className='flex text-sm '>
                        <div className=' text-left font-semibold'>
                            <div>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; </div>
                            <div>Seat No.   &nbsp;&nbsp;: &nbsp; </div>
                        </div>
                        <div className=' text-left px-2'>
                            <div>{state.name}</div>
                            <div>{state.seat_no}</div>
                        </div>
                    </div><br/>
                    <div className=' pr-9 text-center'>10100010111101</div>
                    <img className=' h-10 w-[137px]' src={Barcode}></img>
                </div>
                <div className='text-center'>
                    <div className='px-1 font-bold text-xl bg-green-400'>Cinema Ticket</div>
                    <div className='flex text-sm my-2'>
                        <div className=' text-left font-semibold'>
                            <div>Movie Name &nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp; </div>
                            <div>Price &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;: </div>
                            <div>Time &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;:</div>
                            <div>City &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</div>
                        </div>
                        <div className=' text-left'>
                            <div>{state.movie_name}</div>
                            <div>{state.ticketPrice}</div>
                            <div>{state.movie_time} </div>
                            <div>{state.Theatre}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTicket