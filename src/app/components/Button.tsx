    'use client'
import React from 'react'
import ButtonProps from '@/types/Button'

const Button:React.FC<ButtonProps> = ({name, type, className}) => {
  return (
    <>
      <button className={className} type={type}>{name}</button>
    </>
  )
}

export default Button