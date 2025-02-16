import React from 'react'
import Navbartoo from './pages/Navbartoo'
import { Outlet } from 'react-router-dom'
import Footer from './pages/Footer'

export default function Layout() {
  return (
    <div>
      <Navbartoo/>

      <main>
        <Outlet/>
      </main>

      <Footer/>
    </div>
  )
}
