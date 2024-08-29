import React from 'react'

const RegisterForm = () => {
    return (
        <form className='w-80 h-72 border-2 border-gray-400 rounded-md flex justify-center items-center flex-col bg-slate-100'>
            <div className='w-max h-11 mt-4'>
                <input type="email" placeholder='email' id='email' className='p-1.5 rounded-md  w-60 placeholder:text-emerald-600
   text-green-800 
                 border border-emerald-600
                 border-opacity-50
                   focus:outline-none focus:ring focus:ring-emerald-600
                 ' />
            </div>
            <div className='w-max h-11 mt-4'>
                <input type="password" placeholder='password' id='password' className='p-1.5 rounded-md  w-60 placeholder:text-emerald-600 text-green-800 border border-emerald-600 border-opacity-50 focus:outline-none focus:ring focus:ring-emerald-600
                 ' />
            </div>
            <div className='w-max h-11 mt-4'>
                <button className='w-60 h-9 bg-green-700 text-white rounded-md hover:bg-green-800'>Login</button>
            </div>

            <div className='mt-2'>
                <a href=""><p className='text-sm text-c'>Forget Password?</p></a>
            </div>
            <div className='mt-4 border-t-2  border-black w-48 h-0.5 opacity-50'>
            </div>
            <div>
                <button className=' mt-4 mb-4 w-36 h-9  bg-green-700 text-white rounded-md hover:bg-green-800'>Register</button>
            </div>
        </form>
    )
}

export default RegisterForm