import React, { useState, useEffect } from 'react'
import Service from './Service';
import Testimonial from './Testimonial'

const servicesData = [
    {
        icon: "/images/webdesign.gif",
        title: "Web development",
        description: "The most modern and high-quality design made at a professional level."
    },
    {
        icon: "/images/webdev.gif",
        title: "UI/UX",
        description: "High-quality development of sites at the professional level."
    },
    {
        icon: "/images/icons8-video.gif",
        title: "Video Editing",
        description: "Professional development of applications for iOS and Android."
    },
    {
        icon: "/images/icons8-youtube-studio.gif",
        title: "Youtuber",
        description: "I make high-quality photos of any category at a professional level."
    }
];


const About = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('testimonials.json').then(res => res.json()).then(data => {
            // console.log(data)
            setTestimonials(data)
        });
    }, [])

    return (
        <div className='about active'>
            <header>
                <h2 className='h2 article-title'>About me</h2>
            </header>
            <section className='about-text'>
                <p>
                    Hello there! 👋 I'm Vishnu Siddhan, a passionate Front-End Developer on a mission to bring good ideas to life through elegant code and captivating design. As a fresher, I good in ReactJS, backed by a strong frontend foundation in HTML, CSS, and JavaScript frameworks.
                </p>
                <p>
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive.
                    Moreover, I
                    add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
                    across your
                    message and identity in the most creative way. I created web design for many famous brand companies.
                </p>
            </section>

            {/* services */}

            <section className='service'>
                <h2 className='h3 service-title'>What I'm Doing</h2>
                <ul className='service-list'>{
                    servicesData.map((service, index) => (
                        <Service key={index} title={service.title} icon={service.icon}
                            description={service.description} />
                    ))
                }
                </ul>
            </section>
            {/* Who I am */}
            {/* <section className='testimonials'>
                <h3 className='h3 testimonials-title'>Who I Am</h3>
                <ul className='testimonials-list has-scrollbar'>
                    {
                        testimonials.map((testimonial, index) => (
                            <Testimonial key={index} name={testimonial.name} avatar={testimonial.avatar} 
                            testimonial={testimonial.testimonial}/>
                        ))
                    }
                </ul>
            </section> */}
        </div>
    )
}

export default About