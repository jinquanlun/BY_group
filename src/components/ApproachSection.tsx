import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ApproachContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8vw;
  position: relative;
  background: #fff;
`

const SectionTitle = styled(motion.h2)`
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 0.2em;
  margin: 0 0 8vh 0;
  color: #666;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 6vh;
  }
`

const MethodologyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6vh;
  margin-left: 10vw;
  
  @media (max-width: 768px) {
    margin-left: 0;
    gap: 4vh;
  }
`

const MethodTitle = styled(motion.h3)`
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 2rem 0;
  color: #000;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`

const MethodDescription = styled(motion.p)`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  margin: 0 0 4vh 0;
  color: #666;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4vh 6vw;
  margin-top: 4vh;
  margin-left: 8vw;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3vh;
    margin-left: 0;
  }
`

const Service = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ServiceName = styled.h4`
  font-size: 1.1rem;
  font-weight: 300;
  margin: 0;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.6;
  margin: 0;
  color: #999;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const ApproachSection: React.FC = () => {
  const services = [
    { name: '品牌年轻化战略', description: '全新品牌定位与战略规划' },
    { name: '年轻化创意策划', description: '突破性创意解决方案' },
    { name: '数字化运营', description: '全渠道数字化体验' },
    { name: '投资孵化', description: '早期品牌投资与孵化' }
  ]
  
  return (
    <ApproachContainer id="approach">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Approach
      </SectionTitle>
      
      <MethodologyContainer>
        <MethodTitle
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          年轻化方法论
        </MethodTitle>
        
        <MethodDescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          通过独创的年轻化理论体系，为全球消费品企业提供从战略定位到执行落地的全链路服务，推动品牌在变化市场中保持竞争优势。
        </MethodDescription>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <Service
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceName>{service.name}</ServiceName>
              <ServiceDescription>{service.description}</ServiceDescription>
            </Service>
          ))}
        </ServicesGrid>
      </MethodologyContainer>
    </ApproachContainer>
  )
}

export default ApproachSection