import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { BrandIconCloud } from '@/components/ui/brand-icon-cloud'

const CasesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  
  @media (max-width: 768px) {
    gap: 4rem;
  }
`

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 300;
  color: #000;
  margin: 0 0 3rem 0;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

const CasesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
  }
`

const CaseCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 0;
  border-bottom: 1px solid #eee;
  position: relative;
  
  &:hover {
    transform: translateX(10px);
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 0;
    background: #000;
    transition: height 0.3s ease;
  }
  
  &:hover::before {
    height: 60px;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 0;
    
    &::before {
      left: -1rem;
    }
    
    &:hover {
      transform: translateX(5px);
    }
  }
`

const CaseClient = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

const CaseTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
  color: #000;
  margin: 0;
  line-height: 1.3;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const CaseDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
  color: #666;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`

const CaseResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const ResultValue = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  color: #000;
  
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`

const ResultLabel = styled.span`
  font-size: 0.9rem;
  font-weight: 300;
  color: #666;
`

const ClientsSection = styled(motion.div)`
  background: #f8f9fa;
  padding: 4rem 2rem;
  text-align: center;
  
  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }
`

const ClientsTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
  color: #000;
  margin: 0 0 3rem 0;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

// Removed text grid in favor of interactive brand cloud

// No longer used


const CasesSection: React.FC = () => {
  
  const cases = [
    {
      client: 'JINLONGYU',
      title: '金龙鱼6步鲜大米，2023年100%增长',
      description: '通过年轻化品牌重塑和创新营销策略，帮助金龙鱼6步鲜大米实现了显著的市场突破，在竞争激烈的大米市场中脱颖而出。',
      results: [
        { value: '100%', label: '销量增长' },
        { value: '6个月', label: '项目周期' }
      ]
    },
    {
      client: 'GUVETO',
      title: '谷维多重新定位，稻米油连续8年销量第一',
      description: '为谷维多制定全新的品牌定位策略，突出稻米油的健康优势，建立了强大的市场领导地位。',
      results: [
        { value: '8年', label: '销量第一' },
        { value: '300%', label: '品牌认知提升' }
      ]
    },
    {
      client: 'DUOYANSHOU',
      title: '多燕瘦，从0到20亿增长',
      description: '从品牌创立开始，提供全程年轻化策略支持，打造了备受年轻消费者喜爱的健康品牌。',
      results: [
        { value: '20亿', label: '营收规模' },
        { value: '5年', label: '发展时间' }
      ]
    },
    {
      client: 'SHANZHA',
      title: '山楂树下年轻化品牌重塑',
      description: '通过深度的年轻化改造，让传统山楂品牌焕发新的生机，获得了年轻消费群体的广泛认同。',
      results: [
        { value: '200%', label: '年轻用户增长' },
        { value: '全国', label: '渠道覆盖' }
      ]
    }
  ]
  
  // Clients rendered via interactive brand icon cloud
  
  return (
    <CasesContainer>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        成功案例
      </SectionTitle>
      
      <CasesGrid>
        {cases.map((caseItem, index) => (
          <CaseCard
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <CaseClient>{caseItem.client}</CaseClient>
            <CaseTitle>{caseItem.title}</CaseTitle>
            <CaseDescription>{caseItem.description}</CaseDescription>
            <CaseResults>
              {caseItem.results.map((result, resultIndex) => (
                <ResultItem key={resultIndex}>
                  <ResultValue>{result.value}</ResultValue>
                  <ResultLabel>{result.label}</ResultLabel>
                </ResultItem>
              ))}
            </CaseResults>
          </CaseCard>
        ))}
      </CasesGrid>
      
      <ClientsSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ClientsTitle>合作伙伴</ClientsTitle>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <BrandIconCloud />
        </div>
      </ClientsSection>
    </CasesContainer>
  )
}

export default CasesSection