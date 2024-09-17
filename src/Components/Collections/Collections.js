import { Link } from "react-router-dom"
import "./Collections.css"
import { useState, useEffect } from "react"


function Collections(props) {

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data.products)
                console.log(data.products)
            })
    }, [])

    const priceHightoLow = () => {
        fetch('https://dummyjson.com/products?sortBy=title&order=asc')
            .then(res => res.json())
            .then(data=>{
                setProduct(data.products)
            })
    }
    const priceLowToHIgh=()=>{
        fetch('https://dummyjson.com/products?sortBy=title&order=desc')
        .then(res => res.json())
        .then(data=>{
            setProduct(data.products)
        })
    }

    return (
        <section>
            <div className="collection-container">
                <div className="collection-header">
                    <p className="collection-title">Browse Our Latest products</p>
                </div>

                <div class="dropdown collecton-features">
                    <button class=" bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Filter
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a onClick={()=>priceHightoLow()}>Price High to Low</a>
                        <a onClick={()=>priceLowToHIgh()}>Price Low to High</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>

                <div className="product-container">
                    {product.map((item) => {
                        return (
                            <div className="product-card">
                                <Link to={`/ProductDetails/${item.id}`}>
                                    <div className="product-tumb">
                                        <img src={`${item.thumbnail}`} alt="" />
                                    </div></Link>

                                <div className="product-details">
                                    <span className="product-catagory">Rating:{item.rating}</span>
                                    <h4><a>{item.title}</a></h4>

                                    <div className="product-bottom-details">
                                        <div className="product-price">${item.price}{item.discount}</div>
                                        <div className="product-links">
                                            <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            // <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            //     <Link to={`/ProductDetails/${item.id}`}>
                            //         <a href="#">
                            //             <img class="p-8 rounded-t-lg " src={`${item.thumbnail}`} alt="product image" />
                            //         </a>
                            //     </Link>
                            //     <div class="px-5 pb-5">
                            //         <a href="#">
                            //             <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">{item.title}</h5>
                            //         </a>
                            //         <div class="flex items-center mt-2.5 mb-5">
                            //             <div class="flex items-center space-x-1 rtl:space-x-reverse">
                            //                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            //                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            //                 </svg>
                            //                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            //                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            //                 </svg>
                            //                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            //                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            //                 </svg>
                            //                 <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            //                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            //                 </svg>
                            //                 <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            //                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            //                 </svg>
                            //             </div>
                            //             <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                            //         </div>
                            //         <div class="flex items-center justify-between">
                            //             <span class="text-3xl font-bold text-gray-900 dark:text-black">${item.price}</span>
                            //             <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                            //         </div>
                            //     </div>
                            // </div>

                        )
                    })
                    }
                </div>
            </div>
        </section>


    )

}
export default Collections;