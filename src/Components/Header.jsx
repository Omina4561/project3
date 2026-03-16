import './Header.css'
import { NavLink } from 'react-router-dom'
import img from '../img/Fickleflight Logo.svg'
import img2 from '../img/notification bell.svg'
import img3 from '../img/profile picture.svg'
export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="head-parent">
                        <img src={img} alt="" />
                        <div className="head-right">
                            <nav className="links">
                                <NavLink to='/' >Explore</NavLink>
                                <NavLink to='/search'>Search</NavLink>
                                <NavLink to='/hotels'>Hotels</NavLink>
                                <NavLink>Offers</NavLink>
                            </nav>
                            <div className="right-images">
                                <img src={img2} alt="" />
                                <img src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}