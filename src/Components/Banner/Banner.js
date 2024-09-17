import React from 'react'
import Lottie from 'lottie-react'
import factory from "./factory.json"

const Banner = () => {
    return (
        <section className="py-8 antialiased dark:bg-gray md:py-16">
            <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
                <div className="content-center justify-self-start md:col-span-7 md:text-start">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:max-w-2xl md:text-5xl xl:text-6xl">Limited Time Offer!<br />Up to 50% OFF!</h1>
                    <p className="mb-4 max-w-2xl text-gray-500 dark:text-gray-400 md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl">Don't Wait - Limited Stock at Unbeatable Prices!</p>
                    <a href="#" className="inline-block rounded-lg bg-primary-700 px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Shop Now</a>
                </div>
                <div className="hidden md:col-span-5 md:mt-0 md:flex">
                    <Lottie animationData={factory} />
                   
                </div>
            </div>

        </section>




    )
}

export default Banner