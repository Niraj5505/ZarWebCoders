import React from 'react'
import AboutHero from '../components/about/AboutHero'
import AboutStory from '../components/about/AboutStory'
import WhyChooseUs from '../components/about/WhyChooseUs'
import AboutTeam from '../components/about/AboutTeam'
import OurValues from '../components/about/OurValues'

export default function AboutPage({ onDiscussClick, onNavigateHome }) {
  return (
    <div className="flex-grow">
      {/* 1. About Hero */}
      <AboutHero />

      {/* 2. Our Story */}
      <AboutStory onBuildTogetherClick={onDiscussClick} />

      {/* 3. Why Choose Us */}
      <WhyChooseUs />

      {/* 4. Our Team */}
      <AboutTeam onJoinClick={onDiscussClick} />

      {/* 5. Our Values */}
      <OurValues onValuesClick={onDiscussClick} />
    </div>
  )
}
