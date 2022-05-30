import { useState } from 'react'
import {FaHamburger, FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

import {Link} from 'react-scroll'

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState(false)
    const handleNav = () => setNav(!nav)

    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true)
        }else {
            setColor(false)
        }
    }

    

    window.addEventListener('scroll', changeColor)

  return (
    <div name='home' className={color ? 'navbar navbar-bg' : 'navbar'}>
        <div className="container">

            <div>
                <FaHamburger size={40} style={{marginLeft: '4px'}}/>
            </div>

            <ul className={nav ? "nav-menu active" : "nav-menu"}>
                <li><Link to='home' smooth={true} spy={true} duration={500}>Home</Link></li>
                <li><Link to='hero' smooth={true} spy={true} duration={500}>Order</Link></li>
                <li><Link to='menu' smooth={true} spy={true} duration={500}>Menu</Link></li>
                <li><Link to='delivery' smooth={true} spy={true} duration={500}>Delivery</Link></li>
                <li><Link to='contact' smooth={true} spy={true} duration={500}>Contact</Link></li>
            </ul>

            <div className="hamburger" onClick={handleNav}>

                {nav ? (<FaTimes size={20} style={{color: '#f8f8f8'}} />) : (<FaBars size={20} />)}
                
            </div>
            
        </div>
    </div>
  )
}
