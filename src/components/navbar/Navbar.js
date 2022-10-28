import './navbar.css';
import {useState, useEffect, useContext} from 'react'
import {BiCartAlt} from 'react-icons/bi'
import {GoPerson} from 'react-icons/go'
import axios from 'axios'
import {AuthContext} from '../../context/AuthContext'
import {NavLink} from 'react-router-dom'


export default function Navbar({count}){
    const {cart} = useContext(AuthContext)
    const [products, setProducts] = useState()
    const [sideMenuActive, setSideMenuActive] = useState(false)
    const [result, setResult] = useState()
    const [query, setQuery] = useState("")

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
            setProducts(res.data)
        }).catch(err => {
            console.log(err)
        })
    },[])

    useEffect(() => {
       let newArr =  products?.filter((product) => product.title.toLowerCase().includes(query.toLocaleLowerCase()))
       setResult(newArr)
    }, [query])

    return(
        <div className="navbar_main_container">
            <div className="logo_container">
                <NavLink to={`/`} className="logo">REACT</NavLink>
            </div>

            <div className="input_container">
                <input type="text" className='input_box'  placeholder="Search..." onChange={(e) => setQuery(e.target.value)}/>

                {result?.length && query &&(
                    <div className="dropdown_container">
                        {
                            result?.map((option) => (
                                <div className="dropdown_items" key={option.id}>{option.title}</div>
                            ))
                        }
                    </div>
                )}
            </div>

            <NavLink to={'/cart'} className="cart_container">
                <i className="cart_icon"><BiCartAlt className='cart'/> <strong className='unit'>{cart.length? cart.length: 0}</strong></i>
            </NavLink>
            
            <div className="avatar_box">
                <i className="avatar_icon"><GoPerson className='avatar' onClick={() => setSideMenuActive(!sideMenuActive)}/></i>

                {
                    sideMenuActive && (
                        <div className="dropdown_container_avatar">
                            <NavLink to={`/profile`} className="dropdown_item">My Profile</NavLink>
                            <div className="dropdown_item">Settings</div>
                            <div className="dropdown_item">Sign out</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}