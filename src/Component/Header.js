import { React, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { BsSun, BsMoonStars, BsToggleOn } from 'react-icons/bs'
import xerotech from '../assets/images/xerotech.jpg'


const Header = ({ swithctheme, setTheme, theme }) => {
    // theme toggle


    // fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })

    // Toogle Menu
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <a href=""><img src={xerotech} alt="" /></a>
                    </div>

                    <div className='navlink'>
                        {/*<ul className="f_flex uppercase">*/}
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
                            <li>
                                <a href='#home'>home</a>
                            </li>
                            <li>
                                <a href='#about'>About</a>
                            </li>
                            <li>
                                <a href='#services'>services</a>
                            </li>
                            <li>
                                <a href='#portfolio'>portfolio</a>
                            </li>

                            <li>
                                <a href='#faqs'>faqs</a>
                            </li>
                            <li>
                                <a href='#reviews'>reviews</a>
                            </li>

                            <li>
                                <a href='#blog'>blog</a>
                            </li>
                            <li>
                                <a href='#contact'>contact</a>
                            </li>

                            <li>
                                <div className='theme-toggle' onClick={() => swithctheme()}>
                                    {
                                        setTheme === 'dark' ? <BsMoonStars /> : <BsSun />
                                    }

                                </div>
                            </li>
                        </ul>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {
                                Mobile ?
                                    <AiOutlineClose className='close home-btn' /> :

                                    <FaBars className=' open' />
                            }

                        </button>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header