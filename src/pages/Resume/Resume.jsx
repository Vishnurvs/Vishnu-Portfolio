import React from 'react'
import BookReader from '../../../public/images/output-onlinegiftools.gif'
import Skills from '../../../public/images/skills1.gif'
import { FaBookReader } from 'react-icons/fa'
import Timelineitem from './Timelineitem'

const Resume = () => {
    return (
        <section>
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>
            <div className='cv'>
                <a href='https://drive.google.com/file/d/16nJN6KQbT5dhon1CLhviZWj57BXZOYIp/view?usp=drive_link'>
                    <button className='download'>
                        {/* <img src="../../../public/images/download1.png" alt="" class='down' width="100"/> */}
                        Download CV
                    </button>
                </a>
            </div>
            <div className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        {/* <FaBookReader/> */}
                        <img src={BookReader} alt="" width="40" />
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
                <ol className="timeline-list">
                    <Timelineitem title="Sethu Institute of Technology"
                        date="2020 - 2023"
                        description="B.E.Computer Science & Engineering"
                        cgpa="CGPA: 8.7" />
                    <Timelineitem title="Tamil Nadu Polytechnic College"
                        date="2017 - 2020"
                        description="Diploma in Computer Engineering"
                        cgpa="Diploma Grade: 88%" />
                    <Timelineitem title="Sairam Vidyalaya - Matric higher secondary school"
                        date="2007 - 2017"
                        description="SSLC"
                        cgpa="10th Grade: 77%" />
                </ol>
            </div>
            <div className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <img src={Skills} alt="" width="40" />
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
            </div>
            <div className='skill'>
                <h3 className='skill-title'>Front-End</h3>
                <div className='skill-list'>
                    <div className='skill-item'>
                        <img className='skill-image' src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" />HTML
                    </div>
                    <div className='skill-item'>
                        <img className='skill-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1200px-CSS3_logo.svg.png" />CSS
                    </div>
                    <div className='skill-item'>
                        <img className='skill-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" />Javascript
                    </div>
                    <div className='skill-item'>
                        <img className='skill-image' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" /
                        >React Js
                    </div>
                    <div className='skill-item'>
                        <img className='skill-image' src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" />Redux
                    </div>
                    <div className='skill-item'>
                        <img className='skill-image' src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" />Bootstrap
                    </div>
                    <div className='skill-item'>
                        <img className='skill-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png" />Sass
                    </div>
                    <div className='skill-item'>
                        <img className='skill-image' src="https://ashishprabhuk.me/assets/images/material.png" />Material UI
                    </div>
                </div>
            </div><br />
            <div className='skill'>
                <h3 className='skill-title'>Back-End</h3>
                <div className='skill-list'>
                    <div className='skill-item'>
                        <img className='skill-image' src="https://cdn-icons-png.flaticon.com/512/3161/3161158.png" />SQL
                    </div>
                    <div className='skill-item'>
                        <img className='skill-image' src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-15.png" />MySQL
                    </div>
                    <div className='skill-item'>
                        <img className='skill-image' src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" />MongoDB
                    </div>
                </div>
            </div><br />
            <div className='skill'>
                <h3 className='skill-title'>Others</h3>
                <div className='skill-list'>
                    <div className='skill-item'>
                        <img className='skill-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" />Git
                    </div>
                    <div className='skill-item'>
                        <img className='skill-image' src="https://ashishprabhuk.me/assets/images/github.png" />Github
                    </div>
                    <div className='skill-item'>
                        <img className='skill-image' src="https://www.svgrepo.com/show/327408/logo-vercel.svg" />Versel
                    </div>
                    <div className='skill-item'>
                        <img className='skill-image' src="https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png" />Netlify
                    </div>
                    <div className='skill-item'>
                        <img className='skill-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" />VS Code
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume