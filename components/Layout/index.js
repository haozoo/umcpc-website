import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-gradient-to-tl from-club-blue-900 to-club-blue-800">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
