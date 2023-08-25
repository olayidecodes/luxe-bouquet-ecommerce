import React from 'react'

const HeroBanner = () => {
  return (
    <div className='hero__banner container__grid'>
      <div className="left">
        <div className="top">
            <h1>Kyiv</h1>
            <h1>LuxeBouquets</h1>
            <p>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
        </div>
        <div className="bottom">
            <img src="/images/banner_hero.png" alt="" />
            <div className="line"></div>
            <p>Experience the joy of giving with our modern floral studio. Order online and send flowers, plants and gifts today</p>
        </div>
      </div>
      <div className="right">

      </div>
    </div>
  )
}

export default HeroBanner
