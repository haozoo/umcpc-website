import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-club-blue-800">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
