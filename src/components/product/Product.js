import {useParams} from 'react-router-dom';
import {useState, useContext, useEffect} from 'react';
import {AuthContext} from '../../context/AuthContext';
import './product.css';
import Navbar from '../navbar/Navbar';

export default function Product(){
    const {product, dispatch} = useContext(AuthContext)
    const [item, setItem] = useState()
    const productId = useParams().id;
    

    const the_item = product.find((i) => i.id == productId )

    useEffect(() => {
        setItem(the_item)
    }, [])

    const addToCart = () => {
        dispatch({
            type: "ADD_CART",
            payload: item
        })
    }

    return(
        <div>
            <Navbar/>

            <div className='product'>
                <div className="product_main_container">
                                <div className="top">
                                    <img src={item?.image} alt="image" className="productimg" />
                                </div>

                                <div className="left">
                                    <div className="center">
                                        <span className="title">
                                            {item?.title}
                                        </span>
                                    </div>

                                    <div className="bottom">
                                        <span className="price">
                                            Rs {item?.price}
                                        </span>
                                    </div>

                                    <div className="cart_button">
                                        <button className="addCart" onClick={addToCart}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
            </div>
        </div>
    )
}