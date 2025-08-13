import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ProcessContainer = styled.div`
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

const ProcessFlow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #000 0%, #ccc 50%, #000 100%);
    z-index: 0;
    
    @media (max-width: 768px) {
      left: 1rem;
    }
  }
  
  @media (min-width: 768px) {
    &::before {
      display: none;
    }
  }
`

const ProcessStep = styled(motion.div)<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (min-width: 768px) {
    grid-template-columns: ${props => props.$reverse ? '1fr 100px 1fr' : '1fr 100px 1fr'};
    gap: 4rem;
  }
`

const StepContent = styled.div<{ $alignRight?: boolean }>`
  padding: 3rem 2rem;
  background: #fff;
  border: 1px solid #eee;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #000;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  
  @media (min-width: 768px) {
    text-align: ${props => props.$alignRight ? 'right' : 'left'};
  }
  
  @media (max-width: 768px) {
    margin-left: 4rem;
    padding: 2rem 1.5rem;
  }
`

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  
  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 1.5rem;
  }
  
  @media (max-width: 768px) {
    position: absolute;
    left: -1rem;
    top: 2rem;
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`

const StepTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  color: #000;
  margin: 0 0 1rem 0;
  
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`

const StepDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
  color: #666;
  margin: 0 0 1.5rem 0;
  
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`

const StepFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const StepFeature = styled.li`
  font-size: 0.9rem;
  font-weight: 300;
  color: #777;
  position: relative;
  padding-left: 1rem;
  
  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: #000;
  }
`

const TimelineSection = styled(motion.div)`
  background: #f8f9fa;
  padding: 4rem 2rem;
  text-align: center;
  
  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }
`

const TimelineTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
  color: #000;
  margin: 0 0 3rem 0;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

const TimelineText = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.8;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`


const ProcessSection: React.FC = () => {
  
  const processSteps = [
    {
      number: '01',
      title: '市场调研分析',
      description: '深入了解目标市场的消费习惯、竞争环境和法规要求，为出海战略提供数据支撑。',
      features: ['目标市场分析', '消费者画像', '竞争对手研究', '法规政策梳理']
    },
    {
      number: '02',
      title: '品牌本地化策略',
      description: '根据当地文化特色和消费偏好，制定品牌本地化策略和传播方案。',
      features: ['品牌定位调整', '视觉识别优化', '文化适应性改造', '传播策略制定']
    },
    {
      number: '03',
      title: '渠道建设规划',
      description: '构建适合当地市场的销售渠道体系，包括线上线下全渠道布局。',
      features: ['渠道伙伴选择', '分销网络建设', '电商平台入驻', '零售终端布局']
    },
    {
      number: '04',
      title: '营销推广执行',
      description: '执行全方位的营销推广活动，快速建立品牌知名度和市场影响力。',
      features: ['广告投放策略', '公关活动策划', '数字营销执行', 'KOL合作推广']
    },
    {
      number: '05',
      title: '运营优化管理',
      description: '持续监控和优化运营效果，根据市场反馈调整策略和执行方案。',
      features: ['数据监控分析', '效果评估优化', '客户反馈收集', '策略动态调整']
    },
    {
      number: '06',
      title: '长期发展支持',
      description: '提供持续的战略指导和运营支持，确保品牌在海外市场的长期成功。',
      features: ['战略升级规划', '团队能力建设', '业务扩展支持', '风险管理预案']
    }
  ]
  
  return (
    <ProcessContainer>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        出海流程
      </SectionTitle>
      
      <ProcessFlow>
        {processSteps.map((step, index) => (
          <ProcessStep
            key={index}
            $reverse={index % 2 === 1}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {index % 2 === 0 ? (
              <>
                <StepContent>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                  <StepFeatures>
                    {step.features.map((feature, featureIndex) => (
                      <StepFeature key={featureIndex}>{feature}</StepFeature>
                    ))}
                  </StepFeatures>
                </StepContent>
                <StepNumber>{step.number}</StepNumber>
                <div></div>
              </>
            ) : (
              <>
                <div></div>
                <StepNumber>{step.number}</StepNumber>
                <StepContent $alignRight>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                  <StepFeatures>
                    {step.features.map((feature, featureIndex) => (
                      <StepFeature key={featureIndex}>{feature}</StepFeature>
                    ))}
                  </StepFeatures>
                </StepContent>
              </>
            )}
          </ProcessStep>
        ))}
      </ProcessFlow>
      
      <TimelineSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <TimelineTitle>项目周期</TimelineTitle>
        <TimelineText>
          完整的出海项目通常需要6-12个月时间，我们将根据具体的目标市场和业务需求制定详细的时间规划。
          在项目执行过程中，我们采用阶段性交付模式，确保每个环节都能达到预期效果，
          并为客户提供持续的支持和优化服务。
        </TimelineText>
      </TimelineSection>
    </ProcessContainer>
  )
}

export default ProcessSection