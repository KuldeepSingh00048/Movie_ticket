import React, { useState } from 'react'
import Button from './button';
import { NavLink } from 'react-router-dom';
import { MdReorder,MdClose } from "react-icons/md";

const CommonNavbar = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT US", link: "/about" },
        { link: "/booking" },
    ];
    let [open, setOpen] = useState(false);
    
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-gradient-to-r from-yellow-300 to-yellow-200 py-4 md:px-10 px-7'>
                <div className='font-extrabold text-3xl rounded-bl-xl p-2 w-auto rounded-tr-xl border-green-900 border-2 text-green-900 cursor-pointer flex items-center font-[Poppins]'>
                    KD-Book-Movies
                </div>

                <div onClick={() => setOpen(!open)} className=' text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ? <MdClose/> : <MdReorder/>}
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute bg-yellow-200 md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 '>
                                <NavLink to={link.link} className='text-gray-800 font-bold hover:text-gray-400 duration-500'>{link.name}</NavLink>
                            </li>
                        ))
                    }
                    <NavLink to={'/booking'} >
                        <Button>
                        Book Ticket For Movie
                    </Button>
                        </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default CommonNavbar