import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { db } from '../../Api/Firebase'
import { doc, getDoc } from 'firebase/firestore'
import { auth } from '../../Api/Firebase'

function Navbar() {
    const [userDetails, setUserDetails] = useState('')

   const fetchUserDetails = () => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            const docRef = doc(db, "Users", user.uid);
            getDoc(docRef)
                .then((docSnap) => {
                    if (docSnap.exists) {
                        setUserDetails(docSnap.data());
                        console.log("User details:", docSnap.data());
                    } else {
                        console.log("User document does not exist.");
                    }
                })
                .catch((error) => {
                    console.log("Error fetching user details:", error.message);
                });
        } else {
            console.log("User is not logged in.");
        }
    });
};


    useEffect(() => {
        fetchUserDetails()
    }, [])
    const handleLogout = async () => {
        try {
            await auth.signOut()
            console.log("user Logged out Successfullly")
             window.location.href="/login"
        } catch (error) {
            console.log(error.message, "error in logging out")
        }
    }

    return (
        <div className=' style="background: #edf2f7;'>
            <nav className="bg-white shadow">
                <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
                    <div className="flex justify-between items-center">
                        <div>
                            <a className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#">Flash Cart</a>

                        </div>
                        <div>
                            <a className="text-gray- text-xl font-medium md:text-2xl ml-20" href="#"> {userDetails.username}</a>
                        </div>
                        <div className="flex md:hidden">
                            <button type="button"
                                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="md:flex items-center">
                        <div className="flex flex-col md:flex-row md:mx-6">
                        <Link to={"/"}>  <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Home</a></Link>  
                            <a className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Shop</a>
                            {
                                userDetails ? (
                                    <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        href="#" onClick={handleLogout}>Logout</button>
                                ) : <Link to={"/login"}>
                                    <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                        href="#">Login</a></Link>
                            }


                        </div>
                        <div className="flex justify-center md:block">
                            <a className="relative text-gray-700 hover:text-gray-600">
                                <Link to={"/cart"}>
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>

                                <span className="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
                            </a>
                        </div>

                    </div>
                </div>
            </nav>
        </div>



    )
}

export default Navbar