import React from 'react'

interface FooterTitleProps {
    title: string
}

const FooterTitle: React.FC<FooterTitleProps> = ({title}) => {
  return (
    <div className='footer__title'>
      <h1>{title}</h1>
    </div>
  )
}

export default FooterTitle
