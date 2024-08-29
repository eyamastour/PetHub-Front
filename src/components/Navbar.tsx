import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faUser, faGear, faHouse, faBell } from '@fortawesome/free-solid-svg-icons'
import logo from '../../public/assets/logo.png';
const Navbar = () => {
    return (
        <header className='h-14 bg-emerald-700 flex items-center justify-between w-screen  '>
            <div>
                <a href="" className='cursor-pointer'>
                    <img src={logo} alt="logo" className='w-12 ml-5' />
                </a>
            </div>
            <div>
                <input type="text" placeholder='search' className='w-80 rounded-md p-1  appearance-none text-green-800 
                   focus:outline-none focus:ring focus:ring-green-900
                ' />
            </div>
            <nav className='w-1/3 ml-5'>
                <ul className='flex justify-around'>
                    <li className='cursor-pointer'>
                        <div className='w-8 h-8 rounded-2xl bg-slate-50 opacity-50 flex items-center justify-center'>
                            <FontAwesomeIcon icon={faHouse} color="green" className='hover:text-green-900 inline-block ' />
                        </div>

                    </li>
                    <li className='cursor-pointer'>
                        <div className='w-8 h-8 rounded-2xl bg-slate-50 opacity-50 flex items-center justify-center'>

                            <FontAwesomeIcon icon={faUser} color="green" className='hover:text-green-900' />
                        </div>
                    </li>
                    <li className='cursor-pointer'>
                        <div className='w-8 h-8 rounded-2xl bg-slate-50 opacity-50 flex items-center justify-center'>

                            <FontAwesomeIcon icon={faMessage} color="green" className='hover:text-green-900' />
                        </div>
                    </li>
                    <li className='cursor-pointer'>
                        <div className='w-8 h-8 rounded-2xl bg-slate-50 opacity-50 flex items-center justify-center'>
                            <FontAwesomeIcon icon={faBell} color="green" className='hover:text-green-900' />
                        </div>
                    </li>
                    <li className='cursor-pointer'>
                        <div className='w-8 h-8 rounded-2xl bg-slate-50 opacity-50 flex items-center justify-center mr-4'>
                            <FontAwesomeIcon icon={faGear} color="green" className='hover:text-green-900' />
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar