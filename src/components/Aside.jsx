import React from 'react'
import Profile from '../../public/images/vishnu.png'
import { GiCalendar, GiClawSlashes, GiPhone } from "react-icons/gi";
import { IoMdMail, IoMdPhonePortrait } from "react-icons/io";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";



const Aside = () => {
    return (
        <aside className='sidebar'>
            <div className='sidebar-info'>
                <figure className='avatar-box'>
                    <img className="avt-img" src={Profile} alt='' width="90" />
                </figure>
                <div className='info-content'>
                    <h1 className='name'>R.Vishnu Siddhan</h1>
                    <p className='title'>Front-End Developer</p>
                </div>
                <button className='info_more-btn'>
                    <span>Show Contents</span>
                    <GiClawSlashes />
                </button>
            </div>

            {/* contact-info */}
            <div className='sidebar-info_more'>
                <hr className='separator2' />
                <ul className='contacts-list'>
                    <li className='contact-item'>
                        <div className='icon-box'>
                            <IoMdMail />
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'>E-Mail</p>
                            <a href='mailto:rvishnusiddhan9@gmail.com' className='contact-link'>rvishnusiddhan9@gmail.com</a>
                        </div>
                    </li>
                    <li className='contact-item'>
                        <div className='icon-box'>
                            <IoMdPhonePortrait />
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'>PhoneNo</p>
                            <a href='tel: +91 8072892146' className='contact-link'>+91 8072892146</a>
                        </div>
                    </li>
                    <li className='contact-item'>
                        <div className='icon-box'>
                            <GiCalendar />
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'>Birthday</p>
                            <time dateTime="2001-12-19" className='contact-link'>19 Dec, 2001</time>
                        </div>
                    </li>
                    <li className='contact-item'>
                        <div className='icon-box'>
                            <IoMdMail />
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'>E-Mail</p>
                            <address>Madurai, Tamil Nadu</address>
                        </div>
                    </li>
                </ul>
            </div>
            <div className=''>
                <ul className=''>
                    <li className='contact-item1'>
                        <div>
                            <a href="https://github.com/Vishnurvs" className='icon-box1'><FaGithub /></a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/vishnu-siddhan-r/" className='icon-box1'><FaLinkedin /></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/million__edits/" className='icon-box1'><FaInstagram /></a>
                        </div>
                        <div>
                            <a href="https://wa.me/918072892146" className='icon-box1'><FaWhatsapp /></a>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside