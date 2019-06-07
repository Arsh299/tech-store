import React from 'react'
import Info from '../components/AboutPage/Info';
import Hero from '../components/Hero';
import aboutBcg from '../images/aboutBcg.jpeg';
import {Link} from 'react-router-dom'


export default function AboutPage() {
  return (
    <>
      <Hero title="" img={aboutBcg}/>
      <Info/>
      
    </>
  )
}
