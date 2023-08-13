import React, { useState } from 'react'
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"

const Portfolio = () => {
    const [projectDom, setProjectDom] = useState(Portfolio_data);
    const [filterBtn, setFilterBtn] = useState("All")


    //get button
    const getCatbutton = ["All", ...new Set(Portfolio_data.map((item) => item.category))]

    // project selection filter
    const filterProject = (category) => {
        if (category === "All") {
            setProjectDom(Portfolio_data);
        } else {
            const newProject = Portfolio_data.filter((item) => item.category === category)
            setProjectDom(newProject);
        }
        setFilterBtn(category);
    };

    return (
        <>
            <section className='Portfolio top' id='portfolio'>
                <div className='container'>
                    <div className='heading text-center '>
                        <h4>Portfolio</h4>
                        <h1>Selected Work</h1>
                    </div>
                    <div className='project_button'>
                        {getCatbutton.map((category) => (
                            <button onClick={() => filterProject(category)} className={filterBtn === category ? "active" : "cat"}>{category}</button>
                        ))}
                    </div>
                    <div className='content grid'>
                        {projectDom.map((Portfolio_data, index) => {
                            return <Card key={index} image={Portfolio_data.image} category={Portfolio_data.category} title={Portfolio_data.title} para={Portfolio_data.para} />
                        })}

                        {/*<div className='box btn_shadow '>
                <div className='img'>
                    <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg' alt='' />
                </div>
                <div className='category d_flex'>
                    <span>Development</span>
                    <label>
                      <i className='far fa-heart'></i> 360
                    </label>
                </div>
                <div className='title'>
                    <h2>Mobile app landing design & Services</h2>
                  <a href='' className='arrow'>
                    <i class='fas fa-arrow-right'></i>
                  </a>
                </div>
              </div>*/}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio