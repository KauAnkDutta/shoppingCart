import './cart.css';
import { useContext } from 'react';
import {AuthContext} from '../../context/AuthContext'
import Navbar from '../navbar/Navbar';

export default function Cart(){
    const {cart, dispatch} = useContext(AuthContext)
    
    const removeHandler = (id) => {
        dispatch({
            type: "REMOVE",
            payload: id
        })
    }
    return(
        <div className="main_cart_container">
            <Navbar/>

            <div className="cart_box">
                <div className="cart_head">
                    <h4>Cart</h4>
                </div>

                <div className="cart_item_container">
                    {cart.map((item) => (
                        <div className="item_itself" key={item.id}>
                            <div className="product_left">
                                <img src={item.image} alt="" className='product_image'/>
                            </div>

                            <div className="product_right">
                                <p className='product_right_title'>{item.title}</p>
                                <span className='product_right_price'>Rs: {item.price}</span>
                                <div className="item_remove">
                                    <button className='remove_btn' onClick={() => removeHandler(item?.id)}>Remove</button>
                                </div>
                            </div>

                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}