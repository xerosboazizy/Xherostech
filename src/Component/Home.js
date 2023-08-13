import React from "react"
import xerotech from '../assets/images/xerotech.jpg'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { FaReact, FaNode } from 'react-icons/fa'

import { Typewriter } from "react-simple-typewriter"

const Home = () => {
    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className="madi">
                        <div className='left top'>
                            <h3>WELCOME TO XHEROS TECHNOLOGIES</h3>
                            <h1>
                                Hi, I’m <span>Boaz Samuel</span>
                            </h1>
                            <h2>

                                <span>
                                    <Typewriter words={["Leader/Innovator in web technologies.", "A Fullstack MERN Developer.", "An Experienced Crypto Trader"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                                </span>
                            </h2>

                            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

                            <div className='hero_btn'>
                                <h4>BEST SKILL ON</h4>
                                <button className='btn_shadow'>
                                    <SiMongodb className="i" />
                                </button>
                                <button className='btn_shadow'>
                                    <SiExpress className="i" />
                                </button>
                                <button className='btn_shadow'>
                                    <FaReact className="i" />
                                </button>
                                <button className='btn_shadow'>
                                    <FaNode className="i" />
                                </button>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='right_img'>
                                <img src={xerotech} alt='' />
                            </div>
                        </div>
                    </div>


                </div>


            </section>
        </>
    )
}



export default Home