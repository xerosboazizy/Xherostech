import React from 'react'
import xerotech from '../../assets/images/xerotech.jpg'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { FaReact, FaNode } from 'react-icons/fa'

const About = () => {
    return (
        <>
            <section className='Contact' id='about'>
                <div className='container top'>



                    <div className="madi">
                        <div className='aboutleft top'>
                            <div className='heading paraheading'>
                                <h1 >More About Me</h1>
                            </div>
                            <div className='about_para'>
                                <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                                <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction</p>
                            </div>

                            <div className='hero_btn para_btn'>
                                <h4>My Little Achievement</h4>
                                <button className='btn_shadow '>
                                    <span>+3</span>
                                    <p>Years</p>
                                    <p>Experience</p>
                                </button>
                                <button className='btn_shadow'>
                                    <span>+28</span>
                                    <p>Happr</p>
                                    <p>Customer</p>
                                </button>
                                <button className='btn_shadow'>
                                    <span>+30</span>
                                    <p>MERN</p>
                                    <p>Project</p>
                                </button>
                            </div>
                            <button className='btn_shadow resume_btn'>
                                Download CV
                            </button>
                        </div>
                        <div className='aboutright'>
                            <div className='aboutright_img'>
                                <img src={xerotech} alt='' />
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default About