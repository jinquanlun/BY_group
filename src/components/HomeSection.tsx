import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { CircularRevealHeading } from '@/components/ui/circular-reveal-heading'

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: clamp(2rem, 4vh, 4rem) clamp(1rem, 4vw, 3rem) clamp(2rem, 4vh, 4rem);
  
  @media (max-width: 768px) {
    min-height: 100vh;
    padding: clamp(4rem, 12vh, 8rem) clamp(1rem, 4vw, 2rem) clamp(3rem, 8vh, 5rem);
    justify-content: flex-start;
  }
  
  @media (min-width: 769px) {
    padding: clamp(3rem, 6vh, 6rem) clamp(1rem, 4vw, 3rem) clamp(3rem, 6vh, 6rem);
  }
`

const HeroContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 6vw, 4rem);
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 5fr 4fr;
    gap: clamp(3rem, 6vw, 6rem);
    align-items: center;
  }
  
  @media (min-width: 1200px) {
    gap: clamp(4rem, 8vw, 8rem);
    max-width: 1200px;
  }
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 4vw, 2.5rem);
  max-width: 100%;
  
  @media (min-width: 768px) {
    gap: clamp(2rem, 4vw, 3rem);
    max-width: 95%;
  }
  
  @media (min-width: 1024px) {
    gap: clamp(2.5rem, 4vw, 3.5rem);
    max-width: 90%;
  }
`

const MainTitle = styled(motion.h1)`
  font-size: clamp(2.25rem, 6vw, 4.5rem);
  font-weight: 300;
  line-height: 1.3;
  letter-spacing: 0.02em;
  color: #000;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: clamp(3rem, 6vw, 4.5rem);
    line-height: 1.25;
  }
  
  @media (min-width: 1024px) {
    font-size: clamp(3.5rem, 6vw, 5rem);
    line-height: 1.2;
  }
`

const Subtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  font-weight: 400;
  line-height: 1.7;
  letter-spacing: 0.01em;
  color: #555;
  margin: 0;
  max-width: clamp(500px, 85%, 650px);
  
  @media (min-width: 768px) {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    line-height: 1.65;
  }
  
  @media (min-width: 1024px) {
    max-width: 580px;
  }
`

const CTAButton = styled(motion.button)`
  align-self: flex-start;
  padding: clamp(0.9rem, 2.5vw, 1.2rem) clamp(1.8rem, 4vw, 2.5rem);
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  font-weight: 500;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
  margin-top: clamp(0.5rem, 2vw, 1rem);
  
  &:hover {
    background: #222;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
`

const MapContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 400px;
  
  @media (max-width: 767px) {
    order: -1;
    margin-bottom: clamp(2rem, 6vw, 3rem);
    height: auto;
    min-height: clamp(300px, 60vw, 400px);
    justify-content: center;
  }
  
  @media (min-width: 768px) {
    justify-content: center;
    padding-left: clamp(1rem, 3vw, 2rem);
  }
  
  @media (min-width: 1024px) {
    justify-content: flex-end;
    padding-right: clamp(1rem, 3vw, 2rem);
  }
`

const StatsContainer = styled(motion.div)`
  position: relative;
  margin-top: clamp(4rem, 8vh, 6rem);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.5rem, 4vw, 3rem);
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 clamp(1rem, 4vw, 3rem);
  z-index: 1;
  
  @media (max-width: 768px) {
    margin-top: clamp(3rem, 8vw, 5rem);
    gap: clamp(1rem, 4vw, 2rem);
  }
  
  @media (min-width: 769px) {
    margin-top: clamp(5rem, 10vh, 8rem);
  }
`

const StatItem = styled.div`
  text-align: center;
  padding: clamp(1rem, 3vw, 1.5rem);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 2;
  
  &:hover {
    background: rgba(255, 255, 255, 0.98);
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
  
  @media (min-width: 768px) {
    text-align: center;
    padding: clamp(1.2rem, 3vw, 2rem);
  }
`

const StatNumber = styled.div`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #000;
  margin-bottom: clamp(0.25rem, 1vw, 0.5rem);
  letter-spacing: -0.02em;
  
  @media (min-width: 768px) {
    font-size: clamp(2rem, 4vw, 2.8rem);
  }
`

const StatLabel = styled.div`
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  font-weight: 400;
  color: #555;
  letter-spacing: 0.01em;
  
  @media (min-width: 768px) {
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  }
`

const HomeSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // BY theme circular reveal items (hover to reveal images)
  const circleItems = [
    {
      text: 'STRATEGY',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      text: 'DESIGN',
      image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      text: 'GROWTH',
      image: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1200&auto=format&fit=crop',
    },
    {
      text: 'INNOVATION',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    },
  ]
  
  return (
    <HomeContainer>
      <HeroContent>
        <TextContent>
          <MainTitle
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            BY年轻化
            <br />
            创新集团
          </MainTitle>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            全球品牌年轻化理论体系开创者，专注消费品品牌年轻化战略咨询，
            推动企业实现年轻化转型与创新增长。
          </Subtitle>
          
          <CTAButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            onClick={scrollToContact}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            开始合作
          </CTAButton>
        </TextContent>
        
        <MapContainer
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        >
          <CircularRevealHeading
            items={circleItems}
            size="md"
            centerText={
              <div className="text-xl lg:text-2xl font-semibold tracking-wide text-[#333]">
                BY GROUP
              </div>
            }
          />
        </MapContainer>
      </HeroContent>
      
      <StatsContainer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
      >
        <StatItem>
          <StatNumber>500+</StatNumber>
          <StatLabel>成功案例</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>15年</StatNumber>
          <StatLabel>行业经验</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>7个</StatNumber>
          <StatLabel>全球中心</StatLabel>
        </StatItem>
      </StatsContainer>
    </HomeContainer>
  )
}

export default HomeSection