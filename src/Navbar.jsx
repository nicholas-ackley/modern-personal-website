import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () =>
    {

        const [click, setClick ] = useState('')

        const handleClick = (link) =>{
            setClick(link)
        }

        return(
            <>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <li><a href='#home' className='nav-link'>Home</a></li>
                    <li><a href='#about'className='nav-link'>About Me</a></li>
                    <li><a href='#services'className='nav-link'>Repretiore</a></li>
                    <li><a href='#contact'className='nav-link'>Socials</a></li>
  
                </ul>
            </nav>
            </>
        )
    }
    export default Navbar