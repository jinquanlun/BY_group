import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const PracticeContainer = styled.section`
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

const UnitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6vh;
  max-width: 800px;
  margin-left: 12vw;
  
  @media (max-width: 768px) {
    margin-left: 0;
    gap: 4vh;
  }
`

const Unit = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const UnitNumber = styled.span`
  font-size: 0.9rem;
  font-weight: 300;
  color: #999;
  letter-spacing: 0.1em;
`

const UnitName = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const UnitDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  margin: 0;
  color: #666;
  max-width: 500px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const PracticeSection: React.FC = () => {
  const units = [
    {
      number: '01',
      name: 'BY年轻化',
      nameEn: 'BEYOUNG',
      description: '全球年轻化理论体系开创者，专注消费品品牌年轻化战略咨询'
    },
    {
      number: '02',
      name: '大熊座星级供应链',
      nameEn: 'Ursa Major',
      description: '国际化供应链管理企业，服务全球知名零售和餐饮品牌'
    },
    {
      number: '03',
      name: 'BY品牌孵化',
      nameEn: 'BY Brand Incubation',
      description: '关注早期种子期投资，赋能新生品牌强势崛起'
    }
  ]
  
  return (
    <PracticeContainer id="practice">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Practice
      </SectionTitle>
      
      <UnitsContainer>
        {units.map((unit, index) => (
          <Unit
            key={unit.number}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <UnitNumber>{unit.number}</UnitNumber>
            <UnitName>
              {unit.name}
              <br />
              <span style={{ fontSize: '0.8em', color: '#999' }}>{unit.nameEn}</span>
            </UnitName>
            <UnitDescription>{unit.description}</UnitDescription>
          </Unit>
        ))}
      </UnitsContainer>
    </PracticeContainer>
  )
}

export default PracticeSection