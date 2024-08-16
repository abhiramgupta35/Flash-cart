import { createContext, useContext, useState, useEffect } from "react"

const ShopContext = createContext()

export const AllProducts = () => {
    return useContext(ShopContext)
}

export const ShopContextProvider = (props) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data.products)
                console.log(data)
            })
    }, [])
    return (
        <ShopContext.Provider value={{product,setProduct}}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider