import React from 'react'
import Sidebar from '../components/Sidebar'

const Otp = () => {
    return (
        <div className='flex min-h-screen bg-gray-50 h-dvh'>
            <Sidebar />
            <div className="flex min-h-full flex-1 flex-col justify-start">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-indigo-700">
                        OTP Verification
                    </h2>
                </div>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-indigo-600">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                               type='number'
                               required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-indigo-600 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                </form>

            </div>

        </div>
    )
}

    export default Otp
