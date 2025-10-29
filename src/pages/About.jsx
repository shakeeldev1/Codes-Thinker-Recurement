import React from 'react'
import HeroSection from '../components/About/HeroSection'
import AboutUs from '../components/About/AboutUs'
// import FeaturedJobs from '../components/About/FeatureJobs'
import TeamSection from '../components/About/YTeamSection'
import CTASection from '../components/About/CTASection'
import TestimonialSection from '../components/About/TestimonialSection'

const About = () => {
  return (
    <>
    <HeroSection/>
    <AboutUs/>
    {/* <FeaturedJobs/> */}
    <TeamSection/>
    <CTASection/>
    <TestimonialSection/>
    </>
  )
}

export default About