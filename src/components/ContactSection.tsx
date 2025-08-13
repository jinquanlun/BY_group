import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ContactContainer = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const ContactBlock = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ContactLabel = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  color: #000;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`

const ContactValue = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.6;
  color: #666;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

const ContactLink = styled.a`
  color: #000;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #666;
    text-decoration: underline;
  }
`

const OfficesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const OfficesTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  color: #000;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`

const OfficesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const OfficeCard = styled(motion.div)`
  padding: 2rem;
  border: 1px solid #eee;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #000;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const OfficeName = styled.h4`
  font-size: 1.1rem;
  font-weight: 400;
  color: #000;
  margin: 0 0 1rem 0;
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

const OfficeAddress = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.6;
  color: #666;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

const FormSection = styled(motion.div)`
  background: #f8f9fa;
  padding: 4rem 2rem;
  
  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }
`

const FormTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 300;
  color: #000;
  margin: 0 0 3rem 0;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FormLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const FormInput = styled.input`
  padding: 1rem;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 1rem;
  font-weight: 300;
  color: #000;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #000;
  }
  
  &::placeholder {
    color: #999;
  }
`

const FormTextarea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 1rem;
  font-weight: 300;
  color: #000;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #000;
  }
  
  &::placeholder {
    color: #999;
  }
`

const FormButton = styled.button`
  padding: 1.2rem 2rem;
  background: #000;
  color: #fff;
  border: none;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:hover {
    background: #333;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`


const ContactSection: React.FC = () => {
  
  const offices = [
    {
      name: '上海总部',
      address: '上海市徐汇区云锦路500号\n绿地汇中心A座15F'
    },
    {
      name: '深圳中心',
      address: '深圳市福田区香蜜湖街道\n印力中心'
    },
    {
      name: '纽约中心',
      address: 'New York Manhattan\n47th Street'
    },
    {
      name: '东京中心',
      address: '東京都荒川区西日暮里\n5-16-7/4階'
    },
    {
      name: '墨尔本中心',
      address: '92 Barry Road\nCampbellfield 3061'
    },
    {
      name: '吉隆坡中心',
      address: 'Sunway Geo Avenue\nBandar Sunway, Selangor'
    }
  ]
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('感谢您的留言，我们会尽快与您联系！')
  }
  
  return (
    <ContactContainer>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        联系我们
      </SectionTitle>
      
      <ContactGrid>
        <ContactInfo>
          <ContactBlock
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactLabel>服务热线</ContactLabel>
            <ContactValue>
              <ContactLink href="tel:4009200986">400 920 0986</ContactLink>
            </ContactValue>
          </ContactBlock>
          
          <ContactBlock
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ContactLabel>商务电话</ContactLabel>
            <ContactValue>
              <ContactLink href="tel:18717905861">187 1790 5861</ContactLink>
            </ContactValue>
          </ContactBlock>
          
          <ContactBlock
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactLabel>邮箱</ContactLabel>
            <ContactValue>
              <ContactLink href="mailto:info@bygroup.net.cn">info@bygroup.net.cn</ContactLink>
            </ContactValue>
          </ContactBlock>
        </ContactInfo>
        
        <OfficesSection>
          <OfficesTitle>全球办公室</OfficesTitle>
          <OfficesGrid>
            {offices.map((office, index) => (
              <OfficeCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <OfficeName>{office.name}</OfficeName>
                <OfficeAddress style={{ whiteSpace: 'pre-line' }}>
                  {office.address}
                </OfficeAddress>
              </OfficeCard>
            ))}
          </OfficesGrid>
        </OfficesSection>
      </ContactGrid>
      
      <FormSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <FormTitle>开始合作</FormTitle>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>姓名</FormLabel>
            <FormInput
              type="text"
              placeholder="请输入您的姓名"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel>公司</FormLabel>
            <FormInput
              type="text"
              placeholder="请输入您的公司名称"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel>电话</FormLabel>
            <FormInput
              type="tel"
              placeholder="请输入您的联系电话"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel>邮箱</FormLabel>
            <FormInput
              type="email"
              placeholder="请输入您的邮箱地址"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel>合作需求</FormLabel>
            <FormTextarea
              placeholder="请描述您的具体需求和项目背景..."
              required
            />
          </FormGroup>
          
          <FormButton type="submit">
            提交咨询
          </FormButton>
        </ContactForm>
      </FormSection>
    </ContactContainer>
  )
}

export default ContactSection