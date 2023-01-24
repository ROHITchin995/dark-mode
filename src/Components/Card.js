import React from 'react'

export const Card = ({ item, channel }) => {
  return (
    <li>
        <a href={`https://www.youtube.com/watch?v=${item.id}`} target="_blank" rel="noopener noreferrer">
        <img src={item.image} alt={item.title} />
        <img src={item.image} alt={item.title} />
        </a>
        <h4>{item.title}</h4>
        <p>
            <i>{channel}</i>
        </p>
        <div>
        {item.views} &bull; {item.published}
        </div>
    </li>
  )
}
