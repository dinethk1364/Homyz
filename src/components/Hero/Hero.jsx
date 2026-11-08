import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import './hero.css'
import CountUp from 'react-countup';

function Hero() {
    return (
        <section className='hero-wrapper'>
            <div className="paddings innerWidth hero-container flexCenter">
                <div className="hero-left flexColStart">
                    <div className="hero-title">
                        <div className="orange-circle"></div>
                        <h1>Discover <br /> Most Suitable <br /> Property</h1>
                    </div>
                    <div className="hero-des flexColStart">
                        <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className="search-bar flexCenter">
                        <HiLocationMarker className='location-mark'/>
                        <input type="text" />
                        <button className="button">Search</button>                                              
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Winning</span>
                        </div>
                    </div>

                </div>
                <div className="hero-right flexCenter">
                    <div className="image-container">
                        <img src="./assets/hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero
