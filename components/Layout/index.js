import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-gradient-to-br from-club-blue-900 to-club-blue-800 pt-12 px-20">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
