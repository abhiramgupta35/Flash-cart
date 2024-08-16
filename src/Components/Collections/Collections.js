import { Link } from "react-router-dom"
import "./Collections.css"
import { useState, useEffect } from "react"
import { AllProducts } from "../../Context/ShopContext"

function Collections(props) {
    
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data.products)
            })
    }, [])
    return (
        <div className="Product-container">
            {product.map((item) => {
                return (
                    <div className="Product-card">
                       <Link to={`/ProductDetails/${item.id}`}>   <div className="product-tumb">
                        <img src={`${item.images[0]}`} alt="Image" />
                        </div></Link>
                       
                        <div className="product-details">
                            <span className="product-catagory">Rating:{item.rating}</span>
                            <h4><a>{item.title}</a></h4>

                            <div className="product-bottom-details">
                                <div className="product-price">${item.price}</div>
                                <div className="product-links">
                                    <a href="">Buy Now<i class="fa fa-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
export default Collections;