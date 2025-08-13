import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const EssenceContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8vw;
  position: relative;
  background: #fff;
`

const Vision = styled(motion.h2)`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.6;
  margin: 0 0 8vh 0;
  color: #000;
  max-width: 600px;
  margin-left: 25vw;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-left: 0;
    max-width: none;
    margin-bottom: 6vh;
  }
`

const Values = styled(motion.div)`
  margin-top: 12vh;
  margin-left: 10vw;
  
  @media (max-width: 768px) {
    margin-top: 8vh;
    margin-left: 0;
  }
`

const ValuesText = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.8;
  margin: 0;
  color: #666;
  max-width: 500px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: none;
  }
`

const EssenceSection: React.FC = () => {
  return (
    <EssenceContainer id="essence">
      <Vision
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        愿望一切陈旧的商业主体，
        <br />
        都能跃上年轻化的飞船
      </Vision>
      
      <Values
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <ValuesText>
          年轻化——全球最佳商业迭代引擎
        </ValuesText>
      </Values>
    </EssenceContainer>
  )
}

export default EssenceSection