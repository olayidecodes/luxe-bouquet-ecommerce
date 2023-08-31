import React from 'react'
import './SectionContent.scss'

interface SectionContentProps {
    title: string
    desc: string
    property: string
}

const SectionContent: React.FC<SectionContentProps> = ({title, desc, property}) => {
  return (
    <div className={`section__content ${property}`}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default SectionContent
