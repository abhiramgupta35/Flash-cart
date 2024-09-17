import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify"
import { auth,db } from "../Api/Firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { setDoc, doc,collection } from "firebase/firestore"


const SignUp = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [userpassword, setUserpassword] = useState('')

    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, userpassword);
            const user = auth.currentUser;
            console.log(user)
            if(user){
                await setDoc(doc(db,'Users',user.uid),{
                    email:user.email,
                    username:username,
                })
            }
             window.location.href="/"
            toast.success("Successfully Created an account.", { position: 'top-center' })
        } catch (error) {
            console.log(error.message)
            toast.error(error.message, { position: 'top-center' })
        }
    }
    return (

        <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="bg-white shadow-md rounded-md p-6">
                    <img className="mx-auto h-12 w-auto" src="https://cdn-icons-png.flaticon.com/128/9068/9068651.png" alt="" />
                    <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign up for an account
                    </h2>
                    <form className="space-y-6" method='pos' onSubmit={handleSignUp}>
                        <div>
                            <label for="new-password" className="block text-sm font-medium text-gray-700">Username</label>
                            <div className="mt-1">
                                <input name="username" type="username" required onChange={(e) => setUsername(e.target.value)}
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label for="password" className="block text-sm font-medium text-gray-700">Email</label>
                            <div className="mt-1">
                                <input name="email" type="email-address" autocomplete="email-address" required onChange={(e) => setEmail(e.target.value)}
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="mt-1">
                                <input name="password" type="password" autocomplete="password" required onChange={(e) => setUserpassword(e.target.value)}
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                        </div>
                        <button type='submit'
                            className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span className="ml-3" >
                                SignUp
                            </span>
                        </button>
                        <Link to={"/login"}><p className='mt-10 text-xm text-blue text-center'>Already have an account?<span className='text-blue-500'>Login here.</span></p></Link>
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
                    </form>
                </div>
            </div>
        </div>

    )
}

export default SignUp


