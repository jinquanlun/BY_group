import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ImpactContainer = styled.section`
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
  margin-left: 20vw;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 6vh;
    margin-left: 0;
  }
`

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8vh;
  max-width: 600px;
  
  @media (max-width: 768px) {
    gap: 6vh;
  }
`

const Stat = styled(motion.div)`
  display: flex;
  align-items: baseline;
  gap: 2rem;
  margin-left: ${(_, index) => index % 2 === 0 ? '0' : '15vw'};
  
  @media (max-width: 768px) {
    margin-left: 0;
    gap: 1rem;
  }
`

const StatNumber = styled.span`
  font-size: 4rem;
  font-weight: 200;
  color: #000;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

const StatLabel = styled.span`
  font-size: 1rem;
  font-weight: 300;
  color: #666;
  line-height: 1.4;
  max-width: 200px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const ClientsSection = styled(motion.div)`
  margin-top: 12vh;
  margin-left: 8vw;
  
  @media (max-width: 768px) {
    margin-top: 8vh;
    margin-left: 0;
  }
`

const ClientsLabel = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  color: #999;
  margin: 0 0 2rem 0;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const ClientsList = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  margin: 0;
  color: #666;
  max-width: 500px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const ImpactSection: React.FC = () => {
  const stats = [
    { number: '500+', label: '品牌年轻化成功案例' },
    { number: '15', label: '年全球服务经验' },
    { number: '7', label: '个全球服务中心' }
  ]
  
  return (
    <ImpactContainer id="impact">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Impact
      </SectionTitle>
      
      <StatsContainer>
        {stats.map((stat, index) => (
          <Stat
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ marginLeft: index % 2 === 0 ? '0' : '15vw' }}
          >
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </Stat>
        ))}
      </StatsContainer>
      
      <ClientsSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <ClientsLabel>Trusted by</ClientsLabel>
        <ClientsList>
          金龙鱼、可口可乐、脑白金、谷维多、强生、蒙牛、百事可乐、联合利华、麦当劳、山姆会员店、Costco、分众传媒
        </ClientsList>
      </ClientsSection>
    </ImpactContainer>
  )
}

export default ImpactSection