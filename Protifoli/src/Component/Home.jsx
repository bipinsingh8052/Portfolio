import React from 'react'
import HeroSection from '../pages/HeroSection'
import About from './About'
import Blog from './Blog'
import Services from './Services'
import Project from './Project'
import Skills from './Skills'
import Contact from './Contact'

export default function Home() {
  return (
    <>
      <HeroSection/>
      <About/>
      <Blog/>
      <Services/>
      <Project/>
      <Skills/>
      <Contact/>

    </>
  )
}
