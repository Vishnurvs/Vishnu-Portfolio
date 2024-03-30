import React from 'react'

const Timelineitem = ({title, date, description, cgpa}) => {
  return (
    <li className='timeline-item'>
        <h4 className='h4 time-line-title'>{title}</h4>
        <span>{date}</span>
        <p className='timeline-text'>{description}</p>
        <p className='timeline-text'>{cgpa}</p>
    </li>
  )
}

export default Timelineitem