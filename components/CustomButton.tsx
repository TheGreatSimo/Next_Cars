"use client"
import React from 'react'
import { CustomButtonProps } from '@/types'

const CustomButton = ({title , handleClick, containerStyle, btnType} : CustomButtonProps) => {

  return (
    <button  
      disabled={false}
      type={btnType || "button"}
      onClick={handleClick}
      className={`custom-btn ${containerStyle}`}>
        {title}
    </button>
  )
}

export default CustomButton