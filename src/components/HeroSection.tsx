import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 8vw;
  position: relative;
  background: #fff;
`

const Logo = styled(motion.div)`
  font-size: 3.5rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  margin-bottom: 12vh;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 8vh;
  }
`

const Mission = styled(motion.h1)`
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 1.4;
  margin: 0;
  color: #000;
  max-width: 800px;
  margin-left: 15vw;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-left: 0;
    max-width: none;
  }
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 8vh;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 60px;
  background: #000;
  opacity: 0.3;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    border: 1px solid #000;
    border-radius: 50%;
    background: transparent;
  }
`

const HeroSection: React.FC = () => {
  return (
    <HeroContainer id="hero">
      <Logo
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        BY
      </Logo>
      
      <Mission
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        赋能全球品牌创新增长
      </Mission>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 2 }}
      />
    </HeroContainer>
  )
}

export default HeroSection