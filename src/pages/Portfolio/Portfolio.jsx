import React from 'react'
import { useState, useEffect } from 'react'
import { FaRegEye } from 'react-icons/fa';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedCategory,setSelectedCategory]=useState('All');

    useEffect(() => {
        fetch('projects.json').then(res=>res.json()).then(data=>{
            setProjects(data);
            setFilteredProjects(data);
        })
    }, [])

    const handleFilteClick = (category) =>{
        setSelectedCategory(category);
        if(category === 'All'){
            setFilteredProjects(projects);
        }else{
            const filtered = projects.filter(project => project.category === category);
            setFilteredProjects(filtered)
        }
    }
    
  return (
    <section>
          <header>
              <h2 className="h2 article-title">Portfolio</h2>
          </header>
            {/* filter button */}
            <ul className='filter-list'>
                {["All", "Web development", "UIUX Design"].map(category =>(
                    <li key={category} className='filter-item'>
                        <button onClick={()=> handleFilteClick(category)} 
                        data-filter-btn
                        className={category === selectedCategory ? 'active' : ''}>{category}</button>
                    </li>
                ))}
            </ul>
            {/* show portfolio data */}
            <section className='projects'>
                    <ul className='project-list'>
                        {
                            filteredProjects.map(project=>(
                                <li key={project.id} className='project-item active'
                                data-filter-item required data-aos="zoom-in-down"
                                data-category={project.category}>
                                    <a href={project.link}>
                                        <figure className='project-img' required data-aos="zoom-in-down">
                                            <div className='project-item-icon-box'>
                                                <FaRegEye/>
                                            </div>
                                            <img src={project.image} alt="" required data-aos="zoom-in-down"/>
                                        </figure>
                                        <h3 className='project-title' required data-aos="zoom-in-down">{project.title}</h3>
                                        <p className='project-category' required data-aos="zoom-in-down">{project.category}</p>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
            </section>
    </section>
  )
}

export default Portfolio