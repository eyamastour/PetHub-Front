import React from 'react'
import Input from './Input'

const LoginForm = () => {
    return (
        <form className='w-80 h-86 border-2 border-gray-400 rounded-md flex justify-center items-center flex-col bg-slate-100'>
            <div className='w-max h-11 mt-4'>
                <Input type="text" placeholder='firstname' />
            </div>

            <div className='w-max h-11 mt-4'>
                <Input type="text" placeholder='lastname' />
            </div>

            <div className='w-max h-11 mt-4'>
                <Input type="email" placeholder="email" />
            </div>

            <div className='w-max h-11 mt-4'>
                <Input type="password" placeholder='password' />
            </div>

            <div className='w-max h-11 mt-4'>
                <Input type="password" placeholder='confirm password' />
            </div>

            <div>
                <button className=' mt-4 mb-4 w-36 h-9  bg-green-700 text-white rounded-md hover:bg-green-800'>Register</button>
            </div>
        </form>
    )
}

export default LoginForm