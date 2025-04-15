import React from 'react'

const Button = ({title, id, rightIcon, leftIcon, ContainerClass}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${ContainerClass} !bg-yellow-300 flex-center gap-1`} >
      {leftIcon}

      <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
        <div>
          {title}
        </div>
      </span>
      
      {rightIcon}
    </button>
  )
}

export default Button
