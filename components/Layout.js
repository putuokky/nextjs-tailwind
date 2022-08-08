import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="antialiased font-sans tracking-tighter bg-gray-100 flex items-center justify-center min-h-screen">
      {children}
    </div>
  )
}
