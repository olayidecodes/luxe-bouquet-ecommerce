import React from 'react'
import './Input.scss'

interface InputProps {
    title: string
}

const Input: React.FC<InputProps> = ({title}) => {
  return (
    <input 
    className='input'
    placeholder={title}
    />
  )
}

export default Input
