import React from 'react'
import './GridContent.scss'

interface GridContentProps {
    name: string
    image: string
}

const GridContent: React.FC<GridContentProps> = ({name, image}) => {
  return (
    <div className='grid_content'>
      <div className="left_column">
        <h1>{name}</h1>
        <p>Shop</p>
      </div>
      <div className="right_column">
        <img src={image}/>
      </div>
    </div>
  )
}

export default GridContent
