import React from 'react'

export default function Select({ children, ...props }) {
  return (
    <select className='w-full transition duration-300 border-gray-300 shadow-sm rounded-xl focus:ring focus:ring-indigo-100 focus:border-indigo-400' {...props}>
      {children}
    </select>
  )
}
