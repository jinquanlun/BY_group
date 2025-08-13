import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`

// Mobile Navigation
const MobileNav = styled.div`
  display: block;
  
  @media (min-width: 1024px) {
    display: none;
  }
`

const MobileMenuButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  z-index: 1001;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  
  span {
    width: 20px;
    height: 2px;
    background: #000;
    transition: all 0.3s ease;
    transform-origin: center;
    
    &:nth-child(1) {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none'};
    }
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`

// Desktop Navigation
const DesktopNav = styled.div`
  display: none;
  
  @media (min-width: 1024px) {
    display: block;
    width: 280px;
    height: 100vh;
    background: #fff;
    border-right: 1px solid #eee;
    padding: 4rem 2rem;
  }
`

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 4rem;
  color: #000;
  letter-spacing: 0.1em;
`

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 1023px) {
    gap: 3rem;
  }
`

const NavItem = styled.li`
  position: relative;
`

const NavLink = styled.a<{ $active: boolean }>`
  display: block;
  font-size: 1.1rem;
  font-weight: 300;
  color: ${props => props.$active ? '#000' : '#666'};
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0.5rem 0;
  
  @media (max-width: 1023px) {
    font-size: 1.5rem;
    text-align: center;
  }
  
  &:hover {
    color: #000;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -1rem;
    top: 50%;
    transform: translateY(-50%);
    width: ${props => props.$active ? '8px' : '0'};
    height: 2px;
    background: #000;
    transition: width 0.3s ease;
    
    @media (max-width: 1023px) {
      display: none;
    }
  }
`

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const sections = [
    { id: 'home', label: '首页' },
    { id: 'about', label: '关于我们' },
    { id: 'services', label: '服务介绍' },
    { id: 'cases', label: '成功案例' },
    { id: 'process', label: '出海流程' },
    { id: 'contact', label: '联系我们' }
  ]
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id)
          }
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }
  
  return (
    <NavContainer>
      {/* Mobile Navigation */}
      <MobileNav>
        <MobileMenuButton
          $isOpen={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </MobileMenuButton>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <NavMenu>
                {sections.map((section) => (
                  <NavItem key={section.id}>
                    <NavLink
                      $active={activeSection === section.id}
                      onClick={() => scrollToSection(section.id)}
                    >
                      {section.label}
                    </NavLink>
                  </NavItem>
                ))}
              </NavMenu>
            </MobileMenu>
          )}
        </AnimatePresence>
      </MobileNav>
      
      {/* Desktop Navigation */}
      <DesktopNav>
        <Logo>BY</Logo>
        <NavMenu>
          {sections.map((section) => (
            <NavItem key={section.id}>
              <NavLink
                $active={activeSection === section.id}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>
      </DesktopNav>
    </NavContainer>
  )
}

export default Navigation