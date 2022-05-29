import React from 'react'
import './card.css';
function SpaceCard(props) {
    const { data } = props;
  return (
    <div className='card'>
        <h1>{data.name}</h1>
        <h2>{data.status}</h2>
        <h2>{data.species}</h2>
        {data.alias.map(alias => <h3>{alias}</h3>)}
    </div>
  )
}

export default SpaceCard