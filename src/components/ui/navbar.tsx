import React, { useState, useEffect } from "react";
import { Menu, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactElement;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src?: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  contact?: {
    phone: string;
    email: string;
  };
}

const Navbar1 = ({
  logo = {
    url: "#home",
    alt: "BY Group Logo",
    title: "BY",
  },
  menu = [
    { title: "首页", url: "#home" },
    { title: "关于我们", url: "#about" },
    { title: "服务介绍", url: "#services" },
    { title: "成功案例", url: "#cases" },
    { title: "出海流程", url: "#process" },
    { title: "联系我们", url: "#contact" },
  ],
  mobileExtraLinks = [
    { name: "全球办公室", url: "#contact" },
    { name: "合作伙伴", url: "#cases" },
    { name: "年轻化方法论", url: "#services" },
    { name: "品牌孵化", url: "#services" },
  ],
  contact = {
    phone: "400 920 0986",
    email: "info@bygroup.net.cn",
  },
}: Navbar1Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);

      // Update active section based on scroll position
      const sections = menu.map(item => item.url);
      let currentSection = "#home";
      
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menu]);
  
  const scrollToSection = (url: string) => {
    const element = document.querySelector(url);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.section 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-2 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" 
          : "py-4 bg-white/90 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="hidden justify-between lg:flex items-center">
          <div className="flex items-center gap-8">
            <motion.a 
              href={logo.url} 
              className="flex items-center gap-3 group cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(logo.url);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-black to-gray-800 text-white flex items-center justify-center font-bold text-lg rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                whileHover={{ 
                  background: "linear-gradient(135deg, #1f2937 0%, #000000 100%)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                }}
              >
                BY
              </motion.div>
              <span className="text-xl font-light tracking-wide text-gray-900 group-hover:text-black transition-colors">
                年轻化创新集团
              </span>
            </motion.a>
            <div className="flex items-center ml-8">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item, scrollToSection, activeSection))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="hidden xl:flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Phone className="size-4" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="size-4" />
                <span>{contact.email}</span>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LiquidButton
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="h-10 px-5"
              >
                开始合作
              </LiquidButton>
            </motion.div>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <motion.a 
              href={logo.url} 
              className="flex items-center gap-2 group cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(logo.url);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-9 h-9 bg-gradient-to-br from-black to-gray-800 text-white flex items-center justify-center font-bold text-base rounded-lg shadow-md">
                BY
              </div>
              <span className="text-lg font-light text-gray-900">年轻化创新集团</span>
            </motion.a>
            <Sheet>
              <SheetTrigger asChild>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="icon" className="border-2 hover:border-black transition-colors">
                    <Menu className="size-4" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a 
                      href={logo.url} 
                      className="flex items-center gap-2"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(logo.url);
                      }}
                    >
                      <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-lg">
                        BY
                      </div>
                      <span className="text-lg font-semibold">
                        {logo.title}
                      </span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <div className="flex w-full flex-col gap-2">
                    {menu.map((item) => renderMobileMenuItem(item, scrollToSection, activeSection))}
                  </div>
                  <div className="border-t py-4">
                    <div className="grid grid-cols-2 justify-start">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                          href={link.url}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(link.url);
                          }}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Phone className="size-4" />
                        <span>{contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="size-4" />
                        <span>{contact.email}</span>
                      </div>
                    </div>
                    <Button 
                      asChild
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("#contact");
                      }}
                    >
                      <a href="#contact">开始合作</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const renderMenuItem = (item: MenuItem, scrollToSection: (url: string) => void, activeSection: string) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3">
            <NavigationMenuLink>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <a
                    className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground cursor-pointer"
                    href={subItem.url}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(subItem.url);
                    }}
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-muted-foreground">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  const isActive = activeSection === item.url;
  
  return (
    <motion.a
      key={item.title}
      className={`group relative inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
        isActive 
          ? "text-black bg-gray-100 shadow-sm" 
          : "text-gray-600 hover:text-black hover:bg-gray-50"
      }`}
      href={item.url}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(item.url);
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {item.title}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full"
          layoutId="activeIndicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.a>
  );
};

const renderMobileMenuItem = (item: MenuItem, scrollToSection: (url: string) => void, activeSection?: string) => {
  if (item.items) {
    return (
      <Accordion key={item.title} type="single" collapsible className="w-full">
        <AccordionItem value={item.title} className="border-b-0">
          <AccordionTrigger className="py-0 font-semibold hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="mt-2">
            {item.items.map((subItem) => (
              <a
                key={subItem.title}
                className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground cursor-pointer"
                href={subItem.url}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(subItem.url);
                }}
              >
                {subItem.icon}
                <div>
                  <div className="text-sm font-semibold">{subItem.title}</div>
                  {subItem.description && (
                    <p className="text-sm leading-snug text-muted-foreground">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  const isActive = activeSection === item.url;
  
  return (
    <motion.a 
      key={item.title} 
      href={item.url} 
      className={`font-medium cursor-pointer block py-3 px-2 rounded-lg transition-colors ${
        isActive ? "text-black bg-gray-100" : "text-gray-700 hover:text-black hover:bg-gray-50"
      }`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(item.url);
      }}
      whileHover={{ scale: 1.01, x: 4 }}
      whileTap={{ scale: 0.99 }}
    >
      {item.title}
    </motion.a>
  );
};

export { Navbar1 };