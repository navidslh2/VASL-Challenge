import React from 'react'

interface Props{
    children: React.ReactNode
}

const Tooltip = ({children}:Props) => {
  return (
    <span className='opacity-0 group-hover:opacity-100 absolute text-xs text-black bg-white/50 p-1 -top-full right-1/2 translate-x-1/2 whitespace-nowrap rounded-sm hoverEffect'>
      {children}
    </span>
  )
}

export default Tooltip
