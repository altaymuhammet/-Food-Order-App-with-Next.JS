import React from 'react'
import Header from '@/Components/Layout/Header'
import Footer from '@/Components/Layout/Footer'

const Layout = ({children}) => {
  return (
    <>
    <Header />
    <main>{children}</main>
    <Footer />
    </>
  )
}

export default Layout