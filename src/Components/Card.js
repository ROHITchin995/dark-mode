import React from 'react'

export const Card = ({ item, channel }) => {
  return (
    <li className='card'>
        <a href={`https://www.youtube.com/watch?v=${item.id}`} target="_blank" rel="noopener noreferrer"
        className='card-link'>
        <img src={item.image} alt={item.title} />
        <img src={item.image} alt={item.title} />
        </a>
        <h4 className='card-title'>{item.title}</h4>
        <p className='card-channel'>
            <i>{channel}</i>
        </p>
        <div>
        {item.views} &bull; {item.published}
        </div>
    </li>
  )
}
