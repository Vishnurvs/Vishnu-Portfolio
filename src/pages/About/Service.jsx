import React from 'react'

const Service = ({title, icon, description}) => {
  return (
    <>
        <li className='service-item'>
            <div className='service-icon-box'>
                <img src={icon} alt="" width="50"/>
            </div>
            <diV className="service-content-box">
                <h4 className="h4 servive-item-title">{title}</h4>
                <p className="service-item-text">{description}</p>
            </diV>
        </li>
    </>
  )
}

export default Service