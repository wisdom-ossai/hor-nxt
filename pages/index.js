
import WorkSection from '../components/WorkSection'
import WhatWeDoSection from '../components/WhatWeDoSection'
import EventSection from '../components/EventSection'
import VideoSection from '../components/VideoSection'
import FunFactsSection from '../components/FunFactsSection'
import CausesSection from '../components/CausesSection'
import DonationSection from '../components/DonationSection'
import TestimonialSection from '../components/TestimonialSection'
import NewsSection from '../components/NewsSection'
import MainSlider from '@hor/components/MainSlider'

export default function Home() {
  return (
    <>
      <MainSlider />
      <WorkSection />
      <WhatWeDoSection />
      <EventSection />
      <VideoSection />
      <FunFactsSection />
      <CausesSection />
      <DonationSection />
      <TestimonialSection />
      <NewsSection />
     </>
  )
}
