import React from "react"
import { BsArrowRight } from 'react-icons/bs'

const Card = (props) => {
    return (
        <>
            <div className='box btn_shadow'>
                <img src={props.image} alt='' />
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <a href='/'>
                    <BsArrowRight className="arrow" />
                </a>
            </div>
        </>
    )
}

export default Card