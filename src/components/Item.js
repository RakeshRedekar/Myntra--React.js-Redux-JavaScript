import React from 'react'
import './Item.css'

function Item({info}) {
  return (
    <div className='itemCard'>
        <img src={info.otherImages[0]}/>
        <h4>{info.name}</h4>
        <p>{info.description}</p>
        <div className='rate'>
            <span>Rs.{info.finalPrice}</span>
            <strike>Rs.{info.strickPrice}</strike>
            <span>({info.discount}% OFF)</span>
        </div>
    </div>
  )
}

export default Item