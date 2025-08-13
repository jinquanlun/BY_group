import { Menu, Phone, Mail } from "lucide-react";

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
  icon?: JSX.Element;
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
  
  const scrollToSection = (url: string) => {
    const element = document.querySelector(url);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
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
              <span className="text-lg font-semibold">{logo.title}</span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item, scrollToSection))}
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
            <LiquidButton
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="h-10 px-5"
            >
              开始合作
            </LiquidButton>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
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
              <span className="text-lg font-semibold">{logo.title}</span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
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
                  <div className="flex w-full flex-col gap-4">
                    {menu.map((item) => renderMobileMenuItem(item, scrollToSection))}
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
    </section>
  );
};

const renderMenuItem = (item: MenuItem, scrollToSection: (url: string) => void) => {
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

  return (
    <a
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground cursor-pointer"
      href={item.url}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(item.url);
      }}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem, scrollToSection: (url: string) => void) => {
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

  return (
    <a 
      key={item.title} 
      href={item.url} 
      className="font-semibold cursor-pointer block py-2"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(item.url);
      }}
    >
      {item.title}
    </a>
  );
};

export { Navbar1 };