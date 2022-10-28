import './profile.css'
import Navbar from '../navbar/Navbar'

export default function Profile(){
    return(
        <div className="profile_container">
            <Navbar/>
            
            <div className="profile">
                <div className='text'>My Profile</div>
            </div>
        </div>
    )
}