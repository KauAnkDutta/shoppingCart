import Navbar from "../navbar/Navbar"
import {useState, useContext, useEffect} from 'react';
import {AuthContext} from '../../context/AuthContext';
import './home.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

export default function Home(){
    const {product, dispatch} = useContext(AuthContext)
    const [categories, setCategories] = useState()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(res => {
            setCategories(res.data)
        }).catch(err => {
            console.log(err)
        })
    },[])

    const clickHandler = (categorie) => {
        axios.get(`https://fakestoreapi.com/products/category/${categorie}`)
            .then(res => {
                dispatch({
                    type:"ADD_PRODUCT",
                    payload: res.data,
                })
            }).catch(err => console.log(err))
    }

    return(
        <div className="home">
            <Navbar/>

            <div className="categories">
                {
                    categories?.map((categorie, key) => (
                        <button className="cate_btn" key={key} onClick={() => clickHandler(categorie)}>{categorie}</button>
                    ))
                }
            </div>

            <div className="product_section">
                {
                    product?.map((item) => (
                        <div className="product_container" key={item?.id}>
                            <div className="product_top">
                                <img src={item?.image} alt="image" className="product_img" />
                            </div>

                            <div className="product_center">
                                <span className="product-title">
                                    {item?.title}
                                </span>
                            </div>

                            <div className="product_bottom">
                                <span className="product_price">
                                    Rs {item?.price}
                                </span>
                            </div>

                            <div className="buy_button">
                                <NavLink to={`/product/${item.id}`} state={item} className="buy">Buy</NavLink>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}