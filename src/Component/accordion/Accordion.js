import React, { useState } from 'react'
import data from './AccordApi'

const Accordion = () => {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    return (
        <>
            <section className='Contact' id='faqs'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>Faqs</h4>
                        <h1>Most Asked Questions</h1>
                    </div>
                    <div className="accordion_Container">
                        <div className="accord_items">
                            {
                                data.map((item, i) => (
                                    <div className='iteme'>
                                        <div className="title" onClick={() => toggle(i)}>
                                            <h2>{item.question}</h2>
                                            <span>{selected == i ? "-" : "+"}</span>
                                        </div>
                                        <div className={selected == i ? "contente show" : "contente"}>{item.answer}</div>
                                    </div>

                                ))
                            }
                        </div>
                    </div>

                </div>
            </section >
        </>
    )
}

export default Accordion