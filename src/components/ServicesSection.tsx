import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ServicesContainer = styled.div`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ServiceCard = styled(motion.div)`
  border: 1px solid #eee;
  padding: 3rem 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    border-color: #000;
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: #000;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`

const ServiceNumber = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  color: #999;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
`

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  color: #000;
  margin: 0 0 1.5rem 0;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

const ServiceDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
  color: #666;
  margin: 0 0 2rem 0;
`

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const ServiceFeature = styled.li`
  font-size: 0.9rem;
  font-weight: 300;
  color: #777;
  position: relative;
  padding-left: 1rem;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #000;
  }
`

const MethodologySection = styled(motion.div)`
  background: #f8f9fa;
  padding: 4rem 2rem;
  border-radius: 0;
  margin: 4rem 0;
  
  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }
`

const MethodologyTitle = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  color: #000;
  margin: 0 0 2rem 0;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

const MethodologyText = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.8;
  color: #666;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`


const ServicesSection: React.FC = () => {
  
  const services = [
    {
      number: '01',
      title: '品牌年轻化战略咨询',
      description: '通过独创的年轻化理论体系，为企业提供全面的品牌战略定位和规划服务。',
      features: ['品牌定位重塑', '市场策略制定', '竞争分析', '消费者洞察']
    },
    {
      number: '02', 
      title: '年轻化创意策划',
      description: '结合年轻消费者特点，打造具有突破性的创意解决方案和传播策略。',
      features: ['创意概念开发', '视觉识别设计', '传播策略规划', '内容营销']
    },
    {
      number: '03',
      title: '数字化运营',
      description: '整合新媒体渠道，为品牌提供全方位的数字化运营和推广服务。',
      features: ['社交媒体运营', '电商平台管理', '直播销售', '数据分析']
    },
    {
      number: '04',
      title: '投资孵化服务', 
      description: '关注早期种子期和天使轮投资，为新生品牌提供全方位孵化支持。',
      features: ['资金支持', '导师指导', '资源对接', '市场拓展']
    },
    {
      number: '05',
      title: '供应链管理',
      description: '通过大熊座星级供应链，为全球知名零售和餐饮品牌提供专业服务。',
      features: ['供应商管理', '质量控制', '物流优化', '成本控制']
    },
    {
      number: '06',
      title: '出海战略规划',
      description: '帮助中国品牌走向国际市场，制定完整的出海战略和执行方案。',
      features: ['市场调研', '本地化策略', '渠道建设', '品牌推广']
    }
  ]
  
  return (
    <ServicesContainer>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        服务介绍
      </SectionTitle>
      
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <ServiceNumber>{service.number}</ServiceNumber>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServiceFeatures>
              {service.features.map((feature, featureIndex) => (
                <ServiceFeature key={featureIndex}>{feature}</ServiceFeature>
              ))}
            </ServiceFeatures>
          </ServiceCard>
        ))}
      </ServicesGrid>
      
      <MethodologySection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <MethodologyTitle>年轻化方法论</MethodologyTitle>
        <MethodologyText>
          通过独创的年轻化理论体系，我们为全球消费品企业提供从战略定位到执行落地的全链路服务，
          推动品牌在变化市场中保持竞争优势，并引领未来趋势。我们的方法论结合了深度的市场洞察、
          创新的策略思维和实用的执行工具，确保每个合作伙伴都能实现真正的年轻化转型。
        </MethodologyText>
      </MethodologySection>
    </ServicesContainer>
  )
}

export default ServicesSection