import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ConnectContainer = styled.section`
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
  margin-left: 15vw;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 6vh;
    margin-left: 0;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vh;
  max-width: 500px;
  
  @media (max-width: 768px) {
    gap: 3vh;
  }
`

const ContactItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: ${(_, index) => index % 2 === 0 ? '0' : '12vw'};
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const ContactLabel = styled.span`
  font-size: 0.9rem;
  font-weight: 300;
  color: #999;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const ContactValue = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
  color: #000;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const GlobalOffices = styled(motion.div)`
  margin-top: 8vh;
  margin-left: 8vw;
  
  @media (max-width: 768px) {
    margin-top: 6vh;
    margin-left: 0;
  }
`

const OfficesLabel = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  color: #999;
  margin: 0 0 2rem 0;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const OfficesList = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  margin: 0;
  color: #666;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const Footer = styled(motion.div)`
  position: absolute;
  bottom: 6vh;
  left: 8vw;
  font-size: 0.8rem;
  font-weight: 300;
  color: #ccc;
  letter-spacing: 0.05em;
  
  @media (max-width: 768px) {
    left: 6vw;
    bottom: 4vh;
  }
`

const ConnectSection: React.FC = () => {
  const contactItems = [
    { label: 'Phone', value: '400 920 0986' },
    { label: 'Email', value: 'info@bygroup.net.cn' },
    { label: 'Address', value: '上海市徐汇区云锦路500号\n绿地汇中心A座15F' }
  ]
  
  return (
    <ConnectContainer id="connect">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Connect
      </SectionTitle>
      
      <ContactInfo>
        {contactItems.map((item, index) => (
          <ContactItem
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ marginLeft: index % 2 === 0 ? '0' : '12vw' }}
          >
            <ContactLabel>{item.label}</ContactLabel>
            <ContactValue style={{ whiteSpace: 'pre-line' }}>
              {item.value}
            </ContactValue>
          </ContactItem>
        ))}
      </ContactInfo>
      
      <GlobalOffices
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <OfficesLabel>Global Presence</OfficesLabel>
        <OfficesList>
          上海 · 深圳 · 广州 · 纽约 · 东京 · 墨尔本 · 吉隆坡
        </OfficesList>
      </GlobalOffices>
      
      <Footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        © 2024 BY年轻化创新集团
      </Footer>
    </ConnectContainer>
  )
}

export default ConnectSection