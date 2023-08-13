import React, { useState } from "react"
import { BsArrowRight, BsPlay, BsEye } from 'react-icons/bs'


const Card = (props) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }
    return (
        <>
            <div className='box btn_shadow '>
                <div className='img'>
                    <img src={props.image} alt='' onClick={toggleModal} />
                </div>
                <div className='category d_flex'>
                    <span onClick={toggleModal}>{props.category}</span>
                </div>
                <div className='title'>
                    <h2 onClick={toggleModal}>{props.title}</h2>

                    <a href='#popup' className='arrow' onClick={toggleModal}>
                        <BsArrowRight className="toModal" />
                    </a>
                </div>
            </div>

            {/* Popup box */}
            {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content d_flex'>
                        <div className='modal-img left'>
                            <img src={props.image} alt='' />
                        </div>
                        <div className='modal-text right'>
                            <span>Featured - Design</span>
                            <h1>{props.title} </h1>
                            <p>{props.para}</p>
                            <div className='button f_flex mtop'>
                                <button className='btn_shadow'>
                                    <a href="">PLAY DEMO <BsPlay className="modalBtnIcon" /></a>
                                </button>
                                <button className='btn_shadow'>
                                    <a href="">VIEW PROJECT<BsEye className="modalBtnIcon" /></a>
                                </button>
                            </div>
                            <button className='close-modal btn_shadow' onClick={toggleModal}>
                                <BsArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Card