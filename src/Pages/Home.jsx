import React from 'react'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import WhyChooseUs from '../Components/WhyChooseUs'
import MoversStats from '../Components/MoversStats'
import MovingServices from '../Components/MovingServices'
import RateChart from '../Components/RateChart'
import EnquiryForm from '../Components/EnquiryForm'
import QuoteForm from "../Components/QuoteForm"
import Faq from "../Components/Faq"
import FAQ from '../Components/Faq'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <WhyChooseUs/>
      <RateChart/>
      <EnquiryForm/>
      <MovingServices/>
      <MoversStats/>
      <FAQ/>
      <QuoteForm/>
    </div>
  )
}

export default Home
