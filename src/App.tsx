import React from 'react'
import styled from 'styled-components'
import { Navbar1 } from './components/ui/navbar'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import CasesSection from './components/CasesSection'
import ProcessSection from './components/ProcessSection'
import ContactSection from './components/ContactSection'

const AppContainer = styled.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #000;
  background: #fff;
  overflow-x: hidden;
`

const MainContent = styled.main`
  width: 100%;
`

const Section = styled.section`
  min-height: 100vh;
  padding: clamp(2rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem);
  
  @media (min-width: 768px) {
    padding: clamp(4rem, 8vw, 6rem) clamp(2rem, 4vw, 4rem);
  }
  
  @media (min-width: 1024px) {
    padding: clamp(6rem, 10vh, 8rem) clamp(3rem, 6vw, 6rem);
  }
  
  &#home {
    padding: 0;
    margin-bottom: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    
    @media (min-width: 768px) {
      padding: 0;
    }
    
    @media (min-width: 1024px) {
      padding: 0;
    }
  }
`

function App() {
  return (
    <AppContainer>
      <Navbar1 />
      <MainContent>
        <Section id="home">
          <HomeSection />
        </Section>
        <Section id="about">
          <AboutSection />
        </Section>
        <Section id="services">
          <ServicesSection />
        </Section>
        <Section id="cases">
          <CasesSection />
        </Section>
        <Section id="process">
          <ProcessSection />
        </Section>
        <Section id="contact">
          <ContactSection />
        </Section>
      </MainContent>
    </AppContainer>
  )
}

export default App