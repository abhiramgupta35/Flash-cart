import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import { useEffect } from 'react';

function Cart() {
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()
    const carts = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(carts)

    const removeProduct = (id) => {
        const updatedCart = carts.filter(item => item.id !== id)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')

    }
    useEffect(() => {
        const total = carts.reduce((acc, item) => {
            return acc + (item.price * item.quantity)
        }, 0)
        setTotal(total)
    }, [])


    return (
        <div>
            <Navbar />
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-center">

                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Total items: {carts.length}</h2>

                    </div>
                    <div className="mt-8">
                        <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {carts?.map(cart => {
                                    return (
                                        <li className="flex py-6">
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img src={cart?.thumbnail} alt={cart?.title} className="h-full w-full object-cover object-center" />
                                            </div>
                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            <a href="#">{cart.title}</a>
                                                        </h3>
                                                        <p className="ml-4">${cart.price}</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">{cart.category}</p>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="text-gray-500">Qty 1</p>

                                                    <div className="flex">
                                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => removeProduct(cart?.id)}>Remove</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>total</p>
                        <p>${total}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes</p>
                        <p>$5</p>


                    </div>
                    <div className="mt-6">
                        <Link to={'/checkout'}>
                            <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                        </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>

                            <Link to={"/"}>
                                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Cart