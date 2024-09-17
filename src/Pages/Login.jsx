import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../Api/Firebase"
import { toast } from 'react-toastify'
import { Navigate } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState('')
    const [userpassword, setUserpassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, userpassword)
            console.log("user Logged in successful")
            toast.success("Logged in successful", { position: 'top-center' })
            window.location.href = "/";
        } catch (error) {
            console.log(error.message)
            toast.error(error.message, { position: 'bottom-center' })
        }
    }

    return (

        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/15329/15329400.png"
                            className="w-32 mx-auto" />
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Welcome back
                        </h1>
                        <div className="w-full flex-1 mt-8">


                            <div className="mx-auto max-w-xs">
                                <form onSubmit={handleLogin}>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" placeholder="Email" />
                                    <input value={userpassword} onChange={(e) => setUserpassword(e.target.value)}
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password" placeholder="Password" />
                                    <button type='submit'
                                        className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">
                                            Login
                                        </span>

                                    </button>
                                </form>
                                <Link to={"/signup"}><p className='mt-10 text-xm text-blue text-center'>Don't Have an account?<span className='text-blue-500'> SignUp</span> </p></Link>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to terms
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </a>
                                    and its
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Login