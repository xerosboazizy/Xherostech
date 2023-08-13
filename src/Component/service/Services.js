import React from 'react'
import data from "./ServiceApi"
import Card from "./Card"

const Services = () => {
    return (

        <>
            <section className='features top' id='services'>
                <div className='container'>
                    <div className='heading text-center '>
                        <h4>Services</h4>
                        <h1>What I Offer</h1>
                    </div>

                    <div className='content grid'>
                        {data.map((val, index) => {
                            return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
                        })}

                        {/*<div className='box btn_shadow'>
            <img src='https://img.icons8.com/glyph-neue/64/000000/polyline.png' alt='' />
            <h2>Personal Portfolio April</h2>
            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
            <a href=''>
              <i class='fas fa-arrow-right'></i>
            </a>
          </div>*/}
                    </div>
                </div>
            </section>
        </>

    )
}

export default Services