import React from 'react'
import './header.css'

function Header() {
    return (
        <section className='h-wrapper'>
            <div className="h-container flexCenter paddings innerWidth">
                <img src="./assets/logo.png" alt="logo" width={100} />

                <div className="h-menu flexCenter">
                    <a href="">Residencied</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">GetStartted</a>
                    <button className='button'>Contact</button>
                </div>
            </div>
        </section>
    )
}

export default Header
